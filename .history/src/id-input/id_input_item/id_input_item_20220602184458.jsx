import React, { useState } from 'react';
import './id-input_item.css';

function IdInputItem(props) {
    const [number, setNumber] = useState('0000');//number用于存储正确格式的卡号
    const [color, setColor] = useState('black');//定义输入框outline颜色的变量
    const { getNumber } = props;
    const test1 = (e) => {
        const { value } = e.target;//获取input内容
        console.log('当前输入：', value);
        const reg = /^[1-9A-F]+[F]+[0-8]+[0]$/;
        // const reg = /^[0-9A-F]+$/;
        //正则：必须包含数字或字母ABCDEF
        if (reg.test(value)) {
            if (value.length === 4) {
                setNumber(value);
                getNumber(value);
            } else {
                if (value.length > 4) {
                    setColor('red');//改变输入框边框颜色———红
                    console.log('所输内容已超出长度限制')
                } else {
                    setColor('black');//维持输入框原来边框颜色
                }
            }
        }
        else {
            setColor('red');//改变输入框边框颜色———红
            console.log('所输内容不符合要求')
        };
    }
    return (
        <div>
            <input
                onChange={test1}
                placeholder={number}//
                style={{ outlineColor: color }}
            />
        </div>
    );
}

export default IdInputItem
