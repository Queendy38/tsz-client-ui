import React, { useEffect } from 'react';
import useBook from '../../state/reserve/hooks/useBook';
import Spinner from '../../components/spinner';
import Button from '../../components/button';
import styled from 'styled-components';
//import img from '../assets/floorplan.jpg';

import {
    Container,
    ReserveForm,
} from './components';

export const Smalldiv = styled.div`
  height:70vh;
  width:28vw;
  padding:16px;
  text-align:center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, .4);
  float:left;
`;

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

 const Rightdiv = styled.div`
  height:70vh;
  width:70vw; 
  text-align:center;
  float:right;
  background-image: url('floorplan.jpg');
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
`;

const Reserve = () => {
    const [submitReserve, isLoading, error] = useBook();
    const handleSubmit = async (values, actions) => {
        //submit suggestion
        await submitReserve(values);
        //reset form
        actions.resetForm();
      }
    return (
        <Container>
          <Smalldiv>
          <Nav>
          <Title>Make a reservation</Title>

          </Nav>
          <Spinner show={isLoading} />
          <ReserveForm onSubmit={handleSubmit}/>
          </Smalldiv>
          <Rightdiv></Rightdiv>
        </Container>
      );
    };

export default Reserve;