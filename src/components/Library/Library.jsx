import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import booksOperations from '../../redux/books/booksOperations';
import booksSelectors from '../../redux/books/booksSelectors';

import Spinner from '../Spinner/Spinner';
import LibraryForm from '../Library/LibraryForm/LibraryForm';
import LibraryList from '../Library/LibraryList/LibraryList';
import NestingModal from '../ModalHoc/NestingModal/NestingModal';
import FirstVisit from '../ModalComponents/FirstVisit/FirstVisit';
import { authSls } from '../../redux/auth';

const Library = () => {
  const dispatch = useDispatch();
  const isLoadingBook = useSelector(booksSelectors.getLoading);
  const getAllBooks = useSelector(booksSelectors.getAllBooks);
  const getAuthLoading = useSelector(authSls.getLoading);
  const loading = useSelector(state => state.books.loading);

  useEffect(() => {
    dispatch(booksOperations.fetchBooks());
  }, []);

  console.log(isLoadingBook);
  console.log(getAllBooks);
  console.log(loading);

  return (
    <>
      <LibraryForm />
      {!isLoadingBook && getAllBooks.length === 0 && (
        <NestingModal>{props => <FirstVisit {...props} />}</NestingModal>
      )}
      {isLoadingBook ? <Spinner /> : <LibraryList />}
    </>
  );
};

export default Library;
