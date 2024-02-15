// src/GameScreen.js
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator,
    Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';
import Axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false); // State for loading indicator
    const navigation = useNavigation(); // Initialize useNavigation hook
  
    useEffect(() => {
      checkFullName();
    }, []);
  
    const checkFullName = async () => {
      const fullName = await AsyncStorage.getItem("fullName");
      if (fullName) {
        navigation.replace("Main");
      }
    };
  
    const handleLogin = async () => {
      setLoading(true); // Set loading to true when login starts
  
      try {
        const response = await Axios.post(`https://dtpl-be.vercel.app/login`, {
          email,
          password,
        });
  
        // kalo mau pake mock
        // const { passwordMock, emailMock, fullName } = mockLoginData;
  
        // if (passwordMock !== password && emailMock !== email) {
        //   return Alert.alert("Error", "Invalid email or password");
        // }
  
        // Save user's fullName to AsyncStorage
        await AsyncStorage.setItem("fullName", response.data.fullName);
  
        // kalo mau pake mock
        // await AsyncStorage.setItem("fullName", fullName);
  
        // Navigate to the Main screen upon successful login
        navigation.replace("Home");
      } catch (error) {
        Alert.alert("Error", "Invalid email or password");
        console.error(error);
      } finally {
        setLoading(false); // Set loading to false after login attempt (whether success or failure)
      }
    };

  return (
    <View style ={{backgroundColor: "#1F319D", flex: 1}}>
        <Text style={{ color: 'white', fontSize: 35, padding: 50, marginBottom: 30, fontWeight: 'bold'}}>Hi, Welcome!</Text>
        <View style ={{ borderRadius: 20, backgroundColor: "white", padding: 50, height: '100%'}}>
            
            <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>Masuk ke Akun Anda</Text>
            <View style={{ gap: 5 }}>
                <TextInput 
                placeholder = 'username@email.com' 
                style={{marginTop: 20, borderColor: '#1F319D', borderWidth: 2, padding: 20, borderRadius: 10}}
                onChangeText={(text) => setEmail(text)}
                value={email}
                />
                <TextInput 
                placeholder = 'Password' 
                style={{marginTop: 20, borderColor: '#1F319D', borderWidth: 2, padding: 20, borderRadius: 10}}
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}
                />
            </View>
            <View style={{marginTop: 40, gap: 20, display: 'flex', justifyContent:'space-evenly'}}>
                <TouchableOpacity onPress = {handleLogin} style={{borderRadius: 20, backgroundColor: '#1F319D', paddingHorizontal: 20, paddingVertical: 10, }}>
                    <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 15}}>
                        Login
                    </Text> 
                </TouchableOpacity>
                <Text style ={{textAlign: 'center', fontSize: 15}}>atau</Text>
                <TouchableOpacity onPress = {() => navigation.navigate("Signup")} style={{borderRadius: 20, borderColor: '#1F319D', borderWidth: 2, paddingHorizontal: 20, paddingVertical: 10, }}> 
                    <Text style={{color: '#1F319D', textAlign: 'center',}}>
                        Belum Punya Akun? Sign Up
                    </Text> 
                </TouchableOpacity>
            </View>
            
        </View>
    </View>
  );
};

export default Login;
