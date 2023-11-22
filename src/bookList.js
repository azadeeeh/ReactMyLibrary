
//bookList responsible for printing titles and the x button beside them 

const BookList = ({ books, removeBook }) => {


    const bookList = books.map(book =>
        <li className="items" key={book.id}>
            {book.title} {' '}
            <button onClick={() => removeBook(book.id)}>X</button>


        </li>
    );
    return (
        <div>
            <h2>Book List:</h2>
            <ul>{bookList}</ul>

        </div>
    );
}

export default BookList;