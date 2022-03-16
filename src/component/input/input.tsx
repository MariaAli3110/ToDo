import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import style from './input.module.scss';

const input = (props:any) => {
    return (
        <input className={style.input}
        placeholder="Enter New Task"
        id='EnterTask'/>
       
    )
}
export default input;
