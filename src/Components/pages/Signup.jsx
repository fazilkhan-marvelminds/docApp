import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Signup() {
    const [name,setName] = useState("")
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [contact,setContact] = useState("")
    const [gender,setGender] = useState("")
    const [type,setType] = useState("")
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <img style={{width:"100%",height:"100%"}} src='https://wallpapercave.com/wp/wp2386745.jpg' />
        </Grid>
        <Grid item xs={4}>
          <h1 style={{marginLeft:"160px"}}>
            SIGNUP
          </h1>
        <TextField  style={{display:"block",marginTop:"50px",}}
         required
         fullWidth
         id="outlined-required"
         label="NAME"
         value={name}
         onChange={()=>{setName(event.target.value)}}
        />
         <TextField style={{display:"block",marginTop:"20px",marginBottom:"20px"}}
          required
          fullWidth
          id="outlined-disabled"
          label="username"
          value={username}
          onChange={()=>{setUsername(event.target.value)}}
        />
        <TextField style={{display:"block",marginTop:"20px",marginBottom:"20px"}}
          required
          fullWidth
          id="outlined-disabled"
          label="Email"
          value={email}
          onChange={()=>{setEmail(event.target.value)}}
        />
        <TextField style={{display:"block",marginTop:"20px",marginBottom:"20px"}}
        fullWidth
          required
          id="outlined-disabled"
          label="password"
          type='password'
          value={password}
          onChange={()=>{setPassword(event.target.value)}}
        />
         <TextField style={{display:"block",marginTop:"20px",marginBottom:"20px"}}
         fullWidth
         required
          id="outlined-disabled"
          label="contact"
          value={contact}
          onChange={()=>{setContact(event.target.value)}}
        />
             <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          label="Gender"
        >
          <MenuItem value={10}>MALE</MenuItem>
          <MenuItem value={20}>FEMALE</MenuItem>
          <MenuItem value={30}>PREFER NOT TO SAY</MenuItem>
          onChange={()=>{setGender(event.target.value)}}
        </Select>
      </FormControl>
      <FormControl style={{marginTop:"20px"}} fullWidth>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Type"
        >
          <MenuItem value={10}>Patient</MenuItem>
          <MenuItem value={20}>Doctor</MenuItem>
          <MenuItem value={30}>Sweeper</MenuItem>
          onChange={()=>{setType(event.target.value)}}
        </Select>
      </FormControl>
      <Stack sx={{marginTop:"20px",width:"100%"}}>
      <Button variant="contained">Sign Up</Button>
      </Stack>
        <div style={{marginLeft:"150px",marginTop:"30px"}}>
          Already have an account
          <a href="/nameofpage"> LogIn </a>
        </div>
        </Grid>
      </Grid>
    </Box>
  );
}