import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle, formHeading, inputOptions, formStyles as styles} from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";
const Verify = ({ navigation }) => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const loading = false;
  const sumbitHandler = () => {
    alert("yeah");
    //will remove this in future;
    navigation.navigate("login")
  };
  return (
    <>
      <View style={{...defaultStyle,backgroundColor: colors.color2}}>
        <View
          style={{
            marginBottom: 20,
          }}
        >
          <Text style={formHeading}>Reset Password</Text>
        </View>

        <View style={styles.container}>
          <TextInput
            {...inputOptions}
            placeholder="OTP"
            value={otp}
            onChangeText={setOtp}
            keyboardType="number-pad"
          />
          <TextInput
            {...inputOptions}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <Button
            loading={loading}
            style={styles.btn}
            textColor={colors.color2}
            disabled={otp === "" || password===""}
            onPress={sumbitHandler}
          >
            Reset
          </Button>
          <Text style={styles.or}>OR</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("forgetpassword")}
          >
            <Text style={styles.link}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer activeRoute="profile"/>
    </>
  );
};


export default Verify