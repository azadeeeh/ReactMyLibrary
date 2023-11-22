
import React, { useState } from 'react';

const AddBookForm = ({ addBook }) => {

    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault(); //do not load the page
        if (title) {
            const newBook = { id: Date.now(), title }; //date.now creats a unique id for each added book
            //call addBook from App.js
            addBook(newBook);
            //clear
            setTitle('');
        }
    };
    return (
        <div>
            <h2>add a new book</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </label>
                <button type="submit"  >Add Book</button>
            </form>
        </div>
    );
};

export default AddBookForm;