import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

export const RequireAuth = ({ children }) => {
    const { user } = useContext(UserContext);

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};