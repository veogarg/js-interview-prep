import { useState, useRef, useEffect } from 'react';
import './style.css';

const otpLength = 6;

function OTP() {
  const [otp, setOtp] = useState(Array(otpLength).fill(''));
  const inputRefs = useRef([]);

  // useEffect(() => {
  //   inputRefs.current[0].focus();
  // }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (index < otpLength - 1) {
      inputRefs.current[index + 1].focus();
    }
    if (newOtp.join('').length === otpLength) {
      console.log('submitting otp: ', newOtp);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      const newOtp = [...otp];
      if (otp[index]) {
        newOtp[index] = '';
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <>
      <div className="otp-container">
        {Array(otpLength)
          .fill('')
          .map((_, index) => {
            return (
              <div className="form-control">
                <input
                  key={index}
                  className="otp-input"
                  type="text"
                  maxLength={'1'}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(elem) => (inputRefs.current[index] = elem)}
                />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default OTP;
