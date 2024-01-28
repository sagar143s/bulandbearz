"use client";
import React, { useState } from 'react';
import { Container, Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '@/components/English/Footer/Footer';
import FooterArabic from '@/components/Arabic/Footer/Footer'
import { useLanguage } from '@/context/LanguageContext'
import BottomBar from '@/components/English/bottombar/bottom';
import BottomBarAarabic from '@/components/Arabic/bottombar/bottom';

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const { language } = useLanguage();
  const containerStyle = {
    
    height:'90dvh',
    overflowY: 'auto'
  };

  const accordionStyle = {
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const summaryStyle = {
    backgroundColor: '#9ba2c7',
    borderBottom: '1px solid #ccc',
    borderRadius: '8px 8px 0 0',
  };

  const questionStyle = {
    fontWeight: 'bold',
    color: '#333',
  };

  const answerStyle = {
    color: '#555',
  };

  return (
    < div  style={containerStyle}>
    <Container maxWidth="md" sx={{padding:"50px 0"}}>
      <h1 style={{padding:"50px 0"}}>Frequently Asked Questions</h1>

      <Accordion style={accordionStyle}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}>
        <AccordionSummary style={summaryStyle} expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography style={questionStyle}>Question 1: What services do you offer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={answerStyle}>
            Answer 1: Bull and bearz provides financial consultancy services,
            including market analysis, investment advice, and portfolio management.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={accordionStyle}
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}>
        <AccordionSummary style={summaryStyle} expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography style={questionStyle}>Question 2: How can I contact customer support?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={answerStyle}>
            Answer 2: You can contact our customer support team by emailing
            <a href="mailto:support@bullandbearz.com"> support@bullandbearz.com</a>.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={accordionStyle}
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}>
        <AccordionSummary style={summaryStyle} expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
          <Typography style={questionStyle}>Question 3: Is my financial information secure?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={answerStyle}>
            Answer 3: We take the security of your financial information seriously.
            We use industry-standard encryption and security measures to protect your data.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={accordionStyle}
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}>
  <AccordionSummary style={summaryStyle} expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
    <Typography style={questionStyle}>Question 4: How do I open an account with Bull and Bearz?</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography style={answerStyle}>
      Answer 4: Opening an account with Bull and Bearz is easy. Visit our website and click on the &apos;Sign Up&apos; or &apos;Open Account&apos; button. Follow the on-screen instructions to complete the registration process.
    </Typography>
  </AccordionDetails>
</Accordion>

<Accordion style={accordionStyle}
  expanded={expanded === 'panel5'}
  onChange={handleChange('panel5')}>
  <AccordionSummary style={summaryStyle} expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content" id="panel5a-header">
    <Typography style={questionStyle}>Question 5: Can I trade on mobile devices?</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography style={answerStyle}>
      Answer 5: Yes, you can trade on the go using our mobile trading platform. Download our mobile app from the App Store or Google Play, log in with your account credentials, and start trading from your mobile device.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion style={accordionStyle}
  expanded={expanded === 'panel6'}
  onChange={handleChange('panel6')}>
  <AccordionSummary style={summaryStyle} expandIcon={<ExpandMoreIcon />} aria-controls="panel6a-content" id="panel6a-header">
    <Typography style={questionStyle}>Question 6: What types of investments do you recommend?</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography style={answerStyle}>
      Answer 6: Our financial experts recommend a diversified portfolio that may include stocks, bonds, mutual funds, and other investment instruments. The recommended mix depends on your financial goals, risk tolerance, and investment horizon.
    </Typography>
  </AccordionDetails>
</Accordion>

<Accordion style={accordionStyle}
  expanded={expanded === 'panel7'}
  onChange={handleChange('panel7')}>
  <AccordionSummary style={summaryStyle} expandIcon={<ExpandMoreIcon />} aria-controls="panel7a-content" id="panel7a-header">
    <Typography style={questionStyle}>Question 7: How often do you provide market updates?</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography style={answerStyle}>
      Answer 7: We provide regular market updates through our newsletters, website, and other communication channels. The frequency of updates may vary based on market conditions and significant events. Stay tuned to stay informed about the latest market trends.
    </Typography>
  </AccordionDetails>
</Accordion>


    </Container>
     {language === 'english' ? <Footer/> :  <FooterArabic/> }
     {language === 'english' ? <BottomBar/> :  <BottomBarAarabic/> }
</div> 
  );
};

export default FAQ;
