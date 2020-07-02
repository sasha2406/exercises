import React from 'react';
import Aux from './Aux';

const person = (props) => {
  return (
    <Aux>
      <p>I'm {props.name} and I am {props.age} years old!</p>
      <p key="i2">{props.children}</p>
      <input type="text" key="i3" onChange={props.changed} value={props.name} />
    </Aux>
    
  )
}
export default person;