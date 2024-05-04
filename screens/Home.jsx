import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import ProductCard from "../components/ProductCard";
import SearchModal from "../components/SearchModal";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

const categories = [
  {
    category: "Nice",
    _id: "sdadad",
  },
  {
    category: "Nice2",
    _id: "sdadad111",
  },
  {
    category: "Nice3",
    _id: "sdadad222",
  },
  {
    category: "Nice4",
    _id: "sdadad22ca2",
  },
  {
    category: "Nice5",
    _id: "sdadad222aa",
  },
  {
    category: "Nice6",
    _id: "sdadad22gr2",
  },
];

const products = [
    {
        price: 4999,
        stock: 3,
        name: "Polo T-Shirt",
        _id: "Sasas",
        images: [
            {
                url: "https://res.cloudinary.com/dxdmlovx7/image/upload/v1714561639/WhatsApp_Image_2024-04-10_at_14.52.48-removebg-preview_kqfwag.png"
            }
        ]
    },
    {
        price: 2312,
        stock: 23,
        name: "T-Shirt",
        _id: "Sasassss",
        images: [
            {
                url: "https://res.cloudinary.com/dxdmlovx7/image/upload/v1714561639/WhatsApp_Image_2024-04-10_at_14.52.48-removebg-preview_kqfwag.png"
            }
        ]
    }
];
const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigation()
  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const addToCartHandler = (id,stock) => {
    console.log("Add to cart",id)
  }

  return (
    <>
      { activeSearch && (
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
          <Heading text1="Our" text2="Products"/>

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
            {
                products.map((item,index)=>(
                    <ProductCard 
                        stock = {item.stock}
                        name = {item.name}
                        price = {item.price}
                        image = {item.images[0]?.url}
                        addToCartHandler={addToCartHandler}
                        id={item._id}
                        key={item._id}
                        i = {index}
                        navigate={navigate}
                    />
                ))
            }
          </ScrollView>
        </View>
      </View>
      <Footer activeRoute={"home"}/>
    </>
  );
};

export default Home;
