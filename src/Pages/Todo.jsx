import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Todo() {

  //const [userId, setId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  //const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    
    axios
      .get("http://localhost:8081/api/user", { withCredentials: true })
      .then((response) => {
        //setId(response.data.userId);
        setIsLoggedIn(true);
        console.log(response);
        setUsername(response.data.userName);
        //setUserId(response.data.userId);
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

//   const addExampleTodo = () => {
//     const userid = userId; 
//     const todoList = {
//       tasks: ["Task 1", "Task 2", "Task 3"],
//     };
  
//     addTodo(userid, todoList);
//   };

//   const addTodo = ( userid, todoList) => {
//     axios.post(`http://localhost:8081/api/${userid}/todos`, todoList, {
//       withCredentials: true,
//     })
//       .then(() => {
//         // Handle success, update UI, etc.
//       })
//       .catch((error) => {
//         console.error("Error adding todo:", error);
//       });
//   };

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
