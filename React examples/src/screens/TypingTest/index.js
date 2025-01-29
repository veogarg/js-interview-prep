import React, {useState} from 'react'
import "./style.css"

const phrase = 'A quick brown fox just jumps over the little lazy dog';
const phraseArr = phrase.split('');

const TypingTest = () => {
    const [value, setValue] = useState();
    const [inputArr, setInputArr] = useState([]);
  
    const handleClick = (e) => {
      const inputVal = e.target.value;
      setValue(e.target.value)
      setInputArr(inputVal.split(''));
    };
  
    return (
      <>
        <div className="main-container">
          <h1>Typing Test</h1>
          <h3 className="phrase">
            {phraseArr.map((val, index) => {
              return (
                <span
                  key={`phrase${index}`}
                  className={
                    inputArr[index] === phraseArr[index]
                      ? 'test-green'
                      : !inputArr[index]
                      ? 'test-grey'
                      : 'test-red'
                  }
                >
                  {val}
                </span>
              );
            })}
          </h3>
          <input type="text" value={value} onChange={handleClick} style={{border: "1px solid #000"}} />
        </div>
      </>
    );
}

export default TypingTest