import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { colors, defaultStyle, formHeading, inputOptions, formStyles as styles } from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/userActions";
import Toast from "react-native-toast-message";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  


  const {loading,message,error, isAuthenticated} = useSelector((state)=>state.user)
  console.log(loading,message,error, isAuthenticated)

  useEffect(()=>{
    if(error){
      Toast.show({
        type: "error",
        text1: error
      });
      dispatch({
        type:"clearError"
      })
    }
    if(message){
      navigation.navigate("profile")
      Toast.show({
        type: "success",
        text1: message
      })
      dispatch({
        type:"clearMessage"
      })
    }
  },[error,message])
  const sumbitHandler = () => {
    dispatch(login(email,password))
  };
  return (
    <>
      <View style={{...defaultStyle,backgroundColor: colors.color2}}>
        <View
          style={{
            marginBottom: 20,
          }}
        >
          <Text style={formHeading}>Login</Text>
        </View>

        <View style={styles.container}>
          <TextInput
            {...inputOptions}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            {...inputOptions}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("forgetpassword")}
          >
            <Text style={styles.forget}>Forget Password</Text>
          </TouchableOpacity>

          <Button
            loading={loading}
            style={styles.btn}
            textColor={colors.color2}
            disabled={email === "" || password === ""}
            onPress={sumbitHandler}
          >
            Log In
          </Button>
          <Text style={styles.or}>OR</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("signup")}
          >
            <Text style={styles.link}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer activeRoute="profile"/>
    </>
  );
};

export default Login;
