import React, { useState, useEffect } from 'react';
import './Footer.css';
import icon from '../../assets/icons/icon.jpeg';
import logo from '../../assets/logo.jpeg';

const Footer = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // Load like state and count from localStorage
  useEffect(() => {
    const storedLikes = localStorage.getItem('likeCount');
    const storedLiked = localStorage.getItem('hasLiked');

    if (storedLikes) {
      setLikeCount(parseInt(storedLikes, 10));
    }

    if (storedLiked === 'true') {
      setLiked(true);
    }
  }, []);

  const toggleLike = () => {
    if (!liked) {
      const newLikeCount = likeCount + 1;
      setLikeCount(newLikeCount);
      setLiked(true);

      // Save to localStorage
      localStorage.setItem('likeCount', newLikeCount);
      localStorage.setItem('hasLiked', 'true');
    }
  };

  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="logo" className='logo' />
          <p>Thanks for scrolling this far!</p>
          <p>Always learning, always building.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-like">
            <p>Mind giving a like?</p>
            <div className="like-box">
              <span
                className={`heart-icon ${liked ? 'liked' : ''}`}
                onClick={toggleLike}
              >
                {liked ? '❤️' : '🤍'}
              </span>
              <span className="like-count">{likeCount}</span>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className='footer-bottom-left'>
          Ⓒ {new Date().getFullYear()} Akshay. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
