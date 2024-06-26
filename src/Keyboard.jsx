import { useState } from 'react';

export default function Keyboard() {
  const arrchar1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P","[","]","|"];
  const arrchar2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L",];
  const arrchar3 = ["Z", "X", "C", "V", "B", "N", "M",];
  const arrnum = ["`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-","+"];

  const [storechar, setchar] = useState("");
  const [caps, setcaps] = useState(false);
  const [color, setcolor] = useState("");

  const addtext = (data) => {
    if (caps === false) {
      setchar((prev) => prev + data.toLowerCase());
    } else {
      setchar((prev) => prev + data);
    }
  };

  const addnum = (data) => {
    setchar((prev) => prev + data);
  };

  const backspace = () => {
    const newTextValue = storechar.slice(0, storechar.length - 1);
    setchar(newTextValue);
  };

  const setcapital = () => {
    if (caps === true) {
      setcaps(false);
      setcolor("");
    } else {
      setcaps(true);
      setcolor("blue");
    }
  };

  const handleEnter = () => {
    setchar((prev) => prev + '\n');
  };

  const buttonStyle = {
    padding: '10px',
    margin: '2px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxShadow: '2px 2px 3px rgba(255, 255, 255, 0.87)',
    width: '40px',
  };

  const specialButtonStyle = {
    padding: '10px',
    margin: '2px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '700px', margin: '0 auto' }}>
      <div style={{ marginBottom: '20px', textAlign: 'center', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <textarea
          value={storechar}
          readOnly
          style={{ width: '100%', height: '100px', border: 'none', resize: 'none', fontSize: '16px' }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '10px' }}>
        {arrnum.map((num, index) => (
          <button key={index} onClick={() => addnum(num)} style={buttonStyle}>
            {num}
          </button>
        ))}
                <button onClick={backspace} style={specialButtonStyle}>Backspace</button>

      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '10px' }}>
        <button style={specialButtonStyle}>Tab</button>
        {arrchar1.map((char, index) => (
          <button key={index} onClick={() => addtext(char)} style={buttonStyle}>
            {char}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '10px' }}>
      <button onClick={setcapital} style={{ ...specialButtonStyle, backgroundColor: color }}>Caps Lock</button>

        {arrchar2.map((char, index) => (
          <button key={index} onClick={() => addtext(char)} style={buttonStyle}>
            {char}
          </button>
        ))}
                 <button onClick={handleEnter} style={specialButtonStyle}> Enter</button>

      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '10px' }}>
      <button onClick={setcapital} style={{ ...specialButtonStyle, }}> Shift</button>

        {arrchar3.map((char, index) => (
          <button key={index} onClick={() => addtext(char)} style={buttonStyle}>
            {char}
          </button>
        ))}
        <button style={{...buttonStyle,paddingLeft:'15px',paddingRight:'15px'}}>,</button>
        <button style={{...buttonStyle,paddingLeft:'15px',paddingRight:'15px'}}>.</button>
        <button style={{...buttonStyle,paddingLeft:'15px',paddingRight:'15px'}}>/</button>
      <button onClick={setcapital} style={{ ...specialButtonStyle,  }}> Shift</button>

      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '10px' }}>
           <button style={specialButtonStyle}>Ctrl</button>
           <button style={specialButtonStyle}>Alt</button>
           <button style={specialButtonStyle}><i class="fa-brands fa-windows"></i></button>
        <button onClick={() => addtext(' ')} style={{ ...specialButtonStyle, flex: '1' }}>Space</button>
        <button style={specialButtonStyle}>Alt</button>
        <button style={specialButtonStyle}>Fn</button>
        <button style={specialButtonStyle}>Ctrl</button>

      </div>
    </div>
  );
}
