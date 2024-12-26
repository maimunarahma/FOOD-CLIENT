import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          Oops! Page not found
        </h2>
        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for doesnt exist or has been moved.
        </p>
        <Link to='/' className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;