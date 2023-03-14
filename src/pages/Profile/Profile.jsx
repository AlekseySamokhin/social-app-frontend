import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Posts from '../../components/Posts';

import './profile.scss';

const ProfilePage = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://64.media.tumblr.com/cb39abc5d83deb63d402cab928dd715e/d8adb90fb16f1882-18/s1280x1920/7c25d264ddca1b727d3f7c69fe388fac4149035a.jpg"
          alt=""
          className="cover"
        />
        <img
          src="https://64.media.tumblr.com/5f38e40e9cefdae6d321de924c71a382/32d27c1f69a67b7c-f2/s1280x1920/016002296645c5c3fed757adabb46b1e5003117a.png"
          alt=""
          className="profilePicture"
        />
      </div>
      <div className="profileContainer">
        <div className="userInf">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>Aleksey Samokhin</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>

        <Posts />
      </div>
    </div>
  );
};

export default ProfilePage;
