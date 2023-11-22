

const BookList = () => {
    const books = [
        { id: 1, title: 'Becoming' },
        { id: 2, title: 'Hello' },
        { id: 3, title: 'Python' },
        { id: 4, title: 'Java Script' },

    ];

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