import React, { Component } from 'react';
import { connect } from 'react-redux';
import booksOperations from '../redux/books/booksOperations';
import booksSelectors from '../redux/books/booksSelectors';

import Spinner from '../components/Spinner/Spinner';
import LibraryForm from '../components/Library/LibraryForm/LibraryForm';
import LibraryList from '../components/Library/LibraryList/LibraryList';

class LibraryPage extends Component {
  componentDidMount() {
    this.props.onFetchBooks();
  }

  render() {
    return (
      <div>
        <LibraryForm />
        {/* {this.props.isLoadingAddBook ? <Spinner /> : <LibraryList />} */}
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

export default connect(mapStateToProps, mapDispatchToProps)(LibraryPage);
