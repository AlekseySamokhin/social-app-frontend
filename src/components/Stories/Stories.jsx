import { useContext } from 'react';

import { AuthContext } from '../../context/authContext';

import './stories.scss';

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  const stories = [
    {
      id: 1,
      name: 'Jonh Doe',
      img: 'https://64.media.tumblr.com/163cfedc157fa648c1aa5d826b0216b6/b70cfb1cda5450f2-d9/s1280x1920/104de63740b6ee7f5a87eb8c0720abd88d268cbe.jpg',
    },
    {
      id: 2,
      name: 'Jonh Doe',
      img: 'https://64.media.tumblr.com/163cfedc157fa648c1aa5d826b0216b6/b70cfb1cda5450f2-d9/s1280x1920/104de63740b6ee7f5a87eb8c0720abd88d268cbe.jpg',
    },
    {
      id: 3,
      name: 'Jonh Doe',
      img: 'https://64.media.tumblr.com/163cfedc157fa648c1aa5d826b0216b6/b70cfb1cda5450f2-d9/s1280x1920/104de63740b6ee7f5a87eb8c0720abd88d268cbe.jpg',
    },
    {
      id: 4,
      name: 'Jonh Doe',
      img: 'https://64.media.tumblr.com/163cfedc157fa648c1aa5d826b0216b6/b70cfb1cda5450f2-d9/s1280x1920/104de63740b6ee7f5a87eb8c0720abd88d268cbe.jpg',
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePicture} alt={`story ${currentUser.name}`} />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((s) => (
        <div className="story" key={s.id}>
          <img src={s.img} alt={`story ${s.name}`} />
          <span>{s.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
