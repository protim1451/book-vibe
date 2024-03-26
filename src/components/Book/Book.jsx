import { MdStarRate } from "react-icons/md";
import { Link } from "react-router-dom";

const Book = ({ book }) => {

    const { bookName, author, image, rating,
        category, tags, bookId } = book;

    return (
        <div className="mt-6">
            <Link to={`/book/${bookId}`} className="no-underline">
                <div className="card bg-base-100 shadow-xl p-6">
                    <div className="bg-[#1313130D] flex justify-center items-center">
                        <figure className="h-60 w-44">
                            <img src={image} alt={bookName} className="rounded-xl" />
                        </figure>
                    </div>
                    <div className="card-body">
                        <p className="text-[#17BE0A]">
                            <small>
                                {tags.map((tag, idx) => (
                                    <span key={idx}>
                                        {tag}
                                        {idx !== tags.length - 1 && <span style={{ marginRight: '1em' }}>&nbsp;</span>}
                                    </span>
                                ))}
                            </small>
                        </p>
                        <h4 className="mt-3 font-bold text-[1.2rem]">{bookName}</h4>
                        <p className="mt-2 mb-3">By: {author}</p>
                        <hr />
                        <div className="mt-2 flex">
                            <p><small>{category}</small></p>
                            <div className="flex gap-1 items-center">
                                <p><small>{rating}</small></p>
                                <MdStarRate />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;