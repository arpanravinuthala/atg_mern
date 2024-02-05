import React from 'react';
import './Banner.css';
import banner from 'A:/atg_mern/src/images/banner.png';

function Banner() {
  const textStyle = {
    fontFamily: 'IBM Plex Sans',
    color: 'white',
    lineHeight: '46.8px',
  };

  return (
    <div className="text-over-img">
      <img src={banner} alt="" className="banner-image" />
      <strong style={{ display: 'block' }}>
        <div
          className="department"
          style={{ fontSize: '3rem', ...textStyle }}
        >
          Computer Engineering
        </div>
      </strong>
      <div className="department1" style={{ fontSize: '1rem', ...textStyle }}>
        142,765 Computer Engineers follow this
      </div>
      <button className="department3 btn" style={{ backgroundColor: 'transparent' }}>
        Join Group
      </button>
    </div>
  );
}

export default Banner;
