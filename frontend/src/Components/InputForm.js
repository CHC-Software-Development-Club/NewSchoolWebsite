import React from 'react'; 
import styled from 'styled-components';
import Input from './Input';

const InputForm = props => {
  return (
    <Form>
      <Input placeholder="Username"/>
      <Input type="password" placeholder="Password"/>
    </Form>
  )
};

const Form = styled.form`
background-color: #ff0000;
padding: 50px;
display: block;
width: 40%;
margin: 100px auto;
border-radius: 10px;
`

export default InputForm;