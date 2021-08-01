import { useState } from 'react';
import { useStateValue } from '../../index';
import { login } from '../actions';
import { loginUser } from '../queries';
import { LOCAL_STORAGE } from '../../../constants';
import * as jwt from 'jsonwebtoken';

const useLogin = () => {
  const [{ auth }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const formData = async ({ values, actions }) => {
    setIsLoading(true);

    if (values.email !== '' && values.password !== '') {
      try {
        const response = await loginUser(values);
 
 
       // console.log(response);
        localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, response.result.accesToken);
        localStorage.setItem(LOCAL_STORAGE.ID_TOKEN, response.result.idToken);
        localStorage.setItem(LOCAL_STORAGE.REFRESH_TOKEN, response.result.refreshToken);      
        const token = localStorage.getItem(LOCAL_STORAGE.ID_TOKEN);
        //get user email, store in local storage for entering to database
        const email = jwt.decode(token).email;
            localStorage.setItem(LOCAL_STORAGE.EMAIL, email); 
      //  console.log(email);
        dispatch(login(response));
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }
  };

  return [auth, formData, isLoading, error];
};

export default useLogin;
