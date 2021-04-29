import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import tayB from '../assets/data/adultTay.json';
import boks from '../assets/data/adultBox.json';
import courses from '../assets/data/adultCourse.json';
import greppling from '../assets/data/adultGrep.json'
import person from '../assets/data/adultPerson.json'

const mock = new MockAdapter(axios);

mock.onGet('/adult/tay').reply(200, tayB);
mock.onGet('/adult/boks').reply(200, boks);
mock.onGet('/adult/grep').reply(200, greppling);
mock.onGet('/adult/personal').reply(200, person);
mock.onGet('/getAdult/courses').reply(200, courses);


export const getContentData =async (link)=>{
    return await axios.get(link).then(r => r);
}
export const getAdultTay =async ()=>{
    return await axios.get('/getAdult/tayBoks').then(r => r);
}
export const getAdultBoks =async ()=>{
    return await axios.get('/getAdult/boks').then(r => r);
}
export const abortAxiosCalling = ()=>{
    return axios.CancelToken.source();
}
export const getCourse = async ()=>{
    return await axios.get('/getAdult/courses').then(r => r);
}