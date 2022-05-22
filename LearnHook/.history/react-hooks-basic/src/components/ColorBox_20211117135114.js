// rsfp tab để tạo nhanh components

import React, { useState } from 'react'

ColorBox.propTypes = {

};

function ColorBox() {

    // Khai báo Sử dụng Hook useState
    const [color, setColor] = useState('deepink');


    return (
        <div className="color-box"
        style={{backgroundColor: color}}
        >
            Color

        </div>
    );
}

export default ColorBox;