"use client";
import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const SocialMediaSidebar = () => {
  const [leftPosition, setLeftPosition] = useState('2.5%');

  useEffect(() => {
    const handleResize = () => {
      const newLeftPosition = window.innerWidth > 550 ? '2.5%' : '0';
      setLeftPosition(newLeftPosition);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ ...sidebarStyle, left: leftPosition }}>
      <a href="https://facebook.com" style={iconStyle}><FaFacebook /></a>
      <a href="https://twitter.com" style={iconStyle}><FaTwitter /></a>
      <a href="https://instagram.com" style={iconStyle}><FaInstagram /></a>
      <a href="mailto:your.email@example.com" style={iconStyle}><FaEnvelope /></a>
    </div>
  );
};

const sidebarStyle = {
  position: 'fixed',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundImage: 'linear-gradient(to right, #525252, #3d72b4)',
  padding: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  borderRadius: '5px',
  zIndex: 1000,
};

const iconStyle = {
  margin: '10px',
  color: '#fff',
  textDecoration: 'none',
  fontSize: '24px',
  transition: 'transform 0.2s ease-in-out',
  padding:'10px',

  ':hover': {
    transform: 'scale(1.2)',
  },
};

export default SocialMediaSidebar;
