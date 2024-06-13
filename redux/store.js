import { configureStore } from "@reduxjs/toolkit"
import { userReducer } from "./reducers/userReducer"

export const store = configureStore({
    reducer: {
        // add reducers here
        user: userReducer
    },
})

export const server = "https://udtapatang-server.onrender.com/api/v1"