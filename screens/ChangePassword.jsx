import { View, Text } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle, formHeading, inputOptions, formStyles as styles } from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { updatePassword } from "../redux/actions/otherAction";
import { useMessageAndErrorother } from "../utils/hooks";
const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  
  
  const dispatch = useDispatch();

  const loading = useMessageAndErrorother(dispatch);
  const sumbitHandler = () => {
    dispatch(updatePassword(oldPassword, newPassword));
    setOldPassword("");
    setNewPassword("");
  };
  return (

      <View style={{...defaultStyle,backgroundColor: colors.color2}}>
        <Header back={true}/>
        <View
          style={{
            marginBottom: 20,
            paddingTop: 70
          }}
        >
          <Text style={formHeading}>Change Password</Text>
        </View>

        <View style={styles.container}>
          
          <TextInput
            {...inputOptions}
            placeholder="Old Password"
            secureTextEntry={true}
            value={oldPassword}
            onChangeText={setOldPassword}
          />
           <TextInput
            {...inputOptions}
            placeholder="New Password"
            secureTextEntry={true}
            value={newPassword}
            onChangeText={setNewPassword}
          />


          <Button
            loading={loading}
            style={styles.btn}
            textColor={colors.color2}
            disabled={oldPassword === "" || newPassword === ""}
            onPress={sumbitHandler}
          >
            Change
          </Button>

        </View>
      </View>
  );
};

export default ChangePassword