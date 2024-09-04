"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Visa from '../../../../public/cards/visa.svg';
import Matercard from '../../../../public/cards/master.svg';
import American from '../../../../public/cards/american.svg';
import Apple from '../../../../public/cards/apple.svg';

const BottomBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 600);
      setIsTablet(width <= 960);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ background: '#2B304E', height: 'auto', padding: '12px 10px' }}>
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row', 
          justifyContent: isMobile ? 'center' : 'space-between', 
          alignItems: isMobile ? 'center' : 'center', 
          maxWidth: '1500px', 
          margin: '0 auto',
          textAlign: isMobile ? 'center' : 'left' 
        }}
      >
        <div style={{ color: 'white' }}> ©{new Date().getFullYear()} Bull And Bearz</div>

        <div style={{ color: 'white', marginTop: isMobile ? '10px' : '0' }}>
           Development by&nbsp;
          <a 
            href='https://www.nexura.ae' 
            target='_blank' 
            style={{ color: 'white', marginLeft: isMobile ? '0' : '1px', textDecoration: 'none', display: isMobile ? 'block' : 'inline' }}
            onMouseEnter={(e) => e.target.style.color = '#fff'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
          >
             Nexura IT Technologies
          </a>
        </div>

        {!isTablet && (
          <div style={{ display: 'flex', alignItems: 'center', marginTop: isMobile ? '10px' : '0' }}>
            <Image src={Visa} alt="visa" style={{ maxWidth: '50px', height: 'auto', maxHeight: '15px' }} />
            <Image src={Matercard} alt="master" style={{ maxWidth: '50px', height: 'auto', maxHeight: '15px', marginLeft: '8px' }} />
            <Image src={American} alt="american" style={{ maxWidth: '50px', height: 'auto', maxHeight: '15px', marginLeft: '8px' }} />
            <Image src={Apple} alt="apple" style={{ maxWidth: '50px', height: 'auto', maxHeight: '15px', marginLeft: '8px' }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default BottomBar;
