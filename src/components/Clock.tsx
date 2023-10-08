import React, {useEffect, useState} from 'react';

type ClockPT = {}

export const Clock: React.FC<ClockPT> = ({}, ...props) => {
    const getValueDateParams = (param: number) => {
        return param < 10 ? `0${param}` : param
    }

    const [date, setDate] = useState(new Date())
    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

    return (
        <div style={{fontSize: '45px', color: 'white', textAlign: 'center', fontWeight: 'bold', backgroundColor: '#606060'}}>
            <span>{getValueDateParams(date.getHours())}</span>
            :
            <span>{getValueDateParams(date.getMinutes())}</span>
            :
            <span>{getValueDateParams(date.getSeconds())}</span>
        </div>
    );
};