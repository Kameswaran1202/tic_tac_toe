
import React,{useState} from 'react'
import './App.css';

function App() {
  const [count,setCount]=useState(1)
  const [user,setUser]=useState("X")
  var [winner,setWinner]=useState("")
  const win=["123","456","789","159","357","147","258","369"]
  var [user1inp,setUser1inp]=useState("")
  var [user2inp,setUser2inp]=useState("")

  

  const change=function (e){  
    console.log(count)
    const btn =document.getElementById(e.target.id)
    const btnid=e.target.id


    if (count%2===0){

      setUser("X")
      btn.style.backgroundColor="green"
      // btn.style.padding="46px"
      // btn.style.margin="2.5px"
      btn.innerHTML=user
      btn.disabled=true
      setUser1inp((pre)=>pre+btnid)
      
      console.log("user1inp",user1inp)
    if(count>=3){
      for(let i=0;i<win.length;i++){
        const inp=user1inp.split('').sort().join('');
        if(inp.includes(win[i])){
          setWinner(user)
          console.log("o wins")
        }
      }

    }
      

    setCount(count+1)
    }
    else{
      setUser("O")

      btn.style.backgroundColor="red  "
      // btn.style.padding="38.5px"
      // btn.style.margin="2.5px"
      setUser2inp(user2inp+btnid)
      console.log("user2inp",user2inp)
      btn.innerHTML=user
      btn.disabled=true
      if(count>=3){
        for(let i=0;i<win.length;i++){
          const inp=user2inp.split('').sort().join('');
          if(inp.includes(win[i])){
            setWinner(user)
            console.log("X wins")
          }
        } 

      }
      

    setCount(count+1)
    }

    
  }
  
  return (
    <div className="App">
      {winner}
      
      <center>
        <button id="1" onClick={(e)=>change(e)} style={{"padding":"45px","margin":"1px",}}>-</button>
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


// if({{user}=="X"? color:"green" : color:"red")