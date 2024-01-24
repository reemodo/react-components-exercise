import Spam from "./Spam";
import React, { Component } from 'react';


const Spamalot =()=>{
    const num = 500
    return Array.from(Array(num)).map(() => <Spam/>)
}

export default Spamalot

