import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  formStyles as styles,
} from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import Header from "../components/Header";
const UpdateProfile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const loading = false;

  const disableBtn = !name || !email || !address || !city || !country || !pincode
  const sumbitHandler = () => {
    alert("yeah");
  };
  return (
      <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
        <Header back={true}/>
        <View
          style={{
            marginBottom: 20,
            paddingTop: 70
          }}
        >
          <Text style={formHeading}>Edit Profile</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            padding: 20,
            elevation: 10,
            borderRadius: 10,
            backgroundColor: colors.color3,
          }}
        >
          <View style={{}}>

            <TextInput
              {...inputOptions}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              {...inputOptions}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <TextInput
              {...inputOptions}
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
            />

            <TextInput
              {...inputOptions}
              placeholder="City"
              value={city}
              onChangeText={setCity}
            />
            <TextInput
              {...inputOptions}
              placeholder="Country"
              value={country}
              onChangeText={setCountry}
            />
            <TextInput
              {...inputOptions}
              placeholder="Pin code"
              value={pincode}
              onChangeText={setPincode}
            />
            <Button
              loading={loading}
              style={styles.btn}
              textColor={colors.color2}
              disabled={disableBtn}
              onPress={sumbitHandler}
            >
             Update
            </Button>
            
          </View>
        </ScrollView>
      </View>
  );
};



export default UpdateProfile;