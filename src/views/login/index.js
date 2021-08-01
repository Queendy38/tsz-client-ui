import React, { useEffect } from 'react';
import styled from 'styled-components';
import useLogin from '../../state/auth/hooks/useLogin';
import Spinner from '../../components/spinner';
import { Container, Error, LoginForm, Smalldiv } from './components';
import { isTokenExpired } from '../../utils/jwt';

const Nav = styled.div`
height: 50px;
width: 100%;
align-items: center;
padding: 0 20px;
position: ${props => (props.fixed ? 'fixed' : 'relative')};
`;

const Title = styled.h1`
  margin: 0;
  color: #000;
  font-weight: 600;
  font-size: 24px;
  line-height:1px;
`;

const Login = ({ location, history }) => {
  const { from } = location.state || { from: { pathname: '/home' } };
  const [auth, setLogin, isLoading, error] = useLogin();

  useEffect(() => {
    if (!isTokenExpired()) {
      history.push(from);
    }
  }, [auth, from, history]);


  return (
    
    <Container><Smalldiv>
      <Nav>
       <Title>DaHoteling App</Title>
       <br></br>
       <h3>Log In</h3>
      </Nav>
      <Spinner show={isLoading} />
      <LoginForm onSubmit={(values, actions) => setLogin({ values, actions })} />
      {error && <Error>{error}</Error>}</Smalldiv>
    </Container>
    
  );
};

export default Login;
