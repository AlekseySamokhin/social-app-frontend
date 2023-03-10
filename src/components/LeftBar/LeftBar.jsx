import './leftbar.scss';

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

const LeftBar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://64.media.tumblr.com/163cfedc157fa648c1aa5d826b0216b6/b70cfb1cda5450f2-d9/s1280x1920/104de63740b6ee7f5a87eb8c0720abd88d268cbe.jpg"
              alt="avatar user"
            />
            <span>John Doe</span>
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
