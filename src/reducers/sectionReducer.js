import {REMOVE_SECTION, SET_SECTION} from "../utils/sectionTypes";

const initialState = {currentSection:[]};

export const sectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SECTION:
            return {
                ...state,
                currentSection: [...action.section]
            };
        case REMOVE_SECTION:
            return{
                ...state,
                currentSection: []
            }
        default:
            return state
    }
};