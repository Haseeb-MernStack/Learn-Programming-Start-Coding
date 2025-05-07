// components/ProtectedRoute.jsx
import { SignIn, useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-white">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="h-screen w-full items-center flex justify-center">
        <SignIn />
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
