import { setStatusBarHidden, StatusBar } from 'expo-status-bar';
import { Image, Pressable, Button,Alert, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home';
import Menu from './screens/Menu'
import PizzaScreen from './screens/Best Sellers';
import BestSellerScreen from './screens/Best Sellers';
import BarScreen from './screens/Bar';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  }
}
export default function App() {
  return (
    <NavigationContainer theme={theme}>
      {/* <StatusBar hidden/> */}
      <Stack.Navigator initialRouteName = "Home" >
      <Stack.Screen name="Home" component={Home} options={{
        title: "Stories",
        headerShown: false
      }} />
      <Stack.Screen name="Menu" component={Menu} options={{
        headerRight: () => {
          return(
          <Pressable>
            {/* <Image source={require("./cart-icon.png")} style={{height: 30,width: 30,alignSelf:"center"}}/> */}
          </Pressable>
          )
        }
      }}/>
      <Stack.Screen name="Best Sellers"  component={BestSellerScreen} options={{
        headerShadowVisible: false
      }} />
      <Stack.Screen name="Bar"  component={BarScreen} options={{
      }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
