import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from "redux";
import thunk from "redux-thunk";
import { restaurantReducer } from "./reducers/restaurantReducer";
import { menuReducer } from "./reducers/menuReducers";
import { cartReducer } from "./reducers/cartReducer";
import {
    authReducer,
    userReducer,
    forgotPasswordReducer
} from "./reducers/userReducer";
import { myOrdersReducer, newOrderReducer, orderDetailsReducer } from "./reducers/orderReducers";

const reducer = combineReducers({
    restaurants: restaurantReducer,
    menus: menuReducer,
    cart : cartReducer,
    auth : authReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    newOrder : newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer
});

let initialState = {
    cart: {
        cartItems: localStorage.getItem("cratItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
        deliveryInfo: localStorage.getItem("deliveryInfo")
        ? JSON.parse(localStorage.getItem("deliveryInfo"))
        : [],
    },
    
};

const composeenhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
const middleware = [thunk];
const store = createStore(
        reducer,
        initialState,
        composeenhancers(applyMiddleware(...middleware))
    );

export default store;
