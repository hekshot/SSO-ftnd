import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import config from "../Config/Config"

export default function Todo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { apiBaseUrl} = config;

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const storedUserData = localStorage.getItem('userData');

        if (storedUserData) {
          const userData = JSON.parse(storedUserData);
          if (isMounted) {
            setIsLoggedIn(true);
            setUsername(userData.userName);
          }
        } else {
          // If userData is not in localStorage, make an API call
          const response = await axios.get(`${apiBaseUrl}v1/user`, {
            withCredentials: true,
          });

          if (isMounted) {
            setIsLoggedIn(true);
            console.log(response);
            setUsername(response.data.userName);
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [apiBaseUrl]);

  const handleLogout = () => {
    axios
      .get(`${apiBaseUrl}v1/logout`, { withCredentials: true })
      .then(() => {
        
        localStorage.removeItem('userData');
  
        setIsLoggedIn(false);
        setUsername('');
  
        navigate('/');
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
