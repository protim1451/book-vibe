import TopBooks from "../TopBooks/TopBooks";
const TopBook = ({book}) => {
    const {bookTitle, author, authorSummary, bookSummary, category, 
        yearOfPublishing} = book;
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title"> <span className="font-bold">Book Name:</span> {bookTitle}({category})</h2>
                    <p><span className="font-bold">Publishing year: </span>{yearOfPublishing}</p>
                    <p><span className="font-bold">Author name: </span>{author}</p>
                    <p>{authorSummary}</p>
                    <p><span className="font-bold">Book Summary:</span> {bookSummary}</p>
                </div>
            </div>
        </div>
    );
};

export default TopBook;