import React from 'react';

export default class LoggingButton extends React.Component {
    // Cú pháp này đảm bảo `this` được ràng buộc trong handleClick.
    // Lưu ý: đây là cú pháp *thử nghiệm*.
    handleClick = () => {
      console.log('this is:', this);
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          Click me
        </button>
      );
    }
  }