import React from "react";

export function createTable(some){
    return some.map((el,index)=>{
        return(
            <tr key={index}>
                <td>{el.cardCode}</td>
                <td>{el.expireIn}</td>
                <td>{el.countBuyAboniment}</td>
                <td>{el.fullName}</td>
                <td>{el.phone}</td>
                <td>{el.course}</td>
                <td>{el.dateFirsTrainer}</td>
                <td>{el.address}</td>
                <td>{el.birthday}</td>
                <td>{el.howKnow}</td>
            </tr>
        )
    });
}