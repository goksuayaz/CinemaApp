import { View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';
import TrendingMovie from '../components/TrendingMovie';
import { useQuery } from '@tanstack/react-query';
import { fetchTrendingMovie, fetchTopRatedMovie, fetchPopularMovie, fetchUpComingMovie } from '../../utils/moviesapi';
import Loading from '../components/TrendingMovie/Loading';
import TopRatedMovies from '../components/TopRatedMovies';
import PopularMovie from "../components/PopularMovie";
import UpcomingMovie from "../components/UpcomingMovie";


export default function HomeScreen() {


    const navigation = useNavigation();
    const [trending, setTrending] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [popular, setPopular] = useState([]);
    const [upcoming, setUpComing] = useState([]);



    const { isLoading: isTrendingLoading } = useQuery({
        queryKey: ["trendingMovies"],
        queryFn: fetchTrendingMovie,
        onSuccess: (data) => {
            setTrending(data.results);
        },

        onError: (error) => {
            console.log("Error fetching trending Movies", error);
        },

    });



    const { isLoading: isTopRatedLoading } = useQuery({
        queryKey: ["topratedMovies"],
        queryFn: fetchTopRatedMovie,
        onSuccess: (data) => {
            setTopRated(data.results);
        },

        onError: (error) => {
            console.log("Error fetching Top Rated Movies", error);
        },

    });


    const { isLoading: isPopularLoading } = useQuery({
        queryKey: ["popularMovies"],
        queryFn: fetchPopularMovie,
        onSuccess: (data) => {
            setPopular(data.results);
        },

        onError: (error) => {
            console.log("Error fetching Popular Movies", error);
        },

    });



    const { isLoading: isUpComingLoading } = useQuery({
        queryKey: ["upcomingMovies"],
        queryFn: fetchUpComingMovie,
        onSuccess: (data) => {
            setUpComing(data.results);
        },

        onError: (error) => {
            console.log("Error fetching Upcoming Movies", error);
        },

    });








    return (


        <View style={{ flex: 1 }}>
            <Image
                source={require("../../assets/images/welcome.png")}
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    opacity: 0.6,
                }}
                resizeMode="cover"

            />

            <ScrollView>
                <StatusBar style="light" />

                {/* {Welcome Title} */}

                <View
                    style={{
                        flexDirection: "row", // flex-row
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginHorizontal: 16, // mx-4 
                        marginVertical: 16, // mg-4 
                    }}>

                    <View
                        style={{
                            borderWidth: 2,
                            borderColor: "white",
                            borderRadius: 500,
                            overflow: "hidden",
                            width: 45,
                            height: 45,
                            marginLeft: 10,
                            margin: 20




                        }}>

                        <Image
                            source={require("../../assets/images/avatar.png")}
                            style={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                opacity: 0.6

                            }}
                            resizeMode="cover"

                        />

                    </View>

                    {/* {Notification and Search Icon} */}

                    <View
                        style={{ flexDirection: 'row', marginRight: 16 }}>
                        <BellIcon size={30} strokeWidth={2} color="white" />

                        <TouchableOpacity onPress={() => navigation.navigate("Search")}  >

                            <MagnifyingGlassIcon
                                size={30} strokeWidth={2} color="white" />

                        </TouchableOpacity>
                    </View>

                    {/* {Movie Cards} */}
                </View>

                {isTrendingLoading ? (
                    <Loading />
                ) : (
                    <ScrollView>

                        {/* {Trending Movies} */}
                        {trending?.length > 0 && <TrendingMovie data={trending} />}

                        {/* {Popular Movies} */}
                        {popular?.length > 0 && (
                            <PopularMovie title="Popular" data={popular} />
                        )}

                        {/* {Top Rated Movies} */}
                        {topRated?.length > 0 && (
                            <TopRatedMovies genre={genre} title="Top Rated"
                                data={topRated} />)}

                        {/* {Upcoming Movies} */}
                        {upcoming?.length > 0 && (
                            <UpcomingMovie title="Upcoming"
                                data={upcoming} />)}

                    </ScrollView>
                )}



            </ScrollView>
        </View>


    );
}