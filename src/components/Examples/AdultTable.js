import React, {useEffect, useState} from 'react';
import {Nav} from "react-bootstrap";
import {abortAxiosCalling,getContentData, getCourseAdult} from "../../Api/api";
import {TableS} from "./Table/Table";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {removeSectionData, setSectionData} from "../../actions/sectionActions";

/**
 * стили (возможно временные) для инлайнового css
 *
 * @type {{root: {overflow: string, width: string, fontSize: string, position: string, height: string}, navlink: {top: number, background: string, position: string}}}
 */
const styles = {
    root:{
        height:'90vh',
        width:'100%',
        fontSize: '0.8rem',
        position: 'relative',
        overflow:'auto'
    },
    navlink:{background:'white',position:'sticky', top:0}
}

/**
 * Компонент для списка взрослых клиентов фирмы
 * @returns {JSX.Element}
 * @constructor
 */
export const AdultTable = ()=> {
    const dispatch = useDispatch();

    /**
     * снлектор полученный из redux
     * @type {[]|*}
     */
    let currentSection = useSelector(state => state.section.currentSection)

    /**
     * сортирует данные в зависимости от флага, переключение флага идет автоматически внутри фильтра
     */
    const [flagAscDesc,setFlagAscDesc] = useState({
        card: 'asc',
        name: 'asc',
        kka: 'asc',
        date: 'asc'
    })

    /**
     * константы для хранения и установки видов единоборств
     */
    const [courses, setCourses] = useState([]);

    const [search,setSearch] = useState()

    const filterColumn = (e) => {
        return (<input type="text" />)
    };


    /**
     *    асинхронная функия, в зависимости от выбранного Tab посылает запрос на сервер для получения данных
     *    после получения диспатчит данные в redux
     * @param e
     * @returns {Promise<void>}
     */
    const toggleActiveItem =async (e)=>{
        const link = e.target.getAttribute('href');
        const response =await getContentData(link)
        dispatch(setSectionData(await response.data))
    }

    /**
     * функция фильтрации данных по штрих-коду
     */
    const filterByCode = () => {
        let copySection;
        if (flagAscDesc.card === 'asc') {
            copySection = currentSection.sort((a,b) =>a.cardCode.replace(/[a-zа-я]/gi,'') > b.cardCode.replace(/[a-zа-я]/gi,'')?-1:1);
            dispatch(setSectionData(copySection))
            setFlagAscDesc(prevState => ({
                ...prevState,
                card: 'desc'
        }));
        }else {
            copySection = currentSection.sort((a,b) =>a.cardCode.replace(/[a-zа-я]/gi,'') < b.cardCode.replace(/[a-zа-я]/gi,'')?-1:1);
            dispatch(setSectionData(copySection))
            setFlagAscDesc(prevState => ({
                ...prevState,
                card:'asc'
            }));
        }
    };

    /**
     * функция фильтрации данных по имени
     */
    const filterByName = () => {
        let copySection;
        if (flagAscDesc.name === 'asc') {
            copySection = currentSection.sort((a,b) =>a.fullName > b.fullName?1:-1)
            dispatch(setSectionData(copySection))
            setFlagAscDesc(prevState => ({
                ...prevState,
                name:'desc'
            }))
        }else{
            copySection = currentSection.sort((a,b) =>a.fullName < b.fullName?1:-1)

            dispatch(setSectionData(copySection))
            setFlagAscDesc(prevState => ({
                ...prevState,
                name:'asc'
            }))

        }
    };

    /**
     * функция фильтрации данных в зависимости от купленных абониментов
     */
    const sortByKKA = () => {
        let copySection;
        if (flagAscDesc.kka === 'asc') {
            copySection = currentSection.sort((a,b) =>Number(a.countBuyAboniment) > Number(b.countBuyAboniment)?-1:1);
            dispatch(setSectionData(copySection))
            setFlagAscDesc(prevState => ({
                ...prevState,
                kka:'desc'
            }))
        }else{
            copySection = currentSection.sort((a,b) =>Number(a.countBuyAboniment) < Number(b.countBuyAboniment)?-1:1);
            dispatch(setSectionData(copySection))
            setFlagAscDesc(prevState => ({
                ...prevState,
                kka:'asc'
            }))

        }
    };

    /**
     * функция фильтрации данных по дате окончания абонимента
     */
    const sortByDate = () => {
        let copySection = currentSection.sort((a, b) => {
            /**
             * очистка если в ячейке вместо даты стоит какое либо слово
             */
            let dateA = a.expireIn.replace(/[a-zа-я]/gi, '');
            let dateB = b.expireIn.replace(/[a-zа-я]/gi, '');



            /**
             * если вместо даты было слово, идет проверка что эта строка пуста
             * и вместо нее вставляется заведомо завышенная дата
             * чтобы эта ячейка осталась в конце списка
             */
            if (dateA === '') {
                dateA = '01.01.3000';
            }
            if (dateB === '') {
                dateB = '01.01.3000';
            }

            /**
             * формируется строка по шаблону, "день.месяц.год -> год-месяц-день"
             */
            dateA = dateA.replace(/(\d{2}).(\d{2}).(\d{4})/gi, '$3-$2-$1')
            dateB = dateB.replace(/(\d{2}).(\d{2}).(\d{4})/gi, '$3-$2-$1')

            if (flagAscDesc.date === 'asc') {
                setFlagAscDesc(prevState => ({
                    ...prevState,
                    date:'desc'
                }))
                return +new Date(dateA) < +new Date(dateB) ? 1 : -1;
            }else{
                setFlagAscDesc(prevState => ({
                    ...prevState,
                    date:'asc'
                }))
                return +new Date(dateA) > +new Date(dateB) ? 1 : -1;
            }
        });

        dispatch(setSectionData(copySection))
    };

    /**
     * функция для формирования Tabs со списком видов единоборств
     * вместе с ссылкой для получения данных
     * @type {unknown[]}
     */
    const courseList = courses.map((el, index) => {
        return (
            <React.Fragment key={index}>
                <Nav.Item>
                    <Nav.Link onClick={toggleActiveItem} style={styles.navlink} as={NavLink} to={`/adult/${el.uri}`}
                              eventKey={index + 1}>{el.name}</Nav.Link>
                </Nav.Item>
            </React.Fragment>
        );
    });

    /**
     * запускается при каждом рендеринге, запрашивает список видов единоборств и сохраняет в локальный стейт
     */
    useEffect(async ()=>{
        const courses = await getCourseAdult();
        setCourses(await courses.data)
        dispatch(removeSectionData());

        return ()=>{
            abortAxiosCalling();

        }
    },[])

    return (
        <div style={styles.root}>
            <Nav variant={"tabs"} style={styles.navlink}>
                {courseList}
            </Nav>
            <TableS filter={filterColumn} date={sortByDate} kka={sortByKKA} fullName={filterByName} cardCode={filterByCode} data={currentSection}/>
        </div>
    );
}