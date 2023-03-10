import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DarkModeContext } from '../../context/darkModeContext';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import './navbar.scss';

const NavBar = () => {
  const { toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span>SocialApp</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon onClick={toggleDarkMode} />
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
          <img
            src="https://64.media.tumblr.com/163cfedc157fa648c1aa5d826b0216b6/b70cfb1cda5450f2-d9/s1280x1920/104de63740b6ee7f5a87eb8c0720abd88d268cbe.jpg"
            alt="avatar user"
          />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
