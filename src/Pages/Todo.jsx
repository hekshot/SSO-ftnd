import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function Todo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8081/v1/user", {
          withCredentials: true,
        });

        if (isMounted) {
          setIsLoggedIn(true);
          console.log(response);
          setUsername(response.data.userName);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);

        if (location.state && location.state.userName && isMounted) {
          setIsLoggedIn(true);
          setUsername(location.state.userName);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [location.state]);

  const handleLogout = () => {
    
    axios
      .get("http://localhost:8081/v1/logout", { withCredentials: true })
      .then(() => {
        setIsLoggedIn(false);
        setUsername("");
        navigate("/", { state: {} });  
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
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <p>You are not logged in</p>
      )}
    </div>
  );
}
