import { View, Text, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { image500 } from "../../utils/moviesapi";

const { width, height } = Dimensions.get("window");



export default function TopRatedMovies({ data, title, genre }) {

    const navigation = useNavigation();




    const renderItem = ({ item, index }) => {
        const itemGenre = genre.find((g) => g.id === item.genre_ids[0]);

        return (
            <TouchableWithoutFeedback
                key={index}
                onPress={() => navigation.push("Movie", item)}>

                <View style={{ gap: 4, marginRight: 16, marginBottom: 24 }}>
                    <Image
                        source={{
                            uri: image500(item.poster_path),
                        }}

                        style={{
                            width: width * 0.63,
                            height: height * 0.15,
                            borderRadius: 24,
                            position: "relative"
                        }} />

                    <View style={{ position: "absolute", bottom: "0.75rem", left: "0.75rem" }}>
                        <Text style={{ color: "#d1d5db", marginLeft: "0.25rem", fontSize: "1.125rem", fontWeight: "bold" }}>

                            {

                                item.title.length > 20 ? item.title.slice(0, 20) + "..." : item.title


                            }

                        </Text>

                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ color: "#d1d5db", marginLeft: "0.25rem", fontSize: "0.875rem", fontWeight: 500 }}> {item.vote_average} * </Text>
                            <Text style={{ color: "#d1d5db", marginLeft: "0.25rem", fontSize: "0.875rem", fontWeight: 500 }}> {itemGenre?.name} </Text>




                        </View>

                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }


    return (
        <View style={{ gap: 4, marginHorizontal: 16 }}>
            <View style={{ marginHorizontal: 16, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                <Text style={{ color: "white", fontSize: 8, fontWeight: "bold" }}> {title} </Text>
            </View>

            <FlatList
                horizontal
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}

                contentContainerStyle={{
                    paddingHorizontal: 15,

                }}
            />

        </View>
    )
}




