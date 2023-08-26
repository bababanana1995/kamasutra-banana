import React from "react";
import loader from "../img/Spin-1s-200px.svg"
import style from './Preloader.module.css'

type PreloaderPropsType={

}
export const Preloader=(props:PreloaderPropsType)=>{

    return(
        <img className={style.loader} alt='loader' src={loader}/>
    )
}
