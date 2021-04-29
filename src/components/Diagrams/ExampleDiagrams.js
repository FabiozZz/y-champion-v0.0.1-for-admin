import React from 'react';
import {Line, Pie} from "react-chartjs-2";
const response = [
    {id:1,value: 'Интернет',usage:100},
    {id:2,value: 'Друзья',usage:75},
    {id:3,value: 'Радио',usage:10},
    {id:4,value: 'Телевидение',usage:45},
    {id:5,value: 'Реклама',usage:179},
]
export const ExampleDiagrams = ()=> {
    let chart = {
        labels: response.map((el)=>el.value),
        datasets: [
            {
                label: '# of votes',
                data: response.map((el) => el.usage),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                ]
            }
        ]
    };

    console.log(chart)
    return (
        <div style={{width:'50%',height:'auto',margin:'auto'}}>
            {/*<Line data={chart}/>*/}
            <Pie data={chart}/>
        </div>
    );
}