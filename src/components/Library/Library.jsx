import React, { Component } from 'react';
import { connect } from 'react-redux';
import booksOperations from '../../redux/books/booksOperations';
import booksSelectors from '../../redux/books/booksSelectors';

import Spinner from '../Spinner/Spinner';
import LibraryForm from '../Library/LibraryForm/LibraryForm';
import LibraryList from '../Library/LibraryList/LibraryList';

class Library extends Component {
  componentDidMount() {
    this.props.onFetchBooks();
  }

  render() {
    return (
      <div>
        <LibraryForm />
        {this.props.isLoadingAddBook ? <Spinner /> : <LibraryList />}
      </div>
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
