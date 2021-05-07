import React, {useState} from 'react';
import {Table} from "react-bootstrap";
import {createTable} from "../../../utils/createTable";
import {useDispatch} from "react-redux";
import {removeFilterSectionData, setFilterSectionData} from "../../../actions/sectionActions";
import './tables.css';

/**
 * Компонент который создает таблицу пользователей
 * использует вспомогательную функцию "createTable" для формирования ячеек таблицы
 * через "props" получает список пользователей и функции для сортировки таблицы
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const TableS = (props)=> {
    /**
     * создается из полученных через props данных ячейки таблицы
     * @type {*}
     */
    let dataTable = createTable(props.data)

    /**
     * dispatch от redux
     * @type {Dispatch<any>}
     */
    const dispatch = useDispatch();

    /**
     * константы для фильтрации таблицы
     */
    const [search,setSearch]= useState('')

    /**
     * ищет атрибут id, узнает какому инпуту принадлежит этот id
     * используются константы для поиска
     * отфильтровывается таблица в зависимости от введенных данных
     * @param target
     */
    const handleChangeInput = ({target}) => {
        let id = target.getAttribute('id');
        if (search === '') {
            dispatch(removeFilterSectionData())
        }
        if (id === 'codeFilter') {
            setSearch(target.value);
            if (search !== '') {
                let copyData = props.data.filter(item=> {
                    if (item.cardCode.includes(search)) {
                        return item;
                    }
                });
                dispatch(setFilterSectionData(copyData));
            }
        }
        if (id === 'fullNameFilter') {
            setSearch(target.value);
            if (search !== '') {
                let copyData = props.data.filter(item=> {
                    if (item.fullName.toLowerCase().includes(search.toLowerCase())) {
                        return item;
                    }
                });
                dispatch(setFilterSectionData(copyData));
            }
        }
        if (id === 'phoneFilter') {
            setSearch(target.value);
            if (search !== '') {
                let copyData = props.data.filter(item=> {
                    if (item.phone.includes(search)) {
                        return item;
                    }
                });
                dispatch(setFilterSectionData(copyData));
            }
        }
    };

    /**
     * константа для переключения инпуте появляется\исчезает
     */
    const [toggleInput,setToggleInput] = useState({
        code: false,
        phone: false,
        fullName: false
    })
    /**
     * сам переключатель инпута по клику на заголовке таблице
     * работает на штрих-код, Ф.И.О. и телефон
     * @param e
     */
    const handleToggleInput = (e)=>{
        let id = e.target.getAttribute('id');
        if (id === 'code') {
            setToggleInput(prevState => ({...prevState,code:true}))
        }
        if (id === 'phone') {
            setToggleInput(prevState => ({...prevState,phone:true}))
        }
        if (id === 'fullName') {
            setToggleInput(prevState => ({...prevState,fullName:true}))
        }
    }

    return (
        <Table className={'table'} id={'search table'} striped bordered hover>
            <thead style={{position: 'sticky', top: '30px', background: 'white'}}>
            <tr>
                <th onDoubleClick={handleToggleInput} onClick={props.cardCode} id={'code'}>Штрих-код

                    {toggleInput.code && <input id={'codeFilter'} autoFocus type={'text'}
                                                value={search}
                                                onChange={handleChangeInput}
                                                onBlur={() => {
                                                    dispatch(removeFilterSectionData());
                                                    setSearch('')
                                                    setToggleInput(prevState => ({
                                                        ...prevState,
                                                        code: false
                                                    }))
                                                }}/>}

                </th>
                <th onClick={props.date}>Действителен до:</th>
                <th title={'количество купленных абониментов'} id={'kka'} onClick={props.kka}>К.К.А.</th>

                <th onClick={props.fullName} id={'fullName'} onDoubleClick={handleToggleInput}>Ф.И.О.

                    {toggleInput.fullName&&<input id={'fullNameFilter'} autoFocus type="text"
                                                  value={search}
                                                  onChange={handleChangeInput}
                                                  onBlur={() => {
                                                      dispatch(removeFilterSectionData());
                                                      setSearch('')
                                                      setToggleInput(prevState => ({
                                                          ...prevState,
                                                          fullName: false
                                                      }))
                                                  }
                                                  }/>}

                </th>
                <th onDoubleClick={handleToggleInput} id={'phone'}>Телефон

                    {toggleInput.phone&&<input autoFocus id={'phoneFilter'} type="text"
                                               value={search}
                                               onChange={handleChangeInput}
                                               onBlur={() => {
                                                 dispatch(removeFilterSectionData());
                                                 setSearch('')
                                                 setToggleInput(prevState => ({
                                                     ...prevState,
                                                     phone: false
                                                 }))
                                             }
                                             }/>}

                </th>
                <th id={'course'}>Вид единоборств</th>
            </tr>
            </thead>
            <tbody>
            {dataTable}
            </tbody>
        </Table>
    );
}
