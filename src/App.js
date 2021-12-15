import React, { useEffect, useState } from 'react';
import axios from 'axios';

import List from './Components/List';

import './index.scss';

function App() {
  // TODO по энтеру - вбивать вариант из списка, на стрелки менять выбранный элемент

  const [countries, setCountries] = useState([]);
  const [visibleList, setVisibleList] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const getCountries = () => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      return setCountries(response.data);
    });
  };

  useEffect(() => {
    getCountries();
  }, []);

  const hideList = (e) => {
    if (e.target.classList.contains('app')) {
      setVisibleList(false);
    }
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
    console.log(filteredCountries);
  };

  const filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div className='app' onClick={hideList}>
      <input
        className='input'
        type='text'
        placeholder='Search the country'
        value={searchValue}
        onChange={onChangeSearchInput}
        onClick={() => setVisibleList(true)}
      />
      <div className={visibleList ? 'list' : 'list invisible'}>
        {filteredCountries.map((country, index) => {
          return <List country={country} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
