import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Todo() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    
    axios
      .get("http://localhost:8081/api/user", { withCredentials: true })
      .then((response) => {
        
        setIsLoggedIn(true);
        console.log(response);
        setUsername(response.data.userName);
        
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []); // Empty dependency array to run only once after the initial render



  const handleLogout = () => {
    // Implement logout logic, clear session, etc.
    // For example, you can call a logout API
    axios.get("http://localhost:8081/api/logout", { withCredentials: true })
      .then(() => {
        setIsLoggedIn(false);
        navigate("/");
        // Additional logic if needed
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };


  return (
    <div className="todo-list-container">
      {isLoggedIn ? (
        <div className="user-info">
          <h1>You are now logged in</h1>
          <p>Welcome, {username}!</p>
          {/* <button onClick={addExampleTodo}>addTodo</button> */}
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <p>You are not logged in</p>
      )}
    </div>
  );
}
