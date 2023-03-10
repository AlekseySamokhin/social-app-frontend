import { useState, useEffect, createContext } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  const login = () => {
    setCurrentUser({
      id: 1,
      name: 'Alexey Samokhin',
      profilePicture:
        'https://64.media.tumblr.com/163cfedc157fa648c1aa5d826b0216b6/b70cfb1cda5450f2-d9/s1280x1920/104de63740b6ee7f5a87eb8c0720abd88d268cbe.jpg',
    });
  };

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
