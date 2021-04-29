import React from 'react';
import {Table} from "react-bootstrap";
import {createTable} from "../../../utils/createTable";

export const TableS = (props)=> {
    let data = props.data? createTable(props.data):undefined;
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Штрих-код</th>
                <th>Действителен до:</th>
                <th title={'количество купленных абониментов'}>К.К.А.</th>
                <th>Ф.И.О.</th>
                <th>Телефон</th>
                <th>Вид единоборств</th>
                <th>Дата пробной тренировки</th>
                <th>Адресс места дительства</th>
                <th>Год рождения клиента</th>
                <th>Как узнали о клубе?</th>
            </tr>
            </thead>
            <tbody>
            {data}
            </tbody>
        </Table>
    );
}