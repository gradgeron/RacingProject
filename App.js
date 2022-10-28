import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [login,setLogin] = useState('');
  const [password,setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput style={styles.TextInput}
        placeholder="Login."
        placeholderTextColor="white"
        onChangeText = {(login) => setLogin(login)}/>
      </View>

      <View style={styles.inputView}>
        <TextInput
        style={styles.TextInput}
        placeholder="Password."
        placeholderTextColor="white"
        onChangeText = {(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity style={styles.inputBtn}>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  TextInput: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
  },
  forgot_button: {
    marginBottom: 30,
    height: 30,
  },
  inputView: {
    width: "70%",
    backgroundColor: 'blue',
    borderRadius: 10,
    height: 45,
    marginBottom: 20,
  },
  inputBtn: {
    width:"70%",
  },
  loginBtn: {
    width: "70%",
    backgroundColor: 'lightblue',
    borderRadius: 30,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: "white",
    fontSize: 30,
  },
});
