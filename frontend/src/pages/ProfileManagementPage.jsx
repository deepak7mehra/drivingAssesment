import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const ProfileManagementPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
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
      <Typography variant="h4" gutterBottom>
        Profile Management
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Profile Photo Upload */}
        <TextField
          type="file"
          name="profilePhoto"
          label="Upload Profile Photo"
          variant="outlined"
          margin="normal"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />

        {/* Identification Proof Upload */}
        <TextField
          type="file"
          name="identificationProof"
          label="Upload Identification Proof"
          variant="outlined"
          margin="normal"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />

        {/* Photograph Upload */}
        <TextField
          type="file"
          name="photograph"
          label="Upload Photograph"
          variant="outlined"
          margin="normal"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<CloudUploadIcon />}
          fullWidth
        >
          Upload
        </Button>
      </form>
    </Box>
  );
};

export default ProfileManagementPage;
