import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./reducers/cartReducer";
import productsReducer from "./reducers/productsReducer";

const combineReducersApp = combineReducers({
    cartReducer: cartReducer,
    productsReducer: productsReducer,
});

export const store = createStore(combineReducersApp, composeWithDevTools());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
