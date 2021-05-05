import {REMOVE_SECTION, SET_SECTION} from "../utils/sectionTypes";

export const setSectionData = (section)=>({
    type: SET_SECTION,section
})
export const removeSectionData = ()=>({
    type: REMOVE_SECTION
})