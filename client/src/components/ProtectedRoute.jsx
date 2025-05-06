// components/ProtectedRoute.jsx
import { SignIn, useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <h1 className="font-bold text-4xl ">Loading...</h1>
      </div>
    ); // or a spinner
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
