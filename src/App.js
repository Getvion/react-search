import React, { useEffect, useState } from 'react';
import axios from 'axios';

import List from './Components/List';

import './index.scss';

function App() {
  const [countries, setCountries] = useState([]);

  const getCountries = () => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      return setCountries(response.data);
    });
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <List countries={countries} />
    </>
  );
}

export default App;
