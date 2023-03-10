import Post from './component/Post';
import './posts.scss';

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: 'Jonh Doe',
      userId: 2,
      desc: 'jdgjlasjdglasd asdhadsjldashdash dashklasdhkadhsdhas ashda;ls;ladshkldasl;dhlas',
      img: 'https://64.media.tumblr.com/163cfedc157fa648c1aa5d826b0216b6/b70cfb1cda5450f2-d9/s1280x1920/104de63740b6ee7f5a87eb8c0720abd88d268cbe.jpg',
    },
    {
      id: 2,
      name: 'Jonh Doe',
      userId: 3,
      desc: 'jdgjlasjdglasd asdhadsjldashdash dashklasdhkadhsdhas ashda;ls;ladshkldasl;dhlas',
      img: 'https://64.media.tumblr.com/163cfedc157fa648c1aa5d826b0216b6/b70cfb1cda5450f2-d9/s1280x1920/104de63740b6ee7f5a87eb8c0720abd88d268cbe.jpg',
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
