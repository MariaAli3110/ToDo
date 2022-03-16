import React from "react";
import style from './task.module.scss';

const task = (props:any) => {
    const changed = () => {

    }
    return(
            <input className={style.Task}
            id={props.id}
            value={props.value}
            onClick={props.clicked}
            onChange={changed}/>
    )
}

export default task