import axios from "axios";
import MockAdapter from "axios-mock-adapter";
//adult
import tayB from '../assets/data/AdultClientAboniment/adultTay.json';
import boks from '../assets/data/AdultClientAboniment/adultBox.json';
import courses from '../assets/data/AdultClientAboniment/adultCourse.json';
import greppling from '../assets/data/AdultClientAboniment/adultGrep.json'
import person from '../assets/data/AdultClientAboniment/adultPerson.json'

//child
import coursesChild from '../assets/data/ChieldClientAboniment/chieldCourse.json';

//morning
import morning from '../assets/data/ChieldClientAboniment/chieldCourseUtro.json'

import cBox9 from '../assets/data/ChieldClientAboniment/chieldBox:9:00.json';
import cDzudo9 from '../assets/data/ChieldClientAboniment/chieldDzudo:9pm.json';
import cGym9 from '../assets/data/ChieldClientAboniment/chieldGym:9:30.json';
import cRaz11 from '../assets/data/ChieldClientAboniment/chieldRazvivaika:11:30.json';
import cTay9 from '../assets/data/ChieldClientAboniment/chieldTay:9:00.json';

//evening
import evening from '../assets/data/ChieldClientAboniment/chieldCourseWecher.json'

import cBox16 from '../assets/data/ChieldClientAboniment/chieldBox:16:30.json';
import cDzudo16 from '../assets/data/ChieldClientAboniment/chieldDzudo:16:30pm.json';
import cSmallChamp18 from '../assets/data/ChieldClientAboniment/chieldSmallChampion:18:00.json';
import cSmallChamp19 from '../assets/data/ChieldClientAboniment/chieldSmallChampion:19:00.json';
import cSmallGym18 from '../assets/data/ChieldClientAboniment/chieldSmallGym:18:00.json';
import cSmallSamuray18 from '../assets/data/ChieldClientAboniment/chieldSmallSamurai:18:00.json';
import cSmallWarrior18 from '../assets/data/ChieldClientAboniment/chieldSmallWarrior:18:00.json';
import cSmallWarrior19 from '../assets/data/ChieldClientAboniment/chieldSmallWarrior:19:00.json';
import cTay18 from '../assets/data/ChieldClientAboniment/chieldTay:16:30.json';

const mock = new MockAdapter(axios);

//adult
mock.onGet('/adult/tay').reply(200, tayB);
mock.onGet('/adult/boks').reply(200, boks);
mock.onGet('/adult/grep').reply(200, greppling);
mock.onGet('/adult/personal').reply(200, person);
mock.onGet('/getAdult/courses').reply(200, courses);
//chield

mock.onGet('/getChield').reply(200, coursesChild);
//morning

//courseList
mock.onGet('/child/morning').reply(200, morning);

//course
mock.onGet('/child/cBox9').reply(200, cBox9);
mock.onGet('/child/cDzudo9').reply(200, cDzudo9);
mock.onGet('/child/cGym9').reply(200, cGym9);
mock.onGet('/child/cRaz11').reply(200, cRaz11);
mock.onGet('/child/cTay9').reply(200, cTay9);

//evening

//courseList
mock.onGet('/child/evening').reply(200, evening);

//course
mock.onGet('/child/cBox16').reply(200, cBox16);
mock.onGet('/child/cDzudo16').reply(200, cDzudo16);
mock.onGet('/child/cSmallChamp18').reply(200, cSmallChamp18);
mock.onGet('/child/cSmallChamp19').reply(200, cSmallChamp19);
mock.onGet('/child/cSmallGym18').reply(200, cSmallGym18);
mock.onGet('/child/cSmallSamuray18').reply(200, cSmallSamuray18);
mock.onGet('/child/cSmallWarrior18').reply(200, cSmallWarrior18);
mock.onGet('/child/cSmallWarrior19').reply(200, cSmallWarrior19);
mock.onGet('/child/cTay18').reply(200, cTay18);

/**
 *
 * Здесь создаются функции для отправки и получения данных на\с сервера для дальнейшей обработки
 *
 * @param link
 * @returns {Promise<AxiosResponse<any>>}
 */

export const getContentData =async (link)=>{
    return await axios.get(link).then(r => r);
}
export const abortAxiosCalling = ()=>{
    return axios.CancelToken.source();
}
export const getCourseAdult = async ()=>{
    return await axios.get('/getAdult/courses').then(r => r);
}
export const getCoursesChild = async ()=>{
    return await axios.get('/getChield').then(r => r);
}
export const getCoursesChildDay = async (link)=>{
    return await axios.get(link).then(r => r);
}