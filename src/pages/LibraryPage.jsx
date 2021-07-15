import React, { Component } from 'react'
import { connect } from 'react-redux';

import LibraryForm from '../components/Library/LibraryForm/LibraryForm';
import LibraryList from '../components/Library/LibraryList/LibraryList';

export class LibraryPage extends Component {
    state = {
        books:[],
    }

    handleAddBook = ({ name, author, year, page }) => {
          const book = {
            id: new Date().getTime(),
            name,
            author,
            year,
            page,
            status: 'plan',
        } ;
        this.setState(prevState => {
            return {
                books:[...prevState.books, book]
            }
        });
        
    };

    render() {
        const { books } = this.state;
        return (
            <div>
                <LibraryForm onAddBook={ this.handleAddBook} />
                { books.length >0 && <LibraryList books={books}/>}
            </div>
        )
    }
}

export default LibraryPage

