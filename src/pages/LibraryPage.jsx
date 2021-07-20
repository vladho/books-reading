import React, { Component } from 'react';

// import { connect } from 'react-redux';

import LibraryForm from '../components/Library/LibraryForm/LibraryForm';
import LibraryList from '../components/Library/LibraryList/LibraryList';

export class LibraryPage extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <LibraryForm />
        <LibraryList />
      </div>
    );
  }
}

export default LibraryPage;
