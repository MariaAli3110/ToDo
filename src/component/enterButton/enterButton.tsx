import React from "react";
import style from './button.module.scss'


const enterButton = (props:any) => {
    return (
        <button className={style.button}
        onClick={props.clicked}>Enter</button>
    )
}

export default enterButton 