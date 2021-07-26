import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import booksOperations from '../../redux/books/booksOperations';
import booksSelectors from '../../redux/books/booksSelectors';

import Spinner from '../Spinner/Spinner';
import LibraryForm from '../Library/LibraryForm/LibraryForm';
import LibraryList from '../Library/LibraryList/LibraryList';
import FirstVisit from '../ModalComponents/FirstVisit/FirstVisit';

const Library = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const isLoadingBook = useSelector(booksSelectors.getLoading);
  const isFirstVisit = useSelector(booksSelectors.isFirstVisit);

  useEffect(() => {
    dispatch(booksOperations.fetchBooks());
  }, [dispatch]);

  useEffect(() => {
    isFirstVisit && isShowModal();
  }, [isFirstVisit]);

  const isShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <LibraryForm />
      <FirstVisit showModal={showModal} setShowModal={setShowModal} />
      {isLoadingBook ? <Spinner /> : <LibraryList />}
    </>
  );
};

export default Library;
