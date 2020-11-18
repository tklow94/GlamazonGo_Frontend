import {combineReducers} from 'redux'
import authReducer from "./Users/authReducer";
import messageReducer from "./Users/messageReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    message: messageReducer,
})

export default rootReducer

