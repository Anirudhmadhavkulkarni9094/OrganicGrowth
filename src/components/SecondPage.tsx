import { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Paper } from '@mui/material';
import { Post } from '../model/Models' // Import the Post interface from the models file
import '../assets/Content.css'

function SecondPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      setAuth(false);
      return; // Exit early if not logged in
    } else {
      setAuth(true);
    }

    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'title', headerName: 'Title', flex: 3 },
    { field: 'body', headerName: 'Body', flex: 5 },
  ];

  return (
    <div className='Content-2'>
      {auth ? (
        <Paper style={{  }}>
          <DataGrid rows={posts} columns={columns} />
        </Paper>
      ) : (
        <h1 className='error'>Login inorder to view the data</h1>
      )}
    </div>
  );
}

export default SecondPage;
