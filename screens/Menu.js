import React from 'react'
import {SectionList, FlatList, StyleSheet, View,Text} from 'react-native'


const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  },
  {
    title: "Just Veggie Tings",
    data: ["Green Veggie", "Paneer", "Paneer 2.0", "Paneer Special Edition"]
  },
  {
    title: "Bar",
    data: ["Sex on the beach", "Sunset Shaker", "your mom"]
  }
];

const ItemCard = ({title}) => {
  return (<View style={styles.items}>
    <Text style={styles.itemFont}>
      {title}
    </Text>
  </View>)
}

const Menu = () => {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => null}
      renderSectionHeader={({ section }) => (
        <>
          <Text style={{fontSize: 25}}>{section.title}</Text>
          <FlatList
          horizontal
          data={section.data}
          renderItem={({ item }) => <ItemCard title={item} />}
          showsHorizontalScrollIndicator={false}
        />
        </>
      )}
    />
  )
}

const styles = StyleSheet.create(
  {
    menu: {
      flex: 1,
      backgroundColor: "white"
    },
    items: {
      backgroundColor: "pink"
    },
    itemFont: {
      fontSize: 100
    }
  }
)

export default Menu