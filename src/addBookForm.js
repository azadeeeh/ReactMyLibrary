//addBookForm responsible for making the form where user can enter the title. it is generating the new items id and updating the list of books

import React, { useState } from 'react';



const AddBookForm = ({ addBook }) => {

    const [title, setTitle] = useState('');   //creates state variable title

    const handleSubmit = e => {
        e.preventDefault(); //do not reload the page
        if (title) {        //make sure user entered the title and its not empty
            const newBook = { id: Date.now(), title }; //date.now creats a unique id for each added book
            //call addBook from App.js and update the list of books
            addBook(newBook);
            //clear
            setTitle('');
        }
    };
    return (
        //e.target.value gets the title of the current book
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