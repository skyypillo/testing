import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext.jsx";
import axios from "axios";

function Home() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:5050/api/logout", {
        withCredentials: true,
      });
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      {isAuthenticated ? (
        <>
          <Link to="/protected">Protected Page</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}

export default Home;
