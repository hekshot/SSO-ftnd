import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Google as GoogleIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";
import { NavLink, NavLink as ReactLink } from "react-router-dom";

const Login = ({ handleClose }) => {
  const handleSubmit = (e) => {
    // Handle registration logic here
    e.preventDefault();
    // Add your registration logic or API call
    // After successful registration, you can close the modal
    handleClose();
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
      />
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      {/* Add more fields as needed for your registration form */}
      <div style={{ display: "grid" }}>
        <Button type="submit" variant="contained" color="primary">
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
        >
          Continue with GitHub
        </Button>
      </div>
      <p className="mt-3 text-center" >
        Don't have an account?{" "}
        <NavLink tag={ReactLink} to="/register" style={{color:'cyan'}}>
          Register
        </NavLink>
      </p>
    </form>
  );
};

export default Login;
