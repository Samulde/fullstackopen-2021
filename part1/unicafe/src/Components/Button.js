import React from 'react';

const Button = (props) => 
  <button onClick={props.onClickHandler}>
    {props.text}
  </button>

export default Button