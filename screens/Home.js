import React from 'react'
import { Pressable, ImageBackground, TouchableOpacity, Button, StyleSheet, Text, View } from 'react-native'
const Home = ({navigation}) => {
  return (
    <View style={styles.main}>
        <ImageBackground source={require("../background-restaurant.jpeg")} style={styles.main}>
            <Text style ={styles.hometext}>
                Welcome to Stories
            </Text>
            <Pressable style={styles.menuButton} onPress={() => navigation.navigate("Menu")}>
                <Text style={{fontSize: 40, color: 'white'}}>Menu</Text>
            </Pressable>
            <Text style={{bottom:0, position: 'absolute', paddingBottom: 20, color: 'white', alignSelf: 'center'}}>
                Disclaimer: Handle Device with care - Stories Management
            </Text>
        </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
    main:{
        height: '100%',
        width: '100%'

    },
    hometext : {
        marginTop: 150,
        flex: 0.1,
        paddingVertical: 40,
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 4,
        color: "white",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        width : 300,
        justifyContent: "center",
        alignSelf: "center"
    },
    menuButton: {
        flex: 0.5,
        marginTop: 40,
        alignSelf: 'center',
        paddingTop: '50%',
        
    }
})

export default Home