import { useState } from 'react';
import { useStateValue } from '../../index';
import { BOOK } from '../actions';
import { bookWorkspace } from '../queries';

const useBook = () => {
  const [{ reserve }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const submitReserve = async body => {
    setIsLoading(true);

    try {
      await bookWorkspace (body);
    } catch (err) {
      setError(err);
    }

    setIsLoading(false);
  };

  return [submitReserve, isLoading, error];
};

export default useBook;
