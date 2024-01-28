"use client";
import React from 'react';
import { Container, Typography } from '@mui/material';
import FooterArabic from '@/components/Arabic/Footer/Footer';
import Footer from '@/components/English/Footer/Footer';
import { useLanguage } from '@/context/LanguageContext'
import BottomBar from '@/components/English/bottombar/bottom';
import BottomBarAarabic from '@/components/Arabic/bottombar/bottom';

const PrivacyPolicy = () => {
  const { language } = useLanguage();
  const containerStyle = {
    color: 'grey',

    height:'90dvh',
    overflow:'auto',

  };

  const headingStyle = {
    color: 'black',
    marginBottom: '16px',
  };

  const listItemStyle = {
    marginBottom: '8px',
  };

  const linkStyle = {
    color: '#0066cc', 
    textDecoration: 'none',
  };

  return (
    <div  style={containerStyle}>
    <Container sx={{padding:"50px 10px"}}>
      <Typography variant="h4" style={headingStyle}>
        Privacy Policy
      </Typography>

      <Typography variant="body1">
        This Privacy Policy explains how Bull and bearz (we, us, or our)
        collects, uses, and protects your personal information when you use our website (the Site).
      </Typography>

      <Typography variant="h5" style={headingStyle}>
        1. Information We Collect
      </Typography>
      <Typography variant="body1">
        We may collect personal information, including but not limited to:
      </Typography>
        <ul style={listItemStyle}>
          <li>Name</li>
          <li>Email address</li>
          <li>Contact information</li>
          <li>Payment details (if applicable)</li>
        </ul>


      <Typography variant="h5" style={headingStyle}>
      2. How We Use Your Information
      </Typography>
      <Typography variant="body1">
      We may use the information we collect for various purposes, including:
      </Typography>
        <ul style={listItemStyle}>
           <li>Providing and maintaining the Site</li>
          <li>Responding to your inquiries or requests</li>
          <li>Providing you with information and updates</li>
          <li>Improving our services</li>
          <li>Conducting research and analysis</li>
        </ul>
    



      <Typography variant="h5" style={headingStyle}>
      3. Security of Your Information
      </Typography>
      <Typography variant="body1">
      We take reasonable measures to protect your personal information from
        unauthorized access, disclosure, alteration, and destruction. However,
        no method of transmission over the internet or electronic storage is
        completely secure, and we cannot guarantee absolute security.
      </Typography>



      <Typography variant="h5" style={headingStyle}>
      4. Cookies
      </Typography>
      <Typography variant="body1">
      The Site may use cookies to enhance your experience. You can choose to
        disable cookies in your browser settings, but this may affect the
        functionality of the Site.
      </Typography>
      
      <Typography variant="h5" style={headingStyle}>
      5. Third-Party Links
      </Typography>
      <Typography variant="body1">
      The Site may contain links to third-party websites. We are not
        responsible for the privacy practices or content of these websites. We
        encourage you to review the privacy policies of these third parties.
      </Typography>



      <Typography variant="h5" style={headingStyle}>
      6. Children&apos;s Privacy
      </Typography>
      <Typography variant="body1">
      The Site is not directed at individuals under the age of 13. We do not
        knowingly collect personal information from children. If you believe
        that we have inadvertently collected information from a child, please
        contact us, and we will take steps to delete the information.
      </Typography>



      <Typography variant="h5" style={headingStyle}>
        7. Changes to this Privacy Policy
      </Typography>
      <Typography variant="body1">
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the updated policy on this page. It is your responsibility to review this Privacy Policy periodically for changes.
      </Typography>

      <Typography variant="h5" style={headingStyle}>
        8. Contact Us
      </Typography>
      <Typography variant="body1">
        If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
        <a href="mailto:privacy@bullandbearz.com" style={linkStyle}>
          privacy@bullandbearz.com
        </a>.
      </Typography>

      <Typography variant="body2" color="textSecondary">
        Last Updated: 19-01-2024
      </Typography>
    </Container>
    {language === 'english' ? <Footer/> :  <FooterArabic/> }
    {language === 'english' ? <BottomBar/> :  <BottomBarAarabic/> }
    </div>
  );
};

export default PrivacyPolicy;
