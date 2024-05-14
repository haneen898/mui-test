import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import  Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

function App() {
  return (
    <Container>
     <Box  sx = {{marginTop: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center' }}>
    
  <Avatar sx={{ bgcolor: deepPurple[500] }}>

  </Avatar>
    <Typography variant="h5" component="h2">
      Sign in
     </Typography>

  <Box>
     <TextField id="outlined-basic" label="Outlined" variant="outlined" required margin='normal' fullWidth />
     <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          required margin='normal' fullWidth />
         <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
         <Button variant="contained" fullWidth sx={{mt:3, mb:2 }}>Contained</Button>
         <Link href="#">Forget Password</Link>
     </Box>
     </Box>
 
   
  </Container>

  );
}

export default App;
