import BookList from './bookList.js';
import booklist from './bookList.js';

function App() {
  //making the BookList component to work dynamically by passing props to it
  const books = [
    { id: 1, title: 'Becoming' },
    { id: 2, title: 'Hello' },
    { id: 3, title: 'Python' },
    { id: 4, title: 'Java Script' },

  ];
  return (
    <div className="App">
      <Welcome />
      <BookList books={books} />    /
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
