import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SignUp = () => {
  const onSubmit = (data) => {
    // Handle form submission, 'data' contains the form values
    console.log(data);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '400px',
        margin: 'auto',
        padding: '20px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        marginTop: '50px',
        backgroundColor: 'white',
      }}
    >
      <div className='text-cyan-700'>
        <Typography variant="h4" gutterBottom>
        Registration Form
      </Typography>

      </div>
      
      <form onSubmit={onSubmit}>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          name="confirmPassword"
          label="confirm Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          name="firstName"
          label="First Name"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          name="lastName"
          label="Last Name"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          name="street"
          label="Street"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          name="city"
          label="City"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          name="state"
          label="State"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          name="postalcode"
          label="Postal Code"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>
    </Box>
  );
};

export default SignUp;
