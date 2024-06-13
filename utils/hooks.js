import { useEffect } from "react";
import Toast from "react-native-toast-message";
import { useSelector } from "react-redux";

export const useMessageAndErrorUser = (navigation,dispatch,navigateTo="login") => {
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
        routes: [{name: navigateTo}]
      });
   // navigation.navigate(navigateTo)
      Toast.show({
        type: "success",
        text1: message,
      });
      dispatch({
        type: "clearMessage",
      });
    }
  }, [error, message]);

  return loading
};
