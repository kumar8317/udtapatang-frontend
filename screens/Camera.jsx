import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Avatar } from "react-native-paper";
import { colors, defaultStyle } from "../styles/styles";
import * as ImagePicker from "expo-image-picker";

const CameraComponent = ({ navigation, route }) => {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState("back");
  const [camera, setCamera] = useState(null);

  const openImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
      console.log(permissionResult)
    if (permissionResult.granted === false) {
      return alert("Permission to access galery is required");
    }
    const data = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(data)
    if(data.assets){
      if (route.params?.newProduct) {
        return navigation.navigate("newproduct", {
          image: data.assets[0]?.uri,
        });
      }
  
      if (route.params?.updateProduct) {
        return navigation.navigate("productimages", {
          image: data.assets[0]?.uri,
        });
      }
  
      if (route.params?.updateProfile) {
        return navigation.navigate("profile", {
          image: data.assets[0]?.uri,
        });
      } else {
        return navigation.navigate("signup", {
          image: data.assets[0]?.uri,
        });
      }
    }

  };
  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }
  const clickPicture = async () => {
    const data = await camera.takePictureAsync();

    if (route.params?.newProduct) {
      return navigation.navigate("newproduct", {
        image: data.uri,
      });
    }

    if (route.params?.updateProduct) {
      return navigation.navigate("productimages", {
        image: data.uri,
      });
    }

    if (route.params?.updateProfile) {
      return navigation.navigate("profile", {
        image: data.uri,
      });
    } else {
      return navigation.navigate("signup", {
        image: data.uri,
      });
    }
  };

  useEffect(() => {
    (async () => {
      requestPermission();
    })();
  }, []);

  if (!permission) return <View />;

  if (!permission.granted)
    return (
      <View style={defaultStyle}>
        <Text>No access to camera</Text>
      </View>
    );

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <CameraView
        facing={facing}
        style={{
          flex: 1,
          aspectRatio: 1,
        }}
        ratio={"1:1"}
        ref={(e) => setCamera(e)}
      />
        <View
          style={{
            flexDirection: "row",
            bottom: 10,
            width: "100%",
            justifyContent: "space-evenly",
            position: "absolute",
          }}
        >
          <MyIcon icon="image" handler={openImagePicker} />
          <MyIcon icon="camera" handler={clickPicture} />
          {/* <MyIcon
          icon="camera-flip"
          handler={() => {
            setType((prevType) =>
              prevType === 'back' ? 'front' : 'back'
            );
          }}
        /> */}
          {/* <Text style={styles.text}>Flip Camera</Text> */}
          <MyIcon icon="camera-flip" handler={toggleCameraFacing} />
        </View>
      {/* </CameraView> */}
    </View>
  );
};

const MyIcon = ({ icon, handler }) => (
  <TouchableOpacity onPress={handler}>
    <Avatar.Icon
      icon={icon}
      size={40}
      color={colors.color2}
      style={{
        backgroundColor: colors.color1,
      }}
    />
  </TouchableOpacity>
);

export default CameraComponent;
