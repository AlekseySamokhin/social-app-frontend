import Stories from '../../components/Stories';
import Posts from '../../components/Posts';

import './home.scss';

const HomePage = () => {
  return (
    <div className="home">
      <Stories />
      <Posts />
    </div>
  );
};

export default HomePage;
