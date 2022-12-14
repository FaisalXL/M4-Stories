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

const DATA = [
  {
    name: "pizza",
    img: require("../assets/FoodImages/Pizzas/ClassicMargherita.jpg"),
  },
  {
    name: "pasta",
    img: require("../assets/FoodImages/Pastas/ArrabiataSauce.jpg"),
  },
  {
    name: "eggnostic",
    img: require("../assets/FoodImages/Eggnostic/EggGheeRoast.jpg"),
  },
  {
    name: "salads",
    img: require("../assets/FoodImages/salads/CeaserSalad.jpg"),
  }
];


const BestSellerScreen = () => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/menubg2.jpeg")}
        style={{ width: windowWidth, height: windowHeight }}
      >

      <FlatList 
        data={DATA}
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
  );
}
const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: "white",
  },
  items: {
    width: windowWidth ,
    height: windowHeight / 4,
    borderRadius: 0,
  },
  titletext: {
    fontSize: 30,
    margin: 5,
    alignItems: "center",
  },
  headText: {
    fontSize: 50,
    alignItems: "center",
    backgroundColor: "white"

  }
});


export default BestSellerScreen