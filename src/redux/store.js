import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducer";
import { orderReducer, ordersReducer } from "./reducers/orderReducer";
import { authReducer } from "./reducers/userReducers";
import { adminReducer } from "./reducers/adminReducer";
const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
    orders: ordersReducer,
    admin: adminReducer,
  },
});
export default store;
export const server = "https://btechburgirwala.herokuapp.com/api/v1";

//1:24:27
