import {userReducer} from "../reducers/userReducer";

const {createStore} = require("redux");
const {combineReducers} = require("redux");
const rooReducer = combineReducers({
    user: userReducer
});
export const store = createStore(rooReducer);

window.store = store;