// src/components/TrafficSignal.js
import React, { useState, useEffect } from 'react';
import './index.css';

const TrafficSignal = () => {
  const [light, setLight] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      setLight((prevLight) => {
        if (prevLight === 'red') return 'yellow';
        if (prevLight === 'yellow') return 'green';
        if (prevLight === 'green') return 'red';
        return 'red';
      });
    }, getIntervalDuration(light));

    return () => clearInterval(interval);
  }, [light]);

  const getIntervalDuration = (currentLight) => {
    if (currentLight === 'red') return 3000; // 30 seconds
    if (currentLight === 'yellow') return 6000; // 1 minute
    if (currentLight === 'green') return 12000; // 2 minutes
    return 30000; // default
  };

  return (
    <div className="traffic-signal">
      <div className={`light red ${light === 'red' ? 'active' : ''}`}></div>
      <div className={`light yellow ${light === 'yellow' ? 'active' : ''}`}></div>
      <div className={`light green ${light === 'green' ? 'active' : ''}`}></div>
    </div>
  );
};

export default TrafficSignal;
