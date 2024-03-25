import { useLoaderData, useLocation, useParams } from "react-router-dom";
import Book from "../Book/Book";

const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const idInt = parseInt(bookId);
    const book = books.find(book => book.id === idInt);
    
   
    return (
        <div>
            <h2>Details of the book</h2>
        </div>
    );
};

export default BookDetails;