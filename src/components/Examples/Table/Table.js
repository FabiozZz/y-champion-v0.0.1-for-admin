import React, {useEffect} from 'react';
import {Table} from "react-bootstrap";
import {createTable} from "../../../utils/createTable";

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
    let dataTable = props.data &&createTable(props.data)


    return (
        <Table striped bordered hover>
            <thead style={{position:'sticky',top:'30px',background:'white'}}>
            <tr>
                <th onClick={props.cardCode} >Штрих-код</th>
                <th onClick={props.date}>Действителен до:</th>
                <th title={'количество купленных абониментов'} onClick={props.kka}>К.К.А.</th>
                <th onClick={props.fullName}>Ф.И.О.</th>
                <th>Телефон</th>
                <th>Вид единоборств</th>
            </tr>
            </thead>
            <tbody>
            {dataTable}
            </tbody>
        </Table>
    );
}