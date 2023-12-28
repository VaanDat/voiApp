import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/SignInScreen";
import Register from "../screens/RegisterScreen";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/HomeScreen";
// import Profile from "../screens/ProfileScreen";
// import Cart from "../screens/CartScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  // function BottomTabs() {
  //   return (
  //     <Tab.Navigator>
  //       <Tab.Screen
  //         name="Home"
  //         component={Home}
  //         options={{
  //           tabBarLabel: "Home",
  //           tabBarLabelStyle: { color: "#008E97" },
  //           headerShown: false,
  //           tabBarIcon: ({ focused }) =>
  //             focused ? (
  //               <Entypo name="home" size={24} color="#008E97" />
  //             ) : (
  //               <AntDesign name="home" size={24} color="black" />
  //             ),
  //         }}
  //       />

  //       <Tab.Screen
  //         name="Profile"
  //         component={Profile}
  //         options={{
  //           tabBarLabel: "Profile",
  //           tabBarLabelStyle: { color: "#008E97" },
  //           tabBarIcon: ({ focused }) =>
  //             focused ? (
  //               <Ionicons name="person" size={24} color="#008E97" />
  //             ) : (
  //               <Ionicons name="person-outline" size={24} color="black" />
  //             ),
  //         }}
  //       />

  //       <Tab.Screen
  //         name="Cart"
  //         component={Cart}
  //         options={{
  //           tabBarLabel: "Cart",
  //           tabBarLabelStyle: { color: "#008E97" },
  //           headerShown: false,
  //           tabBarIcon: ({ focused }) =>
  //             focused ? (
  //               <AntDesign name="shoppingcart" size={24} color="#008E97" />
  //             ) : (
  //               <AntDesign name="shoppingcart" size={24} color="black" />
  //             ),
  //         }}
  //       />
  //     </Tab.Navigator>
  //   );
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const style = StyleSheet.create({});
