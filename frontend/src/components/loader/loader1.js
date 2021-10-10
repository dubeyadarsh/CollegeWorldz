import React,{useState,useEffect} from 'react'
import ReactLoading from "react-loading";
import "./loader.css";

export const Loader1 = () => {

  
    return (
        <div className="vh-100 bg-dark">
            <div className="loader">
                <ReactLoading  type={"bars"} color={"#03fc4e"} height={100} width={100}/>
            </div>
        </div>
    )
}
