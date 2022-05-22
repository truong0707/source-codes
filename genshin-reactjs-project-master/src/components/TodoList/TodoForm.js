import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='form-congviec'>
      {props.edit ? (
        <>
          <input
            placeholder='Hãy cập nhật vào đây'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='input-congviec edit'
          />
          <button onClick={handleSubmit} className='button-congviec edit'>
            Cập Nhật
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Ví dụ: Chu du ở Mondstandt'
            value={input}
            onChange={handleChange}
            name='text'
            className='input-congviec'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='button-congviec'>
            Thêm vào
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
