"use client";
import React, { useState, useEffect } from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram, FaEnvelope, FaTelegram} from 'react-icons/fa';

const SocialMediaSidebar = () => {
  const [leftPosition, setLeftPosition] = useState('2.5%');

  const phoneNumber = '+971504664433';

const whatsappLink = `https://wa.me/${phoneNumber}`;

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
      <a href="https://t.me/BullandBearzWelcome" target='blank' style={iconStyle}><FaTelegram /></a>
      <a href="https://instagram.com" style={iconStyle}><FaInstagram /></a>
      <a href="mailto:your.email@example.com" style={iconStyle}><FaEnvelope /></a>
      <a href={whatsappLink} style={iconStyle}><FaWhatsapp /></a>
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
