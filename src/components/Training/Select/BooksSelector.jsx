import React from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { trainingSelectors } from '../../../redux/training/';

const BooksSelector = ({ onChange }) => {
  const booksToRead = useSelector(trainingSelectors.getPlanNotSelectBooks);

  const bookSelect = booksToRead.map(book => ({
    ...book,
    label: book.title,
    value: book.title,
  }));

  const customStyles = {
    input: (provided, state) => ({
      ...provided,
      height: '34px',
    }),

    menu: (provided, state) => ({
      ...provided,
      marginTop: '5px',
      boxShadow: '0px 2px 3px rgba(9, 30, 63, 0.1)',
    }),

    singleValue: (provided, state) => ({
      ...provided,
      color: '#a6abb9',
    }),
  };

  return (
    <Select
      defaultValue=""
      placeholder="Choose books from the library"
      options={bookSelect}
      onChange={value => onChange(value)}
      styles={customStyles}
    />
  );
};

export default BooksSelector;
