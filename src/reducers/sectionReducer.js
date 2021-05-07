import {REMOVE_FILTER_SECTION, REMOVE_SECTION, SET_FILTER_SECTION, SET_SECTION} from "../utils/sectionTypes";

const initialState = {
    currentSection: [],
    filterSection: []
};

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
        case SET_FILTER_SECTION:
            return {
                ...state,
                filterSection: action.filSection
            }
        case REMOVE_FILTER_SECTION:
            return {
                ...state,
                filterSection: []
            }
        default:
            return state
    }
};