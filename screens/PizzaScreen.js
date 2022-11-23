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
import { exp } from "react-native/Libraries/Animated/Easing";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const PizzaScreen =() =>{
  return(
    <View>
      <Text>Test</Text>
    </View>

  );
}

export default PizzaScreen;