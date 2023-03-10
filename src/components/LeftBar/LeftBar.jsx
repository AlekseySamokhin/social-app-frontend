import { useContext } from 'react';

import { AuthContext } from '../../context/authContext';

import Friends from '../../assets/friends.png';
import Groups from '../../assets/groups.png';
import Market from '../../assets/market.png';
import Watch from '../../assets/watch.png';
import Memories from '../../assets/memories.png';
import Events from '../../assets/events.png';
import Gaming from '../../assets/gaming.png';
import Gallery from '../../assets/gallery.png';
import Videos from '../../assets/videos.png';
import Messages from '../../assets/messages.png';
import Tutorials from '../../assets/tutorials.png';
import Courses from '../../assets/courses.png';
import Fund from '../../assets/fund.png';

import './leftbar.scss';

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePicture} alt="avatar user" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="Friends" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="Groups" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="Market" />
            <span>Market</span>
          </div>
          <div className="item">
            <img src={Watch} alt="Watch" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="Memories" />
            <span>Memories</span>
          </div>
          <hr />
        </div>
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="Events" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="Gaming" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="Gallery" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="Videos" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="Messages" />
            <span>Messages</span>
          </div>
          <hr />
        </div>
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fund} alt="Fund" />
            <span>Fund</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="Tutorials" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="Courses" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
