import { useEffect } from "react";
import Toast from "react-native-toast-message";
import { useSelector } from "react-redux";
import { loadUser } from "../redux/actions/userActions";
import { server } from "../redux/store";
import axios from "axios";

export const useMessageAndErrorUser = (
  navigation,
  dispatch,
  navigateTo = "login"
) => {
  const { loading, message, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: error,
      });
      dispatch({
        type: "clearError",
      });
    }
    if (message) {
      navigation.reset({
        index: 0,
        routes: [{ name: navigateTo }],
      });
      // navigation.navigate(navigateTo)
      Toast.show({
        type: "success",
        text1: message,
      });
      dispatch({
        type: "clearMessage",
      });

      dispatch(loadUser());
    }
  }, [error, message, dispatch]);

  return loading;
};

export const useMessageAndErrorother = (
  dispatch,
  navigation,
  navigateTo,
  func
) => {
  const { loading, message, error } = useSelector((state) => state.other);

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: error,
      });
      dispatch({
        type: "clearError",
      });
    }
    if (message) {
      Toast.show({
        type: "success",
        text1: message,
      });

      dispatch({
        type: "clearMessage",
      });
      navigateTo && navigation.navigate(navigateTo);

      func && dispatch(func());
    }
  }, [error, message, dispatch]);

  return loading;
};

export const useSetCategories = (setCategories, isFocused) => {
  useEffect(() => {
    axios.get(`${server}/product/categories`).then((res) => {
      setCategories(res.data.categories);
    }).catch((e)=>{
      Toast.show({
        type: "error",
        text1: e.response.data.message
      })
    });
  }, [isFocused]);
};
