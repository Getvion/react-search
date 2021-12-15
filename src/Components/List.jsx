import React from 'react';
import '../index.scss';

function List({ country }) {
  return <p className='list__item'>{country.name.common}</p>;
}

export default List;
