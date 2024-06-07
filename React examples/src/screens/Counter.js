import React, { useState, useEffect, useRef } from "react";

const CounterInitialTime = 10;


const Counter = () => {
  const [count, setCount] = useState(CounterInitialTime);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef()

  useEffect(() => {
    if (!paused && count > 0) {
      intervalRef.curremt = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.curremt);
    /**
     * Reason for Cleanup:
     *
     * - If the useEffect has dependencies specified in the dependency array,
     *   and any of those dependencies change between renders,
     *   the cleanup function from the previous render will be called before the new effect is executed.
     */
  }, [count, paused]);

  const handlePauseResume = () => {
    setPaused((prevPaused) => !prevPaused);
  };

  const handleRestart = () => {
    setCount(CounterInitialTime);
    setPaused(false);
  };

  return (
    <div>
      <h1>Countdown: {count}</h1>
      <button onClick={handlePauseResume}>{paused ? "Resume" : "Pause"}</button>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default Counter;
