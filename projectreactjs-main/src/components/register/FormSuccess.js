import React from 'react';
import './Form.css';
import aaa from './img/th.jpg'
const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Chúng tôi đã nhận được yêu cầu của bạn!</h1>
      <img src={aaa} alt="Italian Trulli"></img>
    </div>
  );
};

export default FormSuccess;
