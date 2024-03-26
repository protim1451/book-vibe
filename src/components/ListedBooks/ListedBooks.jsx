import { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { RiPagesLine } from "react-icons/ri";

const ListedBooks = () => {
    const [selectedTab, setSelectedTab] = useState('read');
    const [sortOption, setSortOption] = useState('rating');

    // Function to fetch read and wishlist books data from local storage
    const getBooksFromLocalStorage = (listType) => {
        const storageKey = listType === 'read' ? 'readBooks' : 'wishlistBooks';
        return JSON.parse(localStorage.getItem(storageKey)) || [];
    };

    // Function to handle sorting option change
    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    // Function to render book list based on selected tab
    const renderBookList = () => {
        const books = getBooksFromLocalStorage(selectedTab);
        // Sort books based on selected sort option
        if (sortOption === 'rating') {
            books.sort((a, b) => b.rating - a.rating);
        } else if (sortOption === 'pages') {
            books.sort((a, b) => b.totalPages - a.totalPages);
        } else if (sortOption === 'year') {
            books.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }

        // Render book list items
        return books.map(book => (
            <div key={book.bookId} className=" p-4 book-item mt-6 border lg:flex gap-6">
                <div className="bg-[#0D0D0D0D] h-44 w-32 flex justify-center items-center">
                    <img src={book.image} alt="" />
                </div>
                <div className='p-3'>
                    <h3 className='font-bold my-3'>{book.bookName}</h3>
                    <p className='mb-3'>By: {book.author}</p>
                    <div className='flex gap-6'>
                        {book.tags.map((tag, idx) => (
                            <span className='text-green-400' key={idx}>
                                #{tag}
                                {idx !== book.tags.length - 1 && <span style={{ marginRight: '1em' }}>&nbsp;</span>}
                            </span>
                        ))}
                        <div className='flex justify-center items-center gap-1'>
                            <IoLocationOutline />
                            <p>Year of Publishing:{book.yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className='my-3 flex gap-4'>
                        <div className='flex justify-center items-center gap-1'>
                            <FaUsers />
                            <p>Publisher: {book.publisher}</p>
                        </div>
                        <div className='flex justify-center items-center gap-1'>
                            <RiPagesLine />
                            <p>Pages: {book.totalPages}</p>
                        </div>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="listed-books mx-4 lg:mx-32">
            <h2>Listed Books</h2>
            <div className="dropdown">
                <label htmlFor="sort">Sort By:</label>
                <select id="sort" value={sortOption} onChange={handleSortChange}>
                    <option value="rating">Rating</option>
                    <option value="pages">Number of Pages</option>
                    <option value="year">Published Year</option>
                </select>
            </div>
            <div className="tabs flex gap-4 mt-6 font-semibold">
                <button className={selectedTab === 'read' ? 'active' : ''}
                    style={{ backgroundColor: selectedTab === 'read' ? '#1313130D' : 'inherit' }}
                    onClick={() => setSelectedTab('read')}>
                    Read Books
                </button>
                <button className={selectedTab === 'wishlist' ? 'active' : ''}
                    style={{ backgroundColor: selectedTab === 'wishlist' ? '#1313130D' : 'inherit' }}
                    onClick={() => setSelectedTab('wishlist')}>
                    Wishlist Books
                </button>
            </div>
            <div className="book-list">
                {renderBookList()}
            </div>
        </div>
    );
};

export default ListedBooks;
