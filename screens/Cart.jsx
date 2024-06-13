import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Toast from "react-native-toast-message";

const Cart = () => {
  const navigate = useNavigation();

  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);


  

  const incrementHandler = (id,name,price,image,stock,qty) => {
    const newQty = qty+1;
    if(stock <= qty) return Toast.show({
      type: "error",
      text1: "Maximum value added"
    });
    dispatch({
      type: "addToCart",
      payload: {
        product: id,
        name,
        price,
        stock,
        image,
        quantity: newQty
      }
    })
  };

  const decrementHandler = (id,name,price,image,stock,qty) => {
    const newQty = qty-1;
    if(1 >= qty) return dispatch({
      type: "removeFromCart",
      payload: id
    })
    dispatch({
      type: "addToCart",
      payload: {
        product: id,
        name,
        price,
        stock,
        image,
        quantity: newQty
      }
    })
  };
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
          {cartItems.length > 0 ? (
            cartItems.map((i, index) => (
              <CartItem
                key={i.product}
                id={i.product}
                name={i.name}
                stock={i.stock}
                amount={i.price}
                imgSrc={i.image}
                index={index}
                qty={i.quantity}
                incrementHandler={incrementHandler}
                decrementHandler={decrementHandler}
                navigate={navigate}
              />
            ))
          ) : (
            <Text
              style={{
                textAlign: "center",
                fontSize: 18
              }}
            >
              {" "}
              No Items yet
            </Text>
          )}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>{cartItems.length} Items</Text>
        <Text>{'\u20B9'} {
            cartItems.reduce((prev,curr)=>prev+curr.quantity*curr.price,0)
          }</Text>
      </View>

      <TouchableOpacity
        onPress={
          cartItems.length > 0 ? () => navigate.navigate("confirmorder") : null
        }
      >
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
