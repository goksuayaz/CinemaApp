import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';

export default function WelcomeScreen() {

    const navigation = useNavigation();


    return (
        <View style={{
            backgroundColor: "#fff",
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: "center"

        }}>

            <Image
                source={require("../../assets/images/welcome.png")}
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    opacity: 0.7,
                }}
                resizeMode="cover"

            />
            <StatusBar style="light" />


            {/* {Title and Button } */}

            <View
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center', maxWidth: '80%' }}
            >
                <View style={{ backgroundColor: 'red', width: 80, height: 50, borderRadius: 8, marginTop: 150 }} >

                    <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 15, paddingLeft: 20 }}> M&C </Text>


                </View>
                <Text
                    style={{ color: 'white', fontWeight: 'bold', margin: 10, fontSize: 50, }}> Movie Cinema</Text>
                <Text
                    style={{ color: 'white' }}> Watch and find movies that bring your mood back! </Text>



                <View>
                    <TouchableOpacity

                        style={{ margin: 50, borderRadius: 8, backgroundColor: 'red', width: 100, height: 30 }}
                        onPress={() => navigation.navigate("HomeTab")}>



                        <Text
                            style={{ color: 'white', paddingLeft: 20, marginTop: 5, fontWeight: 'bold' }}>
                            EXPLORE
                        </Text>



                    </TouchableOpacity>
                </View>



            </View>
            <Text style={{ color: "gray" }}>Welcome Screen</Text>
        </View >
    );
}