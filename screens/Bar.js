
import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  Modal,
} from "react-native";
import { useState } from "react";
import FocusedStatusBar from "../components/FocusedStatusBar";
import ItemCard from "../components/ItemCard";
import { ScrollView } from "react-native-gesture-handler";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const DATA2 = [
    {
      name: "Garden Farm",
      img: require("../assets/FoodImages/Cocktails/GardenFarm.png"),
    },
    {
      name: "Margarita",
      img: require("../assets/FoodImages/Cocktails/Margarita.jpg"),
    },
    {
      name: "Martini",
      img: require("../assets/FoodImages/Cocktails/Martini.jpg"),
    },
    {
      name: "Mary Pickford",
      img: require("../assets/FoodImages/Cocktails/MaryPickford.jpg"),
    }
];  
const BarScreen = () =>{
    return(
    <View>
        <ImageBackground
            source={require("../assets/menubg2.jpeg")}
            style={{ width: windowWidth, height: windowHeight }}
            >
        <FlatList 
        data={DATA2}
        renderItem={({ item }) => (
          <Pressable>
            <View>
              <Image source={item.img} style={styles.items} />
              <Text style={styles.titletext}>{item.name}</Text>
            </View>
          </Pressable>
        )}
        showsVerticalScrollIndicator={true}
        />
        </ImageBackground>
    </View>
    )
}

const styles = StyleSheet.create({
    menu: {
      flex: 1,
      backgroundColor: "white",
    },
    items: {
      width: windowWidth ,
      height: windowHeight/4,
      marginHorizontal: 0,
      borderRadius: 0
    },
    titletext: {
      fontSize: 30,
      margin: 5,
      alignItems: "center",
    },
});
  

export default BarScreen