import { useState } from 'react';
import './App.css';

function App() {
  const[affichage,setaffichage]=useState("");
  const[isbool,setisbool]=useState(true);
  const[calculatrice,setcalculatrice]=useState("")
  const handelclick=(event)=>{
    isbool ? setaffichage(affichage+event.target.innerHTML):setaffichage(affichage+event.target.innerHTML.toLowerCase())

  }
  const handelcalcul=(event)=>{
   setcalculatrice(calculatrice+event.target.innerHTML);
  }
const resultat=()=>{
  console.log(calculatrice);
 var x="";
 var y="";
 var z="";
 var a=0;
    for (let i = 0; i < calculatrice.length; i++) {
    if (!Number.isInteger(parseInt(calculatrice[i]))){
       x=calculatrice.slice(0,i);
       y=calculatrice.slice(i+1);
       z=calculatrice[i];
    }

    }
    if(z==="+"){
    a=parseInt(y)+parseInt(x)
    }else if(z==="-"){
    a=parseInt(x)-parseInt(y)   
    }else if(z==="*"){
    a=parseInt(x)*parseInt(y);
    }else{
    a=parseInt(x)/parseInt(y);    
    }
    
    setcalculatrice(a.toString());
  
  }
 
  
  return (
    <>    
    <div style={{border:"2px solid black"}}>
   {affichage}   
    </div> 
    <div className='btn'>
       <button onClick={handelclick}>A</button>
       <button onClick={handelclick}>Z</button>
       <button onClick={handelclick}>E</button>
       <button onClick={handelclick}>R</button>
       <button onClick={handelclick}>T</button>
       <button onClick={handelclick}>Y</button>
       <button onClick={handelclick}>U</button>
       <button onClick={handelclick}>I</button>
       <button onClick={handelclick}>O</button>
       <button onClick={handelclick}>P</button>
       <button onClick={handelclick}>Q</button>
       <button onClick={handelclick}>S</button>
       <button onClick={handelclick}>D</button>
       <button onClick={handelclick}>F</button>
       <button onClick={handelclick}>G</button>
       <button onClick={handelclick}>H</button>
       <button onClick={handelclick}>J</button>
       <button onClick={handelclick}>K</button>
       <button onClick={handelclick}>L</button>
       <button onClick={handelclick}>M</button>
       <button onClick={handelclick}>W</button>
       <button onClick={handelclick}>X</button>
       <button onClick={handelclick}>C</button>
       <button onClick={handelclick}>V</button>
       <button onClick={handelclick}>B</button>
       <button onClick={handelclick}>N</button>
       <button style={{width:"150px"}} onClick={()=>setaffichage(affichage+" ")}>space</button>
       <button onClick={()=>setaffichage(affichage.slice(0,affichage.length-1))} >delete</button>
       <button onClick={()=> setisbool(!isbool) }>upCase</button>
    </div>
    <div style={{border:"2px solid black"}}>
   {calculatrice}   
    </div> 
    <div className='btn'>
    <button onClick={handelcalcul}>0</button>
       <button onClick={handelcalcul}>1</button>
       <button onClick={handelcalcul}>2</button>
       <button onClick={handelcalcul}>3</button>
       <button onClick={handelcalcul}>4</button>
       <button onClick={handelcalcul}>5</button>
       <button onClick={handelcalcul}>6</button>
       <button onClick={handelcalcul}>7</button>
       <button onClick={handelcalcul}>8</button>
       <button onClick={handelcalcul}>9</button>
       <button onClick={handelcalcul}>+</button>
       <button onClick={handelcalcul}>-</button>
       <button onClick={handelcalcul}>*</button>
       <button onClick={handelcalcul}>/</button>
       <button onClick={resultat}>=</button>
       
    </div>
    </>

  );
} 

export default App;
