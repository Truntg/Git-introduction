/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Greeting = (props) => {
  return (
    <div>
      <h2>Hello, {props.userName}!</h2>
    </div>
  );
}

export default Greeting;
