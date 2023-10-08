import React, {useEffect, useState} from 'react';

type ClockPT = {}

export const Clock: React.FC<ClockPT> = ({}, ...props) => {

    const getTwoSymbolsDateValue= (param: number) => param < 10 ? `0${param}` : param

    const [date, setDate] = useState(new Date())
    useEffect(() => {

        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        // функція для зачистки setInterval
        //якщо в setInterval ми повертаємо іще якусь ф-цію, то вона автоматично запускається перед демонтажем компонента
        // типу як метод ComponentWillUnMount
        return ()=>{
            // для того щоб метод clearInterval спрацював, передаємо йому інфу про який саме setInterval йдетьтся
            clearInterval(intervalID)
        }
    }, [])

    let hours = getTwoSymbolsDateValue(date.getHours())
    let minutes = getTwoSymbolsDateValue(date.getMinutes())
    let seconds = getTwoSymbolsDateValue(date.getSeconds())


    return (
        <div style={{
            fontSize: '45px', color: 'white', textAlign: 'center',
            fontWeight: 'bold', backgroundColor: '#606060', height: '100vh'
        }}>

            <span style={{fontSize: '22px'}}> Example: Clock with useEffect </span>
            <br/>
            <span>{hours}</span>
            :
            <span>{minutes}</span>
            :
            <span>{seconds}</span>
        </div>
    );
};