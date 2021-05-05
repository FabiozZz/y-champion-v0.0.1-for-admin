import {userReducer} from "../reducers/userReducer";
import {sectionReducer} from "../reducers/sectionReducer";

const {createStore} = require("redux");
const {combineReducers} = require("redux");
const rooReducer = combineReducers({
    user: userReducer,
    section:sectionReducer
});
export const store = createStore(rooReducer);

window.store = store;