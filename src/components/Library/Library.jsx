import React, { Children, Component } from 'react';
import { connect, useSelector } from 'react-redux';
import booksOperations from '../../redux/books/booksOperations';
import booksSelectors from '../../redux/books/booksSelectors';

import Spinner from '../Spinner/Spinner';
import LibraryForm from '../Library/LibraryForm/LibraryForm';
import LibraryList from '../Library/LibraryList/LibraryList';
import NestingModal from '../ModalHoc/NestingModal/NestingModal';
import FirstVisit from '../ModalComponents/FirstVisit/FirstVisit';
import RatingBook from '../ModalComponents/RatingBook/RatingBook';

class Library extends Component {
  componentDidMount() {
    this.props.onFetchBooks();
  }

  render() {
    return (
      <>
        <LibraryForm />
        {false && (
          <NestingModal>
            {props => {
              console.log(props);
              return <FirstVisit {...props} />;
            }}
          </NestingModal>
        )}
        {/* <NestingModal>{props => <RatingBook {...props} />}</NestingModal> */}
        {this.props.isLoadingAddBook ? <Spinner /> : <LibraryList />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingAddBook: booksSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onFetchBooks: booksOperations.fetchBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Library);
