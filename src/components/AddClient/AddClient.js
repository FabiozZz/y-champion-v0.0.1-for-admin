import React from 'react';

export const AddClient = () => {
    return (
        <form className={'col-4 m-auto pt-5'}>
            <div className={'row align-items-center m-auto'}>
                <h3  className={'text-center col-12'}>Данные пользоватея</h3>
                <div className={'form-group col row'}>
                    <label className={'col-form-label col-6'} htmlFor="surnameUser">
                        Фамилия:
                    </label>
                    <input className={'form-control col-6'} id={'surnameUser'} type="text"/>

                    <label htmlFor="nameUser" className={'col-form-label col-6'}>
                        Имя:
                    </label>
                    <input className={'form-control col-6'} id={'nameUser'} type="text"/>

                    <label htmlFor="patronymicUser" className={'col-form-label col-6'}>
                        Отчество:
                    </label>

                    <input className={'form-control col-6'} id={'patronymicUser'} type="text"/>
                    <label htmlFor="dateUser" className={'col-form-label col-6'}>
                        Дата рождения:
                    </label>
                    <input className={'form-control col-6'} id={'dateUser'} type="date"/>
                </div>
            </div>

            {/*<input placeholder={'номер телефона'} type="number"/>*/}
            {/*<input type="text"/>*/}
            {/*<input type="text"/>*/}
        </form>
    );
};