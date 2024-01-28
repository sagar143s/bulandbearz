"use client"
import React from "react";
import CountUp from "react-countup";
import { styled } from '@mui/material/styles';
import { Divider,Box } from "@mui/material";


const CounterContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  background: "linear-gradient(to right, #3b4371,#f3904f )",
  padding: "50px",
  marginTop:'50px',
  flexDirection: "row", 
  "@media (max-width: 550px)": {
    flexDirection: "column",
  },
});

const CounterBox = styled("div")({
  textAlign: "center",
});

const CounterNum = styled("div")({
  fontSize: "65px",
  color: "#fff", 
  fontWeight:"bold",
});

const CounterText = styled("span")({
  marginTop: "10px",
  fontSize: "1rem",
  color: "#fff",
  fontWeight:"500",
});

const Counter = () => {
  return (
    <CounterContainer >
      <CounterBox sx={{padding:"2rem 0"}}>
      <CounterNum>
          <CountUp start={0} end={20} duration={6} delay={0} />
          
        </CounterNum>
        <CounterText>سنوات من الخبرة الجماعية</CounterText>
      </CounterBox>
  <Divider/>
      <CounterBox sx={{padding:"2rem 0"}}>
      <CounterNum>
      +
          <CountUp start={0} end={50} duration={6} delay={0} />
      
        </CounterNum>
        <CounterText>محاضرات للوكالات الحكومية والخاصة</CounterText>
      </CounterBox>
       <Divider/>
      <CounterBox sx={{padding:"2rem 0"}}>
        <CounterNum> +
          <CountUp start={0} end={1000} duration={5} delay={0} />
         
        </CounterNum>
        <CounterText>تم توفير استشارة فردية</CounterText>
      </CounterBox>
    </CounterContainer>
  );
};

export default Counter;
