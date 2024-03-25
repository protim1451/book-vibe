

const Banner = () => {
    return (
        <div className="bg-[#1313130D] rounded-lg mx-4 lg:mx-32 flex justify-around items-center">
            <div className="p-6 lg:p-28">
                <h1 className="text-[3.2rem] font-bold">Books to freshen up your bookshelf</h1>
                <button className="btn text-white bg-[#17BE0A] font-bold mt-4">View The List</button>
            </div>
            <dir>
                <img className="h-96 pr-6 lg:pr-12" src="https://i.ibb.co/6n7p8xS/main-book.jpg" alt="" />
            </dir>
        </div>
    );
};

export default Banner;