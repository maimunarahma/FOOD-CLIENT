import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const Private = ({ children }) => {
    const { user,loading } = useContext(AuthContext);
    const location = useLocation();

    if (user && user.email) {
        return children;
    }

    if (loading) {
        return <div className="flex justify-center items-center"><span className="loading loading-spinner loading-lg text-info min-h-screen"></span></div>;
    }

    return (
        <div>
            return <Navigate state={location.pathname} to='/login'></Navigate>
        </div>
    );
};

export default Private;