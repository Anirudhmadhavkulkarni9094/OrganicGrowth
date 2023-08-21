type Props = {}
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';

function Home({}: Props) {
  const signout = () =>{
      localStorage.setItem('isLoggedIn', "false");
      window.location.href = '/';
  }
  const [auth , setAuth] = useState(false);


  useEffect(()=>{

    if(localStorage.getItem('isLoggedIn') == "true"){
      setAuth(true);
    }  
  },[auth])

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" href='/'>Home</Button>
        
        {auth && <Button color="inherit" onClick={signout}>Signout</Button>}
      </Toolbar>
    </AppBar>
  )
}

export default Home