import { useState } from 'react';
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Book from "../Book/Book";

const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const idInt = parseInt(bookId);
    const [isAddedToReadList, setIsAddedToReadList] = useState(false);
    const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);

    const book = books.find(book => book.bookId === idInt);

    const handleAddToLocalStorage = (action) => {
        const storageKey = action === 'read' ? 'readBooks' : 'wishlistBooks';
        const storageData = JSON.parse(localStorage.getItem(storageKey)) || [];

        // Check if the book already exists in the storage data
        const isBookAdded = storageData.some(item => item.bookId === idInt);

        if (action === 'read') {
            if (isBookAdded) {
                // Book is already added to the read list
                toast.error(`This book is already added to your read list.`);
                return;
            }
            // Add book to read list
            storageData.push(book);
            localStorage.setItem(storageKey, JSON.stringify(storageData));
            setIsAddedToReadList(true);
            toast.success(`Book added to your read list.`);
        } else if (action === 'wishlist') {
            if (isBookAdded) {
                // Book is already added to the wishlist
                toast.error(`This book is already added to your wishlist.`);
                return;
            }

            const readBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
            const isBookInReadList = readBooks.some(item => item.bookId === idInt);
            if (isBookInReadList) {
                // Book is already in the read list, cannot add to wishlist
                toast.error(`This book is already added to your read list. You cannot add it to your wishlist.`);
                return;
            }

            // Add book to wishlist
            storageData.push(book);
            localStorage.setItem(storageKey, JSON.stringify(storageData));
            setIsAddedToWishlist(true);
            toast.success(`Book added to your wishlist.`);
        }
    };

    return (
        <div className="mx-4 mt-4 lg:mx-32 lg:flex justify-between gap-8">
            <div className="bg-[#0D0D0D0D] w-full flex justify-center items-center">
                <img src={book.image} alt="" />
            </div>
            <div>
                <h2 className="text-3xl font-bold my-3">{book.bookName}</h2>
                <p className="mb-3">By: {book.author}</p>
                <hr />
                <p className="my-3">{book.category}</p>
                <hr />
                <p className="my-3"><span className="font-bold">Review:</span>{book.review}</p>
                <p className="mb-3"><span className="font-bold" style={{ marginRight: '1em' }}>Tag</span>
                    {book.tags.map((tag, idx) => (
                        <span key={idx}>
                            #{tag}
                            {idx !== book.tags.length - 1 && <span style={{ marginRight: '1em' }}>&nbsp;</span>}
                        </span>
                    ))}
                </p>
                <hr />
                <p className="mt-3">Number of Pages:
                    <span className="font-bold"
                        style={{ marginLeft: '2em' }}>{book.totalPages}</span></p>
                <p className="mt-3">Publisher:
                    <span className="font-bold"
                        style={{ marginLeft: '2em' }}>{book.publisher}</span></p>
                <p className="mt-3">Year of Publishing:
                    <span className="font-bold"
                        style={{ marginLeft: '2em' }}>{book.yearOfPublishing}</span></p>
                <p className="mt-3">Rating:
                    <span className="font-bold"
                        style={{ marginLeft: '2em' }}>{book.rating}</span></p>
                <div className=" mt-3 flex gap-3">
                    <button className="btn border" onClick={() => handleAddToLocalStorage('read')}>Read</button>
                    <button className="btn bg-[#59C6D2] border" onClick={() => handleAddToLocalStorage('wishlist')}>Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;
