import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default function Input() {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.email}
        placeholder="Email..."
        placeholderTextColor="#21c87c"
      />
      <TextInput 
        style={styles.pass}
        placeholder="Password..."
        placeholderTextColor="#21c87c"
        secureTextEntry={true} 
      />
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.signupText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#21c87c',
    padding: 0,
  },
  email: {
    backgroundColor: 'white',
    width: "80%",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    marginLeft: 40,
    padding: 15,
    marginTop: 12,
    fontSize: 15,
  },
    pass: {
    backgroundColor: 'white',
    width: "80%",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    marginLeft: 40,
    padding: 15,
    fontSize: 15
  },
  forgot: {
    fontSize: 12,
    color: 'white',
    marginLeft: 155
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#ffffff",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 40
  },
  loginText: {
    color: "#21c87c",
    fontWeight: 'bold',
    fontSize: 14
  },
  signupText: {
    color: "#ffffff",
    fontSize: 12,
    marginLeft: 185
  },
});
