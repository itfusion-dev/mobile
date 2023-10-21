import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function Home() {
    return (
        <View style = {{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "fff"
        }}>
            <Text style = {{
                fontSize: 20,
                fontWeight: "bold"
            }}> Home </Text>
        </View>
    )
}

function About() {
    return (
        <View style = {{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "fff"
        }}>
            <Text style = {{
                fontSize: 20,
                fontWeight: "bold"
            }}> About </Text>
        </View>
    )
}

function Settings() {
    return (
        <View style = {{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "fff"
        }}>
            <Text style = {{
                fontSize: 20,
                fontWeight: "bold"
            }}> Settings </Text>
        </View>
    )
}

const Tab = createMaterialTopTabNavigator();

function Tabs() {
    const insets = useSafeAreaInsets();
    return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "red",
          labelStyle: { fontSize: 12 },
          style: { backgroundColor: "white", marginTop: insets.top },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ TabBarLabel: "Home" }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{ TabBarLabel: "About" }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{ TabBarLabel: "Settings" }}
        />
      </Tab.Navigator>
    );
  }  

export default function TopBar() {
    return (
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
    )
}