import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import {createTable} from "../../../utils/createTable";
import {useDispatch} from "react-redux";
import {setSectionData} from "../../../actions/sectionActions";

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
    let dataTable = createTable(props.data)
    const dispatch = useDispatch();

    const [search,setSearch]= useState('')

    const handleChangeInput = ({target}) => {
        setSearch(target.value);
        let copyData = props.data.filter(item=> {
            if (item.cardCode.includes(search)) {
                return item;
            }
        })
        dispatch(setSectionData(copyData));
    };

    const [toggleInput,setToggleInput] = useState({
        code: false,
        phone: false,
        fullName: false
    })

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
        <Table id={'search table'} striped bordered hover>
            <thead style={{position: 'sticky', top: '30px', background: 'white'}}>
            <tr>
                <th onDoubleClick={handleToggleInput} onClick={props.cardCode} id={'code'}>Штрих-код

                    {toggleInput.code && <input autoFocus type={'number'}
                                                value={search}
                                                onChange={handleChangeInput}
                                                onBlur={() => {
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

                    {toggleInput.fullName&&<input autoFocus type="text"
                                                  onBlur={() => setToggleInput(prevState => ({
                                                      ...prevState,
                                                      fullName: false
                                                  }))}/>}

                </th>
                <th id={'phone'} onDoubleClick={handleToggleInput}>Телефон

                    {toggleInput.phone&&<input autoFocus  type="text"
                                             onBlur={() => setToggleInput(prevState => ({
                                                 ...prevState,
                                                 phone: false
                                             }))}/>}

                </th>
                <th>Вид единоборств</th>
            </tr>
            </thead>
            <tbody>
            {dataTable}
            </tbody>
        </Table>
    );
}