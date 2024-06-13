import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import ProductDetails from "./screens/ProductDetails";
import Toast from "react-native-toast-message";
import Cart from "./screens/Cart";
import ConfirmOrder from "./screens/ConfirmOrder";
import Payment from "./screens/Payment";
import Login from "./screens/Login";
import ForgetPassword from "./screens/ForgetPassword";
import Verify from "./screens/Verify";
import Signup from "./screens/Signup";
import Profile from "./screens/Profile";
import UpdateProfile from "./screens/UpdateProfile";
import ChangePassword from "./screens/ChangePassword";
import Orders from "./screens/Orders";
import AdminPanel from "./screens/admin/AdminPanel";
import Categories from "./screens/admin/Categories";
import AdminOrders from "./screens/admin/AdminOrders";
import UpdateProduct from "./screens/admin/UpdateProduct";
import NewProduct from "./screens/admin/NewProduct";
import ProductImages from "./screens/admin/ProductImages";
import CameraComponent from "./screens/Camera";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/userActions";

const Stack = createNativeStackNavigator();
const Main = () => {

  const dispatch  = useDispatch();
  const {user} = useSelector((state)=>state.user)
  useEffect(()=>{
    dispatch(loadUser());
  },[dispatch])
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Group>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="productdetails" component={ProductDetails} />
          <Stack.Screen name="cart" component={Cart} />
          <Stack.Screen name="confirmorder" component={ConfirmOrder} />
          <Stack.Screen name="payment" component={Payment} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="updateprofile" component={UpdateProfile} />
          <Stack.Screen name="changepassword" component={ChangePassword} />
          <Stack.Screen name="orders" component={Orders} />
          <Stack.Screen name="camera" component={CameraComponent} />

          {/* password resetting route*/}
          <Stack.Screen name="forgetpassword" component={ForgetPassword} />
          <Stack.Screen name="verify" component={Verify} />
          {/* Admin routes*/}
          <Stack.Screen name="adminpanel" component={AdminPanel} />
          <Stack.Screen name="categories" component={Categories} />
          <Stack.Screen name="adminorders" component={AdminOrders} />
          <Stack.Screen name="updateproduct" component={UpdateProduct} />
          <Stack.Screen name="newproduct" component={NewProduct} />
          <Stack.Screen name="productimages" component={ProductImages} />
        </Stack.Group>
      </Stack.Navigator>
      <Toast position="top" />
    </NavigationContainer>
  );
};

export default Main;
