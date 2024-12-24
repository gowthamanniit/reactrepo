function App()
{
  var sobj={
    rno:1001,
    name:"manoj",
    subjects:{
    tamil:99,
    english:98,
    maths:100
    }
  }
  return(
    <>
      <h1>React JSON</h1>
      <h2>Roll Number:{sobj.rno}</h2>
      <h2>Student name:{sobj.name}</h2>
      <h2>Student tamil mark:{sobj.subjects["tamil"]}</h2>
      <h2>Student english mark:{sobj.subjects.english}</h2>
      <h2>Student maths mark:{sobj.subjects["maths"]}</h2>
    </>
  )
}
export default App
/*
function App()
{
  var arr=[11,22,33,44,55,66];
  return(
    <>
      <h1>Array Demo Basic</h1>
      <h2>value 1:{arr[0]}</h2>
      <h2>value 2:{arr[1]}</h2>
      <h2>value 3:{arr[2]}</h2>
      <h2>value 4:{arr[3]}</h2>
      <h2>value 5:{arr[4]}</h2>
      <h2>value 6:{arr[5]}</h2>
      
    </>
  )
}
export default App
/*
function Gowtham()
{
  return(
    <>
      <h1>Default App name changed</h1>
      <h1>Default App name changed</h1>
      <h1>Default App name changed</h1>
    
    </>
  )
}
export default Gowtham
/*
function App()
{
  var avg=80
  var  res="fail"
  return(
    <>
    <center><h1>Control statement 4. nested if </h1></center>  
    <h1>{
      (res==="pass" &&
      ((avg>=85 && "outstanding") || (avg>=75 && "excellent") || (avg>=65 && "good") || "FAIR")
      )
      ||
      "No Grade because fail"
      }
      </h1>
    </>
  )
}
export default App
/*
function App()
{
  var avg=63
  return(
    <>
    <center><h1>Control statement 3. if elseif </h1></center>  
    <h1>{(avg>=85 && "outstanding") || (avg>=75 && "excellent") || (avg>=65 && "good") || "FAIR"}</h1>
    </>
  )
}
export default App
/*
import myimg from './images/pic1.jfif'
function App()
{
  var a=10
  var b=20
  
  return(
    <div>
    <h2>A value :{a}</h2>
    <h2>B value :{b}</h2>
    <h2>Total value :{a+b}</h2>
    <img src={myimg} alt="img path wrong"></img>
    </div>
  )
}
export default App
/*
import React from "react";
class App extends React.Component
{
  render()
  {
    return(
      <h1>welcome to class Component test</h1>
    )
  }
}
export default App


/*
function App()
{
  return(
    <h1>WElcome to React JS</h1>
  )
}
export default App
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/