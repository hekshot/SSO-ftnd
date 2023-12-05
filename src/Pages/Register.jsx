
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Register = ({ handleClose }) => {
  const handleSubmit = (e) => {
    // Handle registration logic here
    e.preventDefault();
    // Add your registration logic or API call
    // After successful registration, you can close the modal
    handleClose();
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
      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </form>
  );
};

export default Register;
