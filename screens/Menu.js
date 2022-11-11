import React from "react";
import { SectionList, FlatList, StyleSheet, View, Text } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const DATA = [
  {
    title: "Main Dishes",
    images: [{name: "pizza", img: require("./assets/FoodImages/Pizzas/ClassicMargherita.jpg")},
    {name: "pasta", img: require("./assets/FoodImages/Pastas/ArrabiataSauce.jpg")},
    {name: "eggnostic", img: require("./assets/FoodImages/Eggnostic/EggGheeRoast.jpg")},
    {name: "salads", img: require("./assets/FoodImages/salads/CeaserSalad.jpg")},
    {name: "chicken", img: require("./assets/chicken/tangdikebab.jpg")},
  ],
  },
  {
    title: "Bar",
    images: [{name: "garden farm", img: require("./assets/FoodImages/Cocktails/GardenFarm.png")},
    {name: "gin basil", img: require("./assets/FoodImages/Cocktails/GinBasilSmash.png")},
    {name: "martini", img: require("./assets/FoodImages/Cocktails/Martini.jpg")},
    {name: "stories untraveled", img: require("./assets/FoodImages/Cocktails/TheStoriesUntravalled.png")},
    {name: "mary pickford", img: require("./assets/FoodImages/Cocktails/MaryPickford.jpg")},
  ],
  },
];


const ItemCard = ({ title }) => {
  return (
    <View style={styles.items}>
      <Text style={styles.itemFont}>{title}</Text>
    </View>
  );
};

const Menu = () => {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => null}
      renderSectionHeader={({ section }) => (
        <>
          <Pressable>
            <View style={{justifyContent: "center", margin: 7}}>
            <Text style={{ fontSize: 30}}>{section.title}</Text>
            </View>
          </Pressable>
          <FlatList
            horizontal
            data={section.data}
            renderItem={({ item }) => (
            <Pressable>
            <View>
              <Image source = {item.images.img}/>
            </View>
            </Pressable>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </>
      )}  
    />
  );
};

const Menu1 = () => {};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: "white",
  },
  items: {
    backgroundColor: "pink",
  },
  itemFont: {
    fontSize: 100,
  },
});

export default Menu;