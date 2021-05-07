import {REMOVE_FILTER_SECTION, REMOVE_SECTION, SET_FILTER_SECTION, SET_SECTION} from "../utils/sectionTypes";

export const setSectionData = (section)=>({
    type: SET_SECTION,section
})
export const setFilterSectionData = (filSection)=>({
    type: SET_FILTER_SECTION,filSection
})
export const removeSectionData = ()=>({
    type: REMOVE_SECTION
})
export const removeFilterSectionData = ()=>({
    type: REMOVE_FILTER_SECTION
})