import {combineReducers} from "redux";
import {authReducer} from "./reducers/auth.reducer";
import {typeReducer} from "./reducers/type.reducer";
import {itemReducer} from "./reducers/item.reducer";

export const rootReducer = combineReducers({
    authReducer,typeReducer,itemReducer
})