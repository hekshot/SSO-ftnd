import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Google as GoogleIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";
import config from "../Config/Config"

const Register = ({ handleCloseRegister, openLoginDialog }) => {

  const [userName, setUsername] = useState("");
  const [userPassword, setPassword] = useState("");
  const { apiBaseUrl} = config;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiBaseUrl}/v1/register`, {
        userName,
        userPassword,
      });
      setUsername("");
      setPassword("");
      console.log("Registration successful", response.data);
      handleCloseRegister();
      openLoginDialog(); // Open the login dialog
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  const handleGoogleSignIn = () => {
    // Add logic for Google sign-in
  };

  const handleGitHubSignIn = () => {
    // Add logic for GitHub sign-in
  };

  return (
    <form onSubmit={handleSubmit}>
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
      {/* Add more fields as needed for your registration form */}
      <div style={{ display: "grid" }}>
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
        <Button
          variant="contained"
          startIcon={<GoogleIcon />}
          onClick={handleGoogleSignIn}
          style={{ margin: "10px 0" }}
          href={`${apiBaseUrl}/oauth2/authorization/google`}
        >
          Continue with Google
        </Button>
        <Button
          variant="contained"
          startIcon={<GitHubIcon />}
          onClick={handleGitHubSignIn}
          style={{ margin: "10px 0" }}
          href={`${apiBaseUrl}/oauth2/authorization/github`}
        >
          Continue with GitHub
        </Button>
      </div>
    </form>
  );
};

export default Register;
