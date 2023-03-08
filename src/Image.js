import React from 'react';
import { useState, useEffect } from 'react';

export const Image = (props)=>{
    const length = props.arr.length;
    const data =  props.arr;

    if(length === 1){
        return  <>
                    <img className="big" src={data[0].url} alt="" />
                    <img className="small smallImage1" alt=""/>
                    <img className="small smallImage2" alt=""/>
                </>
    }else if(length === 2){
        return <>
                    <img className="big" src={data[0].url} alt="" />
                    <img className="small smallImage1" src={data[1].url} alt=""/>
                    <img className="small smallImage2" alt=""/>
                </>          
    } else if(length === 3){
        return <>
                    <img className="big" src={data[0].url} alt="" />
                    <img className="small smallImage1" src={data[1].url} alt=""/>
                    <img className="small smallImage2" src={data[2].url} alt=""/>
                </> 
    }
    else
        return <>
                    <img className="big" src={data[0].url} alt="" />
                    <img className="small smallImage1" src={data[1].url} alt=""/>
                    <img className="small smallImage2" src={data[2].url} alt=""/>
                </> 
};

