import userConstance from '../utils/userTypes';
const initialState = {
    currentUser: {},
    isAuth: false
};

export const userReducer = (state=initialState,action)=>{
    switch (action.type) {
        case userConstance.LOGGING_USER:
            return {
                ...state,
                currentUser: {...action.user},
                isAuth: true
            };
        case userConstance.EXIT_USERS:
            return {
                ...state,
                currentUser: {},
                isAuth: false
            };
        default:
            return state;
    }
}