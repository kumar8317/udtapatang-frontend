import { configureStore } from "@reduxjs/toolkit"
import { userReducer } from "./reducers/userReducer"
import { otherReducer } from "./reducers/otherReducer"
import { productReducer } from "./reducers/productReducer"
import { cartReducer } from "./reducers/cartReducer"

export const store = configureStore({
    reducer: {
        // add reducers here
        user: userReducer,
        other: otherReducer,
        product: productReducer,
        cart: cartReducer
    },
})

export const server = "https://udtapatang-server.onrender.com/api/v1"