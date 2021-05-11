import React from "react";

/**
 * Вспомогательная функция для формирования ячеек таблицы
 *
 * в "row" формируется цвет для каждого элемента в зависимости от купленных абониментов
 *
 * в "placeholder" формируется алиас статуса в зависимости от купленных абониментов
 *
 * "style" объект стилей
 * @param some
 * @returns {*}
 */
export function createTable(some,id){
    let style = {
        simple:{background:'white'},
        bronze:{background:'#cd7f32'},
        gold:{background:'#FFD700'},
        rubin:{background:'#e0115f'},
        sapfir:{background:'#082567'},
        bril:{background:'#b9f2ff'},
    }
    return some.map((el, index) => {

        let num = Number(el.countBuyAboniment);
        let row = num <= 2 || NaN ? style.simple :
            num <= 5 ? style.bronze :
                num <= 11 ? style.gold :
                    num <= 23 ? style.rubin :
                        num <= 35 ? style.sapfir :
                            num > 35 ? style.bril : style.simple;

        let placeholderStatus = num <= 2 || NaN ? 'обычный' :
            num <= 5 ? 'бронзовый' :
                num <= 11 ? 'золотой' :
                    num <= 23 ? 'рубиновый' :
                        num <= 35 ? 'сапфировый' :
                            num > 35 ? 'брилиантовый' : 'обычный';
        let date;
        let dateUser = el.expireIn.replace(/(\d{2}).(\d{2}).(\d{4})/gi, '$3-$2-$1')
        if (Date.now() > +new Date(dateUser)) {
            date = {background: 'red'};
        } else {
            date = {background: 'lightgreen'};
        }

        return (
            <tr key={index}>
                <td className={id==='code'?'activeTableItem':''}>{el.cardCode}</td>
                <td className={id==='date'?'activeTableItem':''} style={date}>{el.expireIn}</td>
                <td className={id==='kka'?'activeTableItem':''} style={row}>{placeholderStatus}</td>
                <td className={id==='fullName'?'activeTableItem':''} style={row}>{el.fullName}</td>
                <td className={id==='phone'?'activeTableItem':''}>{el.phone}</td>
                <td className={id==='course'?'activeTableItem':''}>{el.course}</td>
            </tr>
        );
    });
}