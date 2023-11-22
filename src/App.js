
import React, { useState } from 'react';
import BookList from './bookList.js';
import AddBookForm from './addBookForm.js';


function App() {
  //setting state changin const books to :
  const [books, setBooks] = useState([
    { id: 1, title: 'Becoming' },
    { id: 2, title: 'Hello' },
    { id: 3, title: 'Python' },
    { id: 4, title: 'Java Script' },

  ]);

  //adding new book
  const addBook = newBook => {
    setBooks([...books, newBook]);   //getting all the existing books and the new one
  };


  return (
    <div className="App">
      <Welcome />
      <BookList books={books} />
      <AddBookForm addBook={addBook} />
    </div>
  );
};



function Welcome() {
  return (
    <div className="Welcome">
      <h1>Welcome to the BookList App</h1>
      <p>here you can create a booklist and add or remove books from your list.</p>
    </div>
  )
}



export default App;
