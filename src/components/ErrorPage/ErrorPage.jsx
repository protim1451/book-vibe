import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="mt-16 flex flex-col justify-center items-center gap-6">
            <h1 className="text-red-600 text-6xl font-bold text-center">404 Not Found!</h1>
            <Link to="/"><button className="btn btn-primary bg-[#59C6D2]">Home</button></Link>
        </div>
    );
};

export default ErrorPage;