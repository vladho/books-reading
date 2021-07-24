import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import booksOperations from '../../redux/books/booksOperations';
import booksSelectors from '../../redux/books/booksSelectors';

import Spinner from '../Spinner/Spinner';
import LibraryForm from '../Library/LibraryForm/LibraryForm';
import LibraryList from '../Library/LibraryList/LibraryList';
import NestingModal from '../ModalHoc/NestingModal/NestingModal';
import FirstVisit from '../ModalComponents/FirstVisit/FirstVisit';

const Library = () => {
  const dispatch = useDispatch();
  const isLoadingAddBook = useSelector(booksSelectors.getLoading);
  const getAllBooks = useSelector(booksSelectors.getAllBooks);

  // console.log(getAllBooks);

  useEffect(() => {
    dispatch(booksOperations.fetchBooks());
  }, []);

  return (
    <>
      <LibraryForm />
      {!isLoadingAddBook && getAllBooks.length === 0 && (
        <NestingModal>{props => <FirstVisit {...props} />}</NestingModal>
      )}
      {isLoadingAddBook ? <Spinner /> : <LibraryList />}
    </>
  );
};

export default Library;
