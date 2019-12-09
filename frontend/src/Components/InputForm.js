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
background-color: #123456;
`

export default InputForm;