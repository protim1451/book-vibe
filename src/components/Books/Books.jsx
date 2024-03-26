import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('book.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])
    return (
        <div className="mt-5 lg:mt-12 mx-4 lg:mx-32">
            <h1 className="text-center text-5xl font-bold">Books</h1>
            <div className="grid lg:grid-cols-3 gap-6 mb-3">
                {
                    books.map((book,idx) => 
                    <Book key={idx} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;