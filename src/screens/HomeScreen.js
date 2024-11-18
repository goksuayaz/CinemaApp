import { View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';
import TrendingMovies from '../components/TrendingMovie';
import { useQuery } from '@tanstack/react-query';
import { fetchTrendingMovie } from '../../utils/moviesapi';
import Loading from '../components/TrendingMovie/Loading';

export default function HomeScreen() {


    const navigation = useNavigation();
    const [trending, setTrending] = useState([]);

    const { isLoading: isTrendingLoading } = useQuery({
        queryKey: ["trendingMovies"],
        queryFn: fetchTrendingMovie,
        onSuccess: (data) => {
            setTrending(data.results)
        },

        onError: (error) => {
            console.log("Error fetching trending Movies", error);
        },

    });


    console.log("Trending Movies", trending);

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
                        {trending?.length > 0 && <TrendingMovies data={trending} />}


                    </ScrollView>
                )}





            </ScrollView>
        </View>


    );
}