import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailReducer, productListReducer } from "./Reducers/ProductReducers";


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailReducer,
});

const initalState = {};

const middleware = [thunk];

// create store --> inside it have 3 parameters : 
const store = createStore(reducer, initalState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
