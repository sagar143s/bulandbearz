"use client";
import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import FooterArabic from '@/components/Arabic/Footer/Footer';
import Footer from '@/components/English/Footer/Footer';
import { useLanguage } from '@/context/LanguageContext'
import BottomBar from '@/components/English/bottombar/bottom';
import BottomBarAarabic from '@/components/Arabic/bottombar/bottom';

const TermsAndConditions = () => {

  const { language } = useLanguage();
  const containerStyle = {
    color: 'grey',
    height: '90vh',
    overflowY: 'auto',
  };

  const headingStyle = {
    color: 'black',
    marginBottom: '16px',
  };

  const listItemStyle = {
    marginBottom: '8px',
  };

  const accordionStyle = {
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };
    return (
      <div style={containerStyle}>
    <Container sx={{padding:"50px 10px"}}>
          <Typography variant="h4" style={headingStyle}>
            Terms and Conditions
          </Typography>
          <Typography variant="body1">
            Welcome to Bull and Bearz, a financial consultancy website (the Site).
            By accessing or using the Site, you agree to comply with and be bound
            by the following terms and conditions (the Terms). If you do not agree
            to these Terms, please do not use the Site.
          </Typography>
  
          <Typography variant="h6" style={headingStyle}>
            1. Acceptance of Terms
          </Typography>
          <Typography variant="body1">
            By using the Site, you agree to be bound by these Terms, which may be
            updated by us from time to time without notice. It is your
            responsibility to review these Terms periodically for changes. Your
            continued use of the Site after any modifications indicates your
            acceptance of the updated Terms.
          </Typography>
  
          <Typography variant="h6" style={headingStyle}>
            2. User Conduct
          </Typography>
          <Typography variant="body1">
            You agree to use the Site for lawful purposes and in a way that does not
            infringe on the rights of, restrict, or inhibit anyone else&apos;s use and
            enjoyment of the Site. Prohibited behavior includes, but is not limited
            to:
          </Typography>
          <List style={listItemStyle}>
            <ListItem>
              <ListItemText>Unauthorized access to or use of the Site;</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Any action that could disable, overburden, or impair the Site;</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Interference with any other party&apos;s use of the Site;</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Use of the Site for any purpose that is illegal or prohibited by
                these Terms.
              </ListItemText>
            </ListItem>
          </List>



          <Typography variant="h6" style={headingStyle}>
          3. Financial Consultancy Disclaimer
          </Typography>
          <Typography variant="body1">
          The information and advice provided on the Site are for general
        informational purposes only and should not be considered as financial
        advice or a substitute for professional consultation. Bullandbearz.com
        makes no representations or warranties of any kind, express or implied,
        regarding the accuracy, adequacy, validity, reliability, availability,
        or completeness of any information on the Site.
          </Typography>


          <Typography variant="h6" style={headingStyle}>
          4. Investment Risks
          </Typography>
          <Typography variant="body1">
          Investing in financial markets involves risks, and past performance is
        not indicative of future results. Users are solely responsible for
        evaluating the risks associated with their investment decisions and
        should seek professional advice before making any financial
        commitments.
          </Typography>



          <Typography variant="h6" style={headingStyle}>
          5. Confidentiality
          </Typography>
          <Typography variant="body1">
          Any communication or information exchanged with Bull and bearz, whether
        through the Site or other means, is treated with the utmost
        confidentiality. However, Bull and bearz reserves the right to
        disclose information if required by law.
          </Typography>


          <Typography variant="h6" style={headingStyle}>
          6. Limitation of Liability
          </Typography>
          <Typography variant="body1">
          In no event shall Bullandbearz.com or its affiliates be liable for any
        direct, indirect, incidental, consequential, or punitive damages arising
        out of your use or inability to use the Site.
          </Typography>


          <Typography variant="h6" style={headingStyle}>
          7. Governing Law
          </Typography>
          <Typography variant="body1">
          These Terms shall be governed and construed in accordance with the laws
        of [Your Jurisdiction], without regard to its conflict of law
        provisions.
          </Typography>



        




        </Container>

        {language === 'english' ? <Footer/> :  <FooterArabic/> }
         {language === 'english' ? <BottomBar/> :  <BottomBarAarabic/> }
    </div>
  );
};

export default TermsAndConditions;