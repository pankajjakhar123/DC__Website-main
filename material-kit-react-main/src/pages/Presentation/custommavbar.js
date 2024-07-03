import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import { Link } from 'react-router-dom';

function CustomNavbar() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'none', boxShadow: 'none' }}>
      <Toolbar>
      <p style={{color : "white"}}> UbiSys</p>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
         
        </Typography>
        <div>
          <Button component={Link} to="/" color="white" startIcon={<HomeIcon />}>
            Home
          </Button>
          <Button component={Link} to="/courses" color="inherit" startIcon={<SchoolIcon />}>
            Courses
          </Button>
          <Button component={Link} to="/news" color="inherit" startIcon={<AnnouncementIcon />}>
            News
          </Button>
          <Button component={Link} to="/team" color="inherit" startIcon={<PeopleIcon />}>
            Team
          </Button>
          <Button component={Link} to="/paper" color="inherit" startIcon={<ArticleIcon />}>
            Paper
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default CustomNavbar;
