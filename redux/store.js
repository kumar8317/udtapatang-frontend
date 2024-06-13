import { configureStore } from "@reduxjs/toolkit"
import { userReducer } from "./reducers/userReducer"
import { otherReducer } from "./reducers/otherReducer"

export const store = configureStore({
    reducer: {
        // add reducers here
        user: userReducer,
        other: otherReducer
    },
})

export const server = "https://udtapatang-server.onrender.com/api/v1"