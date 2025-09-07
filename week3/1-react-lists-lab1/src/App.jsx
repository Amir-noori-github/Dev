import Book from "./Book";
import booksData from "./booksData";
import './Book.css';

function App() {
  return(
    <div className="App">
      <h1>Book List</h1>
      <div className="book-title">
        {booksData.map(book => <Book key={book.id} book={book} name="Matti"/>)}
      </div>
    </div>
  );
}
export default App;

/*
//  Observe the Result Without the key Prop

// Replace the code in the App.js file with the following:

import Book from './Book';
import booksData from './booksData';
import './Book.css';

function App() {
  return (
    <div className="App">
      <h1>Book List</h1>
      <div className="book-list">
        {
        booksData.map(
          (book) => (
          <Book book={book} />))
        }
      </div>
    </div>
  );
}

export default App;


*/ 