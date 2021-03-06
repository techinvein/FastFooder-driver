import React from 'react';
import {
    Image,
    View,
    Button,
    TouchableOpacity
} from 'react-native';
  
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";

import SideMenu from '../components/SideMenu';
import HomeScreen from '../pages/HomeScreen';
import LoginScreen from '../pages/LoginScreen';
import ProductListScreen from '../pages/ProductList';
import CategoriesScreen from '../pages/CategoriesScreen';
import MyOrdersScreen from '../pages/MyOrdersScreen';
import LoginPageScreen from '../pages/LoginPageScreen';
import OtpScreen from '../pages/OtpScreen';
import LocationScreen from '../pages/LocationScreen';
import MyBasketScreen from '../pages/MyBasketScreen';

const AuthStack = createStackNavigator();
const AppStack = createDrawerNavigator();

const ProfileStack = createStackNavigator();

export const AuthStackScreen = () => (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Sign In", headerShown: false, }}
      />
    {/* <AppStack.Screen
        name="Login"
        component={LoginPageScreen}
        options={{ title: "Sign In", headerShown: false, }}
    /> */}

    </AuthStack.Navigator>
);

export const AppStackScreen = () => (
    <AppStack.Navigator drawerContent={props => <SideMenu {...props} />}>

        {/* HomeScreen */}
        <AppStack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Home", headerShown: false, }}
        />
        {/* ProductListScreen */}
        <AppStack.Screen
            name="ProductListScreen"
            component={ProductListScreen}
            options={{ title: "Product list", headerShown: false, }}
        />
        {/* CategoriesScreen */}
        <AppStack.Screen
            name="CategoriesScreen"
            component={CategoriesScreen}
            options={{ title: "Categories", headerShown: false, }}
        />
        {/* MyOrdersScreen */}
        <AppStack.Screen
            name="MyOrdersScreen"
            component={MyOrdersScreen}
            options={{ title: "My Orders", headerShown: false, }}
        />

        {/* Login second page */}
        
        <AppStack.Screen
            name="LoginPageScreen"
            component={LoginPageScreen}
            options={{ title: "Login", headerShown: false, }}
        />

        {/* OTP screen */}
        <AppStack.Screen
            name="OtpScreen"
            component={OtpScreen}
            options={{ title: "Otp ", headerShown: false, }}
        />

        {/* Location screen */}
        <AppStack.Screen
            name="LocationScreen"
            component={LocationScreen}
            options={{ title: "Select location ", headerShown: false, }}
        />

        {/* My basket screen */}
        <AppStack.Screen
            name="MyBasketScreen"
            component={MyBasketScreen}
            options={{ title: "My basket ", headerShown: false, }}
        />












    </AppStack.Navigator>
);

