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
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import FocusedStatusBar from "../components/FocusedStatusBar";
import ItemCard from "../components/ItemCard";
import { ScrollView } from "react-native-gesture-handler";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import BestSellerScreen from './Best Sellers';


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



const Menu = ({navigation}) => {
  return (
    <SafeAreaView>
    <View>
      <ImageBackground
        source={require("../assets/menubg2.jpeg")}
        style={{ width: windowWidth, height: windowHeight }}
      >
      <ScrollView>
        {/* <Modal>
          <View>

          </View>
        </Modal> */}
        <Pressable onPress ={()=> navigation.navigate("Best Sellers")}>
          <Text style={styles.titletext}>Best Sellers</Text>
        </Pressable>
        <FlatList
          horizontal
          data={DATA}
          renderItem={({ item }) => (
            <Pressable>
              <View>
                <Image source={item.img} style={styles.items} />
              </View>
            </Pressable>
          )}
          showsHorizontalScrollIndicator={false}
        />
        <Pressable onPress ={()=> navigation.navigate("Bar")}>
          <Text style={styles.titletext}>Bar</Text>
        </Pressable>
        <FlatList
          horizontal
          data={DATA2}
          renderItem={({ item }) => (
            <Pressable>
              <View>
                <Image source={item.img} style={styles.items} />
              </View>
            </Pressable>
          )}
          showsHorizontalScrollIndicator={false}
        />
        <Pressable>
          <Text style={styles.titletext}>Pizzas</Text>
        </Pressable>
        <FlatList
          horizontal
          data={DATA}
          renderItem={({ item }) => (
            <Pressable>
              <View>
                <Image source={item.img} style={styles.items} />
              </View>
            </Pressable>
          )}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.titletext}>Best Sellers</Text>
        <FlatList
          horizontal
          data={DATA}
          renderItem={({ item }) => (
            <Pressable>
              <View>
                <Image source={item.img} style={styles.items} />
              </View>
            </Pressable>
          )}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.titletext}>Best Sellers</Text>
        <FlatList
          horizontal
          data={DATA}
          renderItem={({ item }) => (
            <Pressable>
              <View>
                <Image source={item.img} style={styles.items} />
              </View>
            </Pressable>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
      </ImageBackground>
    </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: "white",
  },
  items: {
    width: windowWidth * 0.7,
    height: windowHeight / 5,
    marginHorizontal: 10,
    borderRadius: 10
  },
  titletext: {
    fontSize: 30,
    margin: 5,
    alignItems: "center",
  },
});

export default Menu;
