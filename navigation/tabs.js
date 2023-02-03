import React from 'react';
import { Image, Text, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, icons } from '../constants';
import { Home, Search, Box, Camera, Favourite} from '../screens';

const Tab = createBottomTabNavigator();

const CameraButton = () =>{
    return (
        <View
         style={{
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.primary
         }}
        >
            <Image
             source={icons.camera}
             resizeMode="contain"
             style={{
                height: 25,
                width: 25,
             }}
            />

        </View>
    )
}

const Tabs = () =>{
    return (
        <Tab.Navigator
         screenOptions = {({ route })=>({
            tabBarIcon: ({ focused }) =>{
                const tintColor= focused  ? COLORS.primary : COLORS.gray;

                switch (route.name) {
                    case "Home":
                        return (
                            <Image 
                             source={icons.flashIcon}
                             resizeMode="contain"
                             style={{
                                tintColor: tintColor,
                                width: 25,
                                height: 25
                             }}
                            />
                        )
                    case "Box":
                        return (
                            <Image 
                             source={icons.cubeIcon}
                             resizeMode="contain"
                             style={{
                                tintColor: tintColor,
                                width: 25,
                                height: 25
                             }}
                            />
                        )
                    case "Camera":
                        return (
                           <CameraButton/>
                        )
                    case "Search":
                        return (
                            <Image 
                            source={icons.searchIcon}
                            resizeMode="contain"
                            style={{
                               tintColor: tintColor,
                               width: 25,
                               height: 25
                            }}
                           />
                        )
                    case "Favourite":
                        return (
                            <Image 
                             source={icons.heartIcon}
                             resizeMode="contain"
                             style={{
                                tintColor: tintColor,
                                width: 25,
                                height: 25
                             }}
                            />
                        )
                }
            },
            "tabBarShowLabel": false,
            "tabBarStyle": [
              {
                "display": "flex",
                height: "10%"
              },
              null
            ]
         })}
        >
            <Tab.Screen name="Home" component={Home} options={{ headerShown:false}}/>
            <Tab.Screen name="Box" component={Box}/>
            <Tab.Screen name="Camera" component={Camera}/>
            <Tab.Screen name="Search" component={Search}/>
            <Tab.Screen name="Favourite" component={Favourite}/>
        </Tab.Navigator>
    )
}

export default Tabs