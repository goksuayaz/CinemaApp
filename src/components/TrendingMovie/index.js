import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import MovieCard from '../MovieCard';

var { width } = Dimensions.get("window");



export default function TrendingMovies({ data }) {

    const navigation = useNavigation();

    const handleClick = (item) => {
        navigation.navigate("Movie", { item });
    }


    return (
        <View style={{ marginTop: 2, marginBottom: 4 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginHorizontal: 16, marginBottom: 4 }}> Trending Movie</Text>



            </View>

            {/* {carousal} */}

            <Carousel
                data={data}
                renderItem={({ item }) =>
                    <MovieCard item={item} handleClick={handleClick} />}
                firstItem={1}
                inactiveSlideScale={0.86}
                inactiveSlideOpacity={0.6}
                sliderWidth={width}
                itemWidth={width * 0.8}
                slideStyle={{ display: "flex", alignItems: "center" }}

            />
        </View>
    )
}