import React, { Component, useEffect, useState } from "react";
import styles from "./Timer.module.scss";


const  Timer =() => {
const year = new Date(new Date().getFullYear() + 1, 0, 1).getTime()

const [dateTime, setDateTime] = useState(new Date())
const [endYear, setEndYear] = useState(year)


const diff = year - new Date().getTime()

const time = {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60)
}

useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
        clearInterval(id);
    }
}, []);


    return <>

 
    <div>{`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`}</div>
    <div>{`${time.days}:${time.hours}:${time.minutes}:${time.seconds}`}</div>

    </>;
}

export default Timer
