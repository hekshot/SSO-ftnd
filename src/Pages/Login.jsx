import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Google as GoogleIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";

const Login = () => {

  const [userName, setUsername] = useState("");
  const [userPassword, setPassword] = useState("");
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/v1/login", {
        userName,
        userPassword,
      });
      const { userName: loggedInUserName } = response.data;
      setUsername("");
      setPassword("");
      console.log("Login successful", response.data);
      navigate("/todos", { state: { userName: loggedInUserName } });
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleGoogleSignIn = () => {
    // Add logic for Google sign-in
  };

  const handleGitHubSignIn = () => {
    // Add logic for GitHub sign-in
  };

  return (
    <form>
      <TextField
        label="Username"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        onChange={(e)=>setUsername(e.target.value)}
      />
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        onChange={(e)=>setPassword(e.target.value)}
      />
      <div style={{ display: "grid" }}>
        <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
          Login
        </Button>
        <Button
          variant="contained"
          startIcon={<GoogleIcon />}
          onClick={handleGoogleSignIn}
          style={{ margin: "10px 0" }}
          href="http://localhost:8081/oauth2/authorization/google"
        >
          Continue with Google
        </Button>
        <Button
          variant="contained"
          startIcon={<GitHubIcon />}
          onClick={handleGitHubSignIn}
          style={{ margin: "10px 0" }}
          href="http://localhost:8081/oauth2/authorization/github"
        >
          Continue with GitHub
        </Button>
      </div>
    </form>
  );
};

export default Login;
