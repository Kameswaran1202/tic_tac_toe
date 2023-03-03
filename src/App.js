import React, { useEffect, useState } from 'react';
import './App.css';
import Input from './input';

function App() {
  <Input/>
  const [count, setCount] = useState(1);
  const [user, setUser] = useState('X');
  const [winner, setWinner] = useState('');
  const win = ['123', '456', '789', '159', '357', '147', '258', '369'];
  const [user1inp, setUser1inp] = useState('');
  const [user2inp, setUser2inp] = useState('');
  useEffect(()=>{
    validate1()
  },[user1inp])
  useEffect(()=>{
    validate2()
  },[user2inp])
  const validate2=()=>{

    for (let i = 0; i < win.length; i++) {
      const inp = user2inp.split('').sort().join('');
      if (inp.includes(win[i])) {
        setWinner('X wins!');
        disableButtons();
      }
    }

  }

  const validate1=()=>{
    for (let i = 0; i < win.length; i++) {
      const inp = user1inp.split('').sort().join('');
      if (inp.includes(win[i])) {
        setWinner('O wins!');
        disableButtons();
      }
    }
  }

  const change = function (e) {
    const btn = document.getElementById(e.target.id);
    const btnid = e.target.id;

    if (count % 2 === 0) {
      setUser('X');
      btn.style.backgroundColor = 'green';
      btn.innerHTML = user;
      btn.disabled = true;
      setUser1inp((pre) => pre + btnid);


      setCount(count + 1);
    } else {
      setUser('O');
      btn.style.backgroundColor = 'red';
      btn.innerHTML = user;
      btn.disabled = true;
      setUser2inp(user2inp + btnid);


      setCount(count + 1);
    }
  };

  const disableButtons = () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => (button.disabled = true));
  };

  return (
    <div className="App">
      {winner}
      
      <center>
        <button id="1" onClick={(e)=>change(e) } style={{"padding":"45px","margin":"1px",}}>-</button>
        <button id="2" onClick={(e)=>change(e)} style={{"padding":"45px","margin":"1px"}}>-</button>
        <button id="3" onClick={(e)=>change(e)} style={{"padding":"45px","margin":"1px"}}>-</button><br></br>
        <button id="4" onClick={(e)=>change(e)} style={{"padding":"45px","margin":"1px"}}>-</button>
        <button id="5" onClick={(e)=>change(e)} style={{"padding":"45px","margin":"1px"}}>-</button>
        <button id="6" onClick={(e)=>change(e)} style={{"padding":"45px","margin":"1px"}}>-</button><br></br>
        <button id="7" onClick={(e)=>change(e)} style={{"padding":"45px","margin":"1px"}}>-</button>
        <button id="8" onClick={(e)=>change(e)} style={{"padding":"45px","margin":"1px"}}>-</button>
        <button id="9" onClick={(e)=>change(e)} style={{"padding":"45px","margin":"1px"}}>-</button><br></br>

      </center>
          </div>
  );
}

export default App;

