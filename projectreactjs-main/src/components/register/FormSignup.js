import React from 'react';
import { Link } from "react-router-dom";
import validate from './ValidateInfo';
import useForm from './UseForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Hãy bắt đầu với chúng tôi ngay hôm nay!
          Tạo tài khoản của bạn bằng cách điền vào thông tin bên dưới.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Tên tài khoản</label>
          <input
            className='form-input'
            type='text'
            name='userName'
            placeholder='Nhập tên người dùng của bạn'
            value={values.userName}
            onChange={handleChange}
          />
          {errors.userName && <p>{errors.userName}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Nhập email của bạn'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Mật khẩu</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Nhập mật khẩu của bạn'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Xác nhận mật khẩu</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Xác nhận mật khẩu của bạn'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Đăng ký
        </button>
        <span className='form-input-login'>
        Bạn có sẵn sàng để tạo một tai khoản? Đăng nhập<Link to='/'>ở đây</Link>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
