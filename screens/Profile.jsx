import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle, formHeading } from "../styles/styles";
import { Avatar, Button } from "react-native-paper";
import ButtonBox from "../components/ButtonBox";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const user = {
  name: "Ankit Kumar",
  email: "ankitkumar8317@gmail.com",
};
const loading = false;
const Profile = ({ navigation }) => {
  const [avatar, setAvatar] = useState(null);

  const logoutHandler = () => {
    console.log("Signing Out")
  };
  const navigateHandler = (text) => {
    switch (text) {
      case "Admin":
        navigation.navigate("adminpanel");
        break;
      case "Orders":
        navigation.navigate("orders");
        break;
      case "Profile":
        navigation.navigate("updateprofile");
        break;
      case "Password":
        navigation.navigate("changepassword");
        break;
      case "Sign Out":
        logoutHandler();
        break;

      default:
        navigation.navigate("orders");
        break;
    }
  };

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
        <View
          style={{
            marginBottom: 20,
          }}
        >
          <Text style={formHeading}>Profile</Text>
        </View>

        {/*Loading*/}
        {loading ? (
          <Loader />
        ) : (
          <>
            <View style={styles.container}>
              <Avatar.Image
                size={100}
                style={{ backgroundColor: colors.color1 }}
                source={{ uri: avatar }}
              />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("camera", { updateProfile: true })
                }
              >
                <Button textColor={colors.color2}>Change Photo</Button>
              </TouchableOpacity>

              <Text style={styles.name}>{user?.name}</Text>
              <Text
                style={{
                  fontWeight: "300",
                  color: colors.color2,
                }}
              >
                {user?.email}
              </Text>
            </View>

            <View>
              <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-between",
                }}
              >
                <ButtonBox
                  text={"Orders"}
                  icon={"format-list-bulleted-square"}
                  handler={navigateHandler}
                />
                <ButtonBox
                  text={"Admin"}
                  icon={"view-dashboard"}
                  reverse={true}
                  handler={navigateHandler}
                />
                <ButtonBox
                  text={"Profile"}
                  icon={"pencil"}
                  handler={navigateHandler}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-evenly",
                }}
              >
                <ButtonBox
                  text={"Password"}
                  icon={"pencil"}
                  handler={navigateHandler}
                />
                <ButtonBox
                  text={"Sign Out"}
                  icon={"exit-to-app"}
                  handler={navigateHandler}
                />
              </View>
            </View>
          </>
        )}
      </View>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 7,
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    color: colors.color2,
  },
});

export default Profile;
