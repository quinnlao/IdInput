import React, { useState } from 'react';
import IdInputItem from './id_input_item/id_input_item'
import './id_input.css'


function IdInput() {
    const [value1, takeNumber1] = useState('0000')
    const [value2, takeNumber2] = useState('0000')
    const [value3, takeNumber3] = useState('0000')
    const [value4, takeNumber4] = useState('0000')
    const getValue1 = (param) => {
        takeNumber1(param)
        console.log('value1', param)
    }
    const getValue2 = (param) => {
        takeNumber2(param)
        console.log('value2', param)
    }
    const getValue3 = (param) => {
        takeNumber3(param)
        console.log('value1', param)
    }
    const getValue4 = (param) => {
        takeNumber4(param)
        console.log('value1', param)
    }
    // const value = [...value1, ...value2, ...value3, ...value4]
    // console.log(value.replace(/-/g, '').replace(/(\d{4})/g, '$1-').replace(/-*$/, ''))
    return (
        <div className="id_input">
            <h4>您输入的卡号为：{value1}-{value2}-{value3}-{value4}</h4>
            <div className="id_input_item"><IdInputItem getNumber={getValue1} /></div>
            <div className="id_input_item"><IdInputItem getNumber={getValue2} /></div>
            <div className="id_input_item"><IdInputItem getNumber={getValue3} /></div>
            <div className="id_input_item"><IdInputItem getNumber={getValue4} /></div>
        </div>
    );
}

export default IdInput;