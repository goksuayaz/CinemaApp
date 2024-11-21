import { View, Text, TouchableWithoutFeedback, Dimensions, FlatList, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { image500 } from '../../utils/moviesapi';


const { width, height } = Dimensions.get("window");



export default function PopularMovie({ title, data }) {

    const navigation = useNavigation();
    const renderItem = ({ item, index }) => {

        return (
            <TouchableWithoutFeedback key={index} onPress={() => navigation.push("Movie", item)}>

                <View style={{ marginBottom: 4, marginRight: 4 }}>
                    <Image
                        source={{
                            uri: image500(item.poster_path),

                        }}

                        style={{
                            width: width * 0.3,
                            height: height * 0.2,
                            borderRadius: 24,

                        }}

                    />




                    <Text
                        style={{
                            color: '#d1d5db',
                            marginLeft: 4,
                            fontSize: 18,
                            fontWeight: 'bold'
                        }} >
                        {
                            item.title.length > 12 ? item.title.slice(0, 12) + "..." : item.title
                        }



                    </Text>

                </View>



            </TouchableWithoutFeedback >

        )
    }




    return (
        <View style={{ marginBottom: 16, gap: 16 }}>
            <View style={{ marginHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}> {title} </Text>

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




