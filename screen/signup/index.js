// src/GameScreen.js
import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';
import Axios from "axios";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

const Signup = () => {
        const [formData, setFormData] = useState({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        const [loading, setLoading] = useState(false);
        const navigation = useNavigation(); // Initialize useNavigation hook
      
        const handleChange = (name, value) => {
          setFormData({ ...formData, [name]: value });
        };
      
        const handleSubmit = async () => {
          try {
            const { password, confirmPassword } = formData;
      
            if (password !== confirmPassword) {
              return Alert.alert("Coba lagi", "Password not matched !");
            }
            setLoading(true);
      
            const response = await Axios.post(`https://dtpl-be.vercel.app/register`, formData);
      
            setLoading(false);
      
            setFormData({
              fullName: "",
              email: "",
              password: "",
              confirmPassword: "",
            });
            console.log(response);
            Alert.alert("Berhasil", "Register Berhasil !");
            return navigation.replace("Login");
          } catch (error) {
            setLoading(false);
            console.log(error);
          }
        
        };
  return (
    <View style ={{backgroundColor: "#1F319D", flex: 1}}>
        <Text style={{ color: 'white', fontSize: 35, padding: 50, marginBottom: 30, fontWeight: 'bold'}}></Text>
        <View style ={{ borderRadius: 20, backgroundColor: "white", padding: 50, height: '100%'}}>
            
            <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>Buat Akun Anda</Text>
            <View style={{ gap: 5 }}>
                <TextInput 
                    placeholder = 'Nama Lengkap' 
                    style={{marginTop: 20, borderColor: '#1F319D', borderWidth: 2, padding: 20, borderRadius: 10}}
                    value={formData.fullName}
                    onChangeText = {(text) => handleChange("fullName", text)}
                    />
                <TextInput 
                    placeholder = 'username@email.com' 
                    style={{marginTop: 20, borderColor: '#1F319D', borderWidth: 2, padding: 20, borderRadius: 10}}
                    value={formData.email}
                    onChangeText = {(text) => handleChange("email", text)}
                    />
                <TextInput 
                    placeholder = 'Password' 
                    style={{marginTop: 20, borderColor: '#1F319D', borderWidth: 2, padding: 20, borderRadius: 10}}
                    value={formData.password}
                    onChangeText = {(text) => handleChange("password", text)}
                    />
                <TextInput 
                    placeholder = 'Confirm Password' 
                    style={{marginTop: 20, borderColor: '#1F319D', borderWidth: 2, padding: 20, borderRadius: 10}}
                    value={formData.confirmPassword}
                    onChangeText = {(text) => handleChange("confirmPassword", text)}
                    />
            </View>
            <View style={{marginTop: 40, gap: 20, display: 'flex', justifyContent:'space-evenly'}}>
                <TouchableOpacity onPress = {handleSubmit} style={{borderRadius: 20, backgroundColor: '#1F319D', paddingHorizontal: 20, paddingVertical: 10, }}>
                    <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 15}}>
                        Sign Up
                    </Text> 
                </TouchableOpacity>
                <Text style ={{textAlign: 'center', fontSize: 15}}>atau</Text>
                <TouchableOpacity onPress = {() => navigation.navigate("Login")} style={{borderRadius: 20, borderColor: '#1F319D', borderWidth: 2, paddingHorizontal: 20, paddingVertical: 10, }}> 
                    <Text style={{color: '#1F319D', textAlign: 'center',}}>
                        Sudah Punya Akun? Login
                    </Text> 
                </TouchableOpacity>
            </View>
            
        </View>
    </View>
  );
};

export default Signup;
