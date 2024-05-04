import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";

export const cartItems = [
  {
    name: "Polo T-Shirt",
    image:
      "https://res.cloudinary.com/dxdmlovx7/image/upload/v1714561639/WhatsApp_Image_2024-04-10_at_14.52.48-removebg-preview_kqfwag.png",
    product: "Sasas",
    stock: 3,
    price: 4999,
    quantity: 2,
  },
  {
    name: "T-Shirt",
    image:
      "https://res.cloudinary.com/dxdmlovx7/image/upload/v1714561639/WhatsApp_Image_2024-04-10_at_14.52.48-removebg-preview_kqfwag.png",
    product: "Sasas1",
    stock: 3,
    price: 4999,
    quantity: 5,
  },
];
const Cart = () => {

  const navigate = useNavigation();
  const decrementHandler = (id,qty)=>{

  }

  const incrementHandler = (id,qty,stock)=>{
    
  }
  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
      }}
    >
      {/* Header*/}
      <Header back={true} emptyCart={true} />
      {/* Heading*/}
      <Heading
        text1="Shopping"
        text2="Cart"
        containerStyle={{ paddingTop: 70, marginLeft: 35 }}
      />

      <View style={{ paddingVertical: 20, flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.map((i, index) => (
            <CartItem
              key={i.product}
              id={i.product}
              name={i.name}
              stock={i.stock}
              amount={i.price}
              imgSrc={i.image}
              index={index}
              qty={i.quantity}
              incrementHandler = {incrementHandler}
              decrementtHandler = {decrementHandler}
            />
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>5 Items</Text>
        <Text>$5</Text>
      </View>

      <TouchableOpacity onPress={cartItems.length > 0 ? ()=>navigate.navigate("confirmorder"):null}>
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
          icon={"cart"}
          textColor={colors.color2}
        >
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
