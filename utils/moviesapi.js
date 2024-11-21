import { movieapikey } from "./apikey";
import axios from "axios";


//Endpoints

const apiBaseUrl = "https://api.themoviedb.org/3";

const trendingMoviesEndPoint = `${apiBaseUrl}/trending/movie/day?api_key=${movieapikey}`;
const popularMoviesEndPoint = `${apiBaseUrl}/movie/poular?api_key=${movieapikey}`;
const upcomingMoviesEndPoint = `${apiBaseUrl}/movie/upcoming?api_key=${movieapikey}`;
const topRatedMoviesEndPoint = `${apiBaseUrl}/movie/top_rated?api_key=${movieapikey}`;
const genresMoviesEndPoint = `${apiBaseUrl}/genre/movie/list?api_key=${movieapikey}`;






//Api call to get movies

const movieApiCall = async (endpoints, params) => {
    const options = {
        method: "GET",
        url: endpoints,
        params: params ? params : {},



    };

    try {
        const response = await axios.request(options);
        // console.log("API Response:", response.data); // Burası yükleniyor
        return response.data;

    } catch (error) {
        console.log(error);
        return {};
    }


};

//Functions to get Images of different sizes and width

export const image500 = (posterpath) =>
    posterpath ? "https://image.tmdb.org/t/p/w500" + posterpath : null;

//Home Screen Apis

export const fetchTrendingMovie = () => {
    return movieApiCall(trendingMoviesEndPoint);
};


export const fetchPopularMovie = () => {
    return movieApiCall(popularMoviesEndPoint);
};


export const fetchUpComingMovie = () => {
    return movieApiCall(upComingMoviesEndPoint);
};

export const fetchTopRatedMovie = () => {
    return movieApiCall(topRatedMoviesEndPoint);
};


export const fetchGenres = () => {
    return movieApiCall(genresEndpoint);
};













