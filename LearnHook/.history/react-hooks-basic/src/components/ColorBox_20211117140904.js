// rsfp tab để tạo nhanh components

import React, { useState } from 'react'

ColorBox.propTypes = {

};

// định nghĩa hàm random
function getRandomColor() {

    // khai báo 1 mảng phần tử màu
   const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];

   // Math.random là hàm nó sẽ return về con số thập phân từ 0 -> 1 (và luôn luôn nhỏ hơn 1) 
        // và nhân cho 5 như vậy nó sẽ ra 1 con số luôn luôn nhỏ hơn 5 (0 -> 5)
   // Math.trunc là hàm mà nó chỉ lấy phần nguyên
   const randomIndex = Math.trunc(Math.random()*5);
}


function ColorBox() {

    // Khai báo Sử dụng Hook useState
    const [color, setColor] = useState('deeppink');

    // Tạo hàm xử có tên là HandleBoxClick
    function HandleBoxClick() {
       // get random color ----> color

       const newColor = getRandomColor(); // khai báo 1 cái newColor bằng với 1 hàm getRandomColor
       setColor(newColor); // cập nhật lại setState
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