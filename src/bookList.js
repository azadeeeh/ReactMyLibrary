

const BookList = ({ books }) => {


    const bookList = books.map(book =>
        <li key={book.id}>
            {book.title}
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