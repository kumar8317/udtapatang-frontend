import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Carousel from "react-native-snap-carousel";
import { Avatar, Button } from "react-native-paper";
import Toast from "react-native-toast-message";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;

export const iconOptions = {
  size: 20,
  style:{
    borderRadius: 5,
    backgroundColor: colors.color5,
    height: 25,
    weight: 25,
  }
}
const ProductDetails = ({ route: { params } }) => {
  const name = "Polo T-Shirt";
  const price = 2500
  const description = 'Regular Fit Half Sleeve Polo is made of comfortable, Bio Washed cotton-poly Jersey fabric, a three-button placket, and ribbed cuffs for a classic look. Fabric Composition – Cotton 60% Poly 40% Blend, Bio Wash Jersey Fabric. Pattern - Striped Men’s Polo Tshirt, Rib Collar & Sleeve for Amazing Fit. Classic "American Crew" Signature Polo with Logo Embroidery on Chest. “Made In India” by Socially Compliant MSME Factory. All Components Used to make this T-Shirt are Proudly "Made in India".'
  const [quantity,setQuantity] = useState(1)
  const isCarousel = useRef(null);
  const images = [
    {
      id: "ASASA",
      url: "https://res.cloudinary.com/dxdmlovx7/image/upload/v1714561639/WhatsApp_Image_2024-04-10_at_14.52.48-removebg-preview_kqfwag.png",
    },
    {
      id: "ASASA123",
      url: "https://res.cloudinary.com/dxdmlovx7/image/upload/v1714561639/WhatsApp_Image_2024-04-10_at_14.52.48-removebg-preview_kqfwag.png",
    },
  ];
  const stock = 5;

  const incrementQty = () => {
    if(stock <= quantity) return
    setQuantity((prev)=>prev+1);
  }
  const decrementQty = () => {
    if(quantity <= 1) return 
    setQuantity((prev)=>prev-1);
  }

  const addToCartHandler = () => {
    if(stock === 0) return Toast.show({
      type: "error",
      text1: "Out of Stock",
    });
    //console.log("Adding to Cart",quantity)
    Toast.show({
      type: "success",
      text1: "Added to Cart",
    })
  }
  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
        backgroundColor: colors.color1,
      }}
    >
      <Header back={true} />

      {/*Carousel*/}
      <Carousel
        layout="stack"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}
      />

      <View
        style={{
          backgroundColor: colors.color2,
          padding: 35,
          flex: 1,
          marginTop: -380,
          borderTopLeftRadius: 55,
          borderTopRightRadius: 55,
        }}
      >
        <Text
          numberOfLines={2}
          style={{
            fontSize: 20,
          }}
        >
          {name}
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontWeight: 900
          }}
        >
          ${price}
        </Text>

        <Text
          style={{
            letterSpacing: 1,
            lineHeight: 20,
            marginVertical: 15
          }}
          numberOfLines={8}
        >
          {description}
        </Text>
        <View style = {{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 5
        }}>
          <Text style={{
            color: colors.color3,
            fontWeight: "100"
          }}>Quantity</Text>

          <View style={{
            width: 80,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <TouchableOpacity onPress={decrementQty}>
              <Avatar.Icon icon={"minus"} {...iconOptions}/>
            </TouchableOpacity>

            <Text style={style.quantity}>{quantity}</Text>

          <TouchableOpacity onPress={incrementQty}>
              <Avatar.Icon icon={"plus"} {...iconOptions}/>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.9} onPress={addToCartHandler}>
          <Button style={style.btn} textColor={colors.color2} icon={"cart"}>
            Add To Cart
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CarouselCardItem = ({ item, index }) => (
  <View style={style.container} key={index}>
    <Image source={{ uri: item.url }} style={style.image} />
  </View>
);

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    width: ITEM_WIDTH,
    paddingVertical: 40,
    height: 380,
  },
  image: {
    width: ITEM_WIDTH,
    resizeMode: "contain",
    height: 250,
  },
  quantity: {
    backgroundColor: colors.color4,
    height: 25,
    width: 25,
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.color5
  },
  btn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    padding: 5,
    marginVertical: 35
  }
});

export default ProductDetails;
