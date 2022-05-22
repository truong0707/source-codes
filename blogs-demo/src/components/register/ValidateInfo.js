export default function validateInfo(values) {
    let errors = {};
    console.log(values)  
    if (!values.userName.trim()) {
      errors.userName = 'Tên người dùng bắt buộc';

    }
    else if (!/^[A-Za-z]+/.test(values.userName.trim())) {
      errors.userName = 'Nhập tên hợp lệ';
    }
  
    if (!values.email) {
      errors.email = 'Email bắt buộc';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Địa chỉ email không hợp lệ';
    }
    if (!values.password) {
      errors.password = 'Mật khẩu là bắt buộc';
    } else if (values.password.length < 6) {
      errors.password = 'Mật khẩu phải có 6 ký tự trở lên';
    }
  
    if (!values.password2) {
      errors.password2 = 'Mật khẩu là bắt buộc';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Mật khẩu không phù hợp';
    }
    return errors;
  }
  