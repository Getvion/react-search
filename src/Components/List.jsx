import React, { useState } from 'react';
import '../index.scss';

function List({ countries }) {
  const [visibleList, setVisibleList] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [activeSugestion, setActiveSugestion] = useState(0);

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  // hide list on remove focus from input
  const hideList = (e) => {
    if (e.target.classList.contains('app')) {
      setVisibleList(false);
    }
  };

  const onKeyPressInInput = (e) => {
    setVisibleList(true);

    // обработка ентера и проверка на наличие офильтрованного списка
    if (e.keyCode === 13 && filteredCountries.length) {
      setSearchValue(suggestionsList.props.children[activeSugestion].props.children);
      setActiveSugestion(0);
      setVisibleList(false);
    }

    // обработка кнопки вверх
    if (e.keyCode === 38 && filteredCountries.length) {
      setActiveSugestion((previous) => previous - 1);
    }

    // обработка кнопки вниз
    if (e.keyCode === 40 && filteredCountries.length) {
      setActiveSugestion((previous) => previous + 1);
    }
  };

  // фильтр стран по названию
  const filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(searchValue.toLowerCase());
  });

  let suggestionsList;
  let paragraphClassName = 'list__item';

  // проверка наличия списка после фильтрации
  if (filteredCountries.length) {
    suggestionsList = (
      <div className={visibleList ? 'list' : 'list invisible'}>
        {filteredCountries.map((country, index) => {
          if (index === activeSugestion) {
            paragraphClassName = 'list__item active';
          } else {
            paragraphClassName = 'list__item';
          }

          return (
            <p key={index} className={paragraphClassName}>
              {country.name.common}
            </p>
          );
        })}
      </div>
    );
  } else {
    suggestionsList = (
      <div className={visibleList ? 'list' : 'list invisible'}>
        <p className='list__item'>Fuck u! (nothing to sugest)</p>
      </div>
    );
  }

  return (
    <div className='app' onClick={hideList}>
      <input
        className='input'
        type='text'
        placeholder='Search the country'
        value={searchValue}
        onChange={onChangeSearchInput}
        onKeyDown={onKeyPressInInput}
        onClick={() => setVisibleList(true)}
      />
      {suggestionsList}
    </div>
  );
}

export default List;
