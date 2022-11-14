import React from "react";
import {
  SectionList,
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

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
  },
  { name: "chicken", img: require("../assets/chicken/tangdikebab.jpg") },
];

const Menu = () => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/menubg2.jpeg")}
        style={{ width: windowWidth, height: windowHeight }}
      >
      <ScrollView>
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
        <Text style={styles.titletext}>Pizzas</Text>
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
  );
};

const Menu1 = () => {};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: "white",
  },
  items: {
    width: windowWidth * 0.7,
    height: windowHeight / 5,
    marginHorizontal: 10,
  },
  titletext: {
    fontSize: 30,
    margin: 5,
    alignItems: "center",
  },
});

export default Menu;
