import { useState } from 'react';

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
            <div key={book.bookId} className="book-item">
                <p>{book.bookId}</p>
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
