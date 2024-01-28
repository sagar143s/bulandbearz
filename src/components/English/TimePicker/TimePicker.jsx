"use client"
import React from 'react';
import { Space, TimePicker } from 'antd';
const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const TimeRange = () => (
  <Space wrap>
    <TimePicker use12Hours onChange={onChange} />
    {/* <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} />
    <TimePicker use12Hours format="h:mm a" onChange={onChange} /> */}
  </Space>
);
export default TimeRange;