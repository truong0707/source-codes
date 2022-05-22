// rsfp tab để tạo nhanh components

import React, { useState } from 'react'

ColorBox.propTypes = {

};

function ColorBox() {

    // Khai báo Sử dụng Hook useState
    const [color, setColor] = useState('deeppink');

    // Tạo hàm  xử có tên là HandleBoxClick
    function HandleBoxClick() {
       // get ran
    }


    return (
        <div className="color-box"
        style={{backgroundColor: color}}
        >
            Color

        </div>
    );
}

export default ColorBox;