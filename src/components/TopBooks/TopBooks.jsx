import { useLoaderData } from "react-router-dom";
import TopBook from "../TopBook/TopBook";

const TopBooks = () => {
    const books = useLoaderData();

    return (
        <div className="mt-5 lg:mt-12 mx-4 lg:mx-32">
            <h1 className="text-center text-5xl font-bold">Top Books</h1>
            <div className="grid lg:grid-cols-2 gap-6 mb-3">
                {
                    books.map((book,idx) => (
                        <TopBook key={idx} book={book}></TopBook>
                    ))
                }
            </div>
        </div>
    );
};

export default TopBooks;
