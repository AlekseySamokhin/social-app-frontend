import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

import './comment.scss';

const Comments = () => {
  const { currentUser } = useContext(AuthContext);

  const comments = [
    {
      id: 1,
      name: 'Jonh Doe',
      userId: 2,
      desc: 'jdgjlasjdglasd asdhadsjldashdash dashklasdhkadhsdhas ashda;ls;ladshkldasl;dhlas',
      profilePicture:
        'https://64.media.tumblr.com/163cfedc157fa648c1aa5d826b0216b6/b70cfb1cda5450f2-d9/s1280x1920/104de63740b6ee7f5a87eb8c0720abd88d268cbe.jpg',
    },
    {
      id: 2,
      name: 'Jonh Doe',
      userId: 3,
      desc: 'jdgjlasjdglasd asdhadsjldashdash dashklasdhkadhsdhas ashda;ls;ladshkldasl;dhlas',
      profilePicture:
        'https://64.media.tumblr.com/163cfedc157fa648c1aa5d826b0216b6/b70cfb1cda5450f2-d9/s1280x1920/104de63740b6ee7f5a87eb8c0720abd88d268cbe.jpg',
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePicture} alt="" />
        <input type="text" placeholder="Write a comment..." />
        <button>Add comment</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
