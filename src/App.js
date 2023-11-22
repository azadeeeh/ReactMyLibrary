import BookList from './bookList.js';
import booklist from './bookList.js';

function App() {
  return (
    <div className="App">
      <Welcome />
      <BookList />
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
