import React from 'react';
import styled from 'styled-components';
import { ErrorMessage, Form, Formik } from 'formik';
import FormGroup from '../../../components/form/formGroup';
import ErrorText from '../../../components/form/error';
import Input from '../../../components/form/input';
import Button from '../../../components/button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const Smalldiv = styled.div`
  height:50vh;
  width:30vw;
  padding:16px;
  text-align:center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, .4);
`;

export const Error = styled.div`
  color: #ed4337;
  font-weight: 500;
  margin: 1rem 0;
  font-size: 0.8rem;
  max-width: 250px;
  line-height: 1.5;
`;


export const LoginForm = props => (
  <Formik initialValues={{ email: '', password: '' }} {...props}>
    {({ handleChange, handleBlur, values, handleSubmit, errors }) => (
      <Form>
        <FormGroup style={{ minWidth: 250 }}>
          {errors.genericError && <ErrorText>{errors.genericError}</ErrorText>}
          <Input
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
            error={errors.email}
            value={values.email}
          />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange('password')}
            onBlur={handleBlur('password')}
            error={errors.password}
            value={values.password}
          />
          <Button primary large onClick={handleSubmit} type="submit">
            Login
          </Button>
        </FormGroup>
      </Form> 
    )}
 
  </Formik>
  
);

