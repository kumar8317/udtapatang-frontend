import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import ProductCard from "../components/ProductCard";
import SearchModal from "../components/SearchModal";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions/productAction";
import { useSetCategories } from "../utils/hooks";
import Toast from "react-native-toast-message";

// const categories = [
//   {
//     category: "Nice",
//     _id: "sdadad",
//   },
//   {
//     category: "Nice2",
//     _id: "sdadad111",
//   },
//   {
//     category: "Nice3",
//     _id: "sdadad222",
//   },
//   {
//     category: "Nice4",
//     _id: "sdadad22ca2",
//   },
//   {
//     category: "Nice5",
//     _id: "sdadad222aa",
//   },
//   {
//     category: "Nice6",
//     _id: "sdadad22gr2",
//   },
// ];
const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [categories, setCategories] = useState([])
  const navigate = useNavigation();

  const dispatch = useDispatch()

  const isFocused = useIsFocused();

  const {products} = useSelector(state=>state.product)
  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const addToCartHandler = (id,name,price,image,stock) => {
    if(stock == 0) return Toast.show({
      type: "error",
      text1: "Out of Stock"
    })
    dispatch({
      type: "addToCart",
      payload: {
        product: id,
        name,
        price,
        stock,
        image,
        quantity:1
      }
    })
    Toast.show({
      type: "success",
      text1: "Added to cart"
    })
  };

  useSetCategories(setCategories,isFocused)

  useEffect(()=>{
   const timeoutId =  setTimeout(()=>{
      dispatch(getAllProducts(searchQuery,category))
    },500)

    return ()=>{
      clearTimeout(timeoutId);
    }
  },[dispatch,searchQuery,category,isFocused])
  
  return (
    <>
      {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}
      <View style={defaultStyle}>
        <Header />

        {/* Heading Row */}
        <View
          style={{
            paddingTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Heading */}
          <Heading text1="Our" text2="Products" />

          {/* Search Bar */}
          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                size={50}
                color={"gray"}
                style={{ backgroundColor: colors.color2, elevation: 12 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories Row*/}
        <View
          style={{
            flexDirection: "row",
            height: 80,
          }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ alignItems: "center" }}
          >
            {categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
                onPress={() => categoryButtonHandler(item._id)}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: category === item._id ? colors.color2 : "gray",
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>

        {/* Products Row */}
        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                addToCartHandler={addToCartHandler}
                id={item._id}
                key={item._id}
                i={index}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
      </View>
      <Footer activeRoute={"home"} />
    </>
  );
};

export default Home;
