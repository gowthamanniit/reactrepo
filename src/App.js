function App()
{
  
  const dis1=()=>{    
    document.getElementById("res").innerHTML="cursor inside textbox1"

    document.getElementById("t1").style.backgroundColor="green"
    document.getElementById("t1").style.color="white"
    
  }
  const dis2=()=>{    
    document.getElementById("res").innerHTML="cursor outside textbox1"
    document.getElementById("t1").style.backgroundColor="red"
  }
  return(
    <>
    <center><h1>onFocus onBlur Event</h1></center>
      <input type="text" onFocus={dis1} onBlur={dis2} id="t1" placeholder="Enter data"></input>
      <br></br>
      <input type="text" id="t2"></input>
    <div id="res"></div>
    </>
  )
}
export default App

/*
function App()
{
  var data;
  const dis=()=>{
    data=document.getElementById("t1").value;
    document.getElementById("res").innerHTML=data
  }
  return(
    <>
    <center><h1>onChange Event</h1></center>
      <input type="text" onChange={dis} id="t1" placeholder="Enter data"></input>
    <div id="res"></div>
    </>
  )
}
export default App
/*
function App()
{
  var m1=100;
  var m2=200;
  const disp=()=>{    
    var a=parseInt(document.getElementById("t1").value)
    var b=parseInt(document.getElementById("t2").value)
    document.getElementById("res").innerHTML="button clicked"+(a+b)
    document.getElementById("res2").innerHTML="button clicked"+(m1+m2)
  }
  return(
     <form>
      <input type="text" id="t1" placeholder="Enter no.1"></input>
      <br></br>
      <input type="text" id="t2" placeholder="Enter no.2"></input>
      <br></br>
      <input type="button" onClick={disp} value="Clickme"></input>
      <div id="res"></div>
      <div id="res2"></div>
      {m1+m2}
    </form>
  )
}
export default App



/*
const App = () => {
  return (
  <form>
    <input type="text" value="manojkumar"></input><br></br>
    <input type="number"></input>
    <br></br>
    <label>Enter Password:<input type="password"></input></label> 
    <br></br>
    <input type="radio" name="Gen"></input>Male
    <input type="radio" name="Gen"></input>FeMale
    <input type="radio" name="Gen"></input>Others
    <br></br>
    <input type="checkbox"></input>c
    <input type="checkbox"></input>c++
    <input type="checkbox"></input>java
    <br></br>
    <textarea rows="4" cols="20"></textarea>
    <br></br>
    <select>
    <option>January</option>
    <option>February</option>
    <option>March</option>
    <option>April</option>
    <option>May</option>
    <option>June</option>
    </select>
    <br></br>
    <input type="email"></input>
    <br></br>
    <input type="date"></input>
    <br></br>
    <input type="time"></input>
    <br></br>
    <input type="week"></input>
    <br></br>
    <input type="file"></input>
    <br></br>
    <input type="hidden" value="100" name="h1"></input>
    <br></br>
    <input type="reset" value="clear"></input>
    <br></br>
    <input type="range" min="0" max="1"></input>
    <br></br>
    <input type="button" value="clickme"></input>
    <br></br>
    <input type="submit" value="clickme"></input>
    <br></br>
    <button> click me</button>      
  </form>
  )
}
export default App
/*
<form>
<input type="text"></input></form>
class App extends React.Component
{
  constructor(props)
  {
    super()
    this.state=props   
  }
  
  render()
  {    
    return(
      <>
        <h1>welcome to react js class component</h1>
        <h2>{this.state.myobj.rno}</h2>
        <h2>{this.state.myobj.sname}</h2>
        <h2>{this.state.myobj.marks.tamil}</h2>
        <h2>{this.state.myobj.marks["english"]}</h2>
        <h2>{this.state.myobj.marks["maths"]}</h2>
      </>
    )
  }
}
export default App
/*
function App(props)
{
  return(<>
    <h1><center>2.Props passing json object</center></h1>
    <h2>Student Roll Number:{props.myobj.rno}</h2>
    <h2>Student Name:{props.myobj.sname}</h2>
       
    <h2>Student tamil mark:{props.myobj.marks.tamil}</h2>  
    <h2>Student english mark:{props.myobj.marks["english"]}</h2>  
    <h2>Student maths mark:{props.myobj.marks["maths"]}</h2>  
  </>)
}
export default App
/*
import './cssstyle/mycssstyle.css'
function App()
{
  const mystyle={
    fontFamily:"Algerian Regular",
    fontSize:"44px",
    border:"4px double green",
    color:"red",
    backgroundColor:"pink"    
  }
  return(
    <div>
      <h1>Welcome To React CSS Inline & Internal</h1>

      <h2 style={{backgroundColor:"red",color:"white",fontSize:"22px",fontFamily:"arial"}}>This is Header 2</h2>

      <h3 style={mystyle}>this is header3</h3>
      <h3 style={mystyle}>this is header3</h3>
      <h3 style={mystyle}>this is header3</h3>
      <h5>welcome to external css</h5>
    </div>
  )
}
export default App
/*
import FailComp from "./Components/FailComp";
import SuccessComp from "./Components/SuccessComp";
//direct import images(without export)
import myimg from './images/pic1.jfif'
// export and import both datatypes and images
import { age, data, img1, img2, photo } from "./ImgVar/CommonFileVar";

//function App()
const App=()=>
{
  var test=true;
return(
  <>
  {img1}
  {img2}
  {age}
  {data}
  <img src={photo} alt="no path"></img>
  <img src={myimg} alt="no path"></img>
  <h1>One Top Level Element</h1>
  <h1>{test?<SuccessComp/>:<FailComp/>}</h1>
  </>
)
}
export default App

/*function App()
{
  var arr=[11,22,33,44,55,66,77,88,99]
  var [a,b,...c]=arr
  console.log(Array.isArray(c))
  return(
    <>
    <h1>Spread operator ... </h1>  
    <h2>index o : {a}</h2>
    <h2>index 1 : {b}</h2>
    <h2>index 2 onwards : {c}</h2>
    <h2>index 2 onwards type: {typeof(c)}</h2>

    <ol>
        {c.map((v,i)=><li key={i}>{v}</li>)}
      </ol>    

    </>
  )
}
export default App
/*
function App()
{
  var arr=[11,22,33,44,55,66,77,88,99]
  var s=0
  return(
    <>
      <h1>React Loop</h1>
      <ol type="A">
      {arr.map((v,i)=><li key={i}>{v} {i}</li>)}
      </ol>
      <h1>or method</h1>
      <ol type="A">
      {arr.map((v)=><li key={s=s+1}>{v} {s}</li>)}
      </ol>
      
      
    </>
  )
}
export default App
/*
function App()
{
  var [a1,a2,a3,...a4]=[11,22,33,44,55,66]
  
  var disp=(a,b)=>{
    var add=a+b
    var sub=a-b
    var mul=a*b
    var div=a/b
    //console.log(typeof(a4))
    return [add,sub,mul,div]
  }
  var [v1,v2,v3,v4]=disp(10,20)

  var sobj={rno:1,
    sname:"manojkumar",
    mark:99
  }

  var show=({rno,sname,mark})=>{
       
    return [rno,sname,mark]
  }

  var [ov1,ov2,ov3]=show(sobj)

  var stud={
    sno:1991,
    sname:"kavi",
    marks:{
      tamil:99,
      english:199,
      maths:100
    }
  }

  var ndisp=({sno,sname,marks:{tamil,english,maths}})=>{
    return [sno,sname,tamil,english,maths]
  }
  var [r1,n1,m1,m2,m3]=ndisp(stud)
  return(
    <>
      <h1> Array Destructing </h1>
      <h2>index 0 :{a1}</h2>
      <h2>index 1 :{a2}</h2>
      <h2>index 2 :{a3}</h2>
      <h2>index 3 :{a4}</h2>
      <h1>function destructing</h1>
      <h2> value 1 : {v1}</h2>
      <h2> value 2 : {v2}</h2>
      <h2> value 3 : {v3}</h2>
      <h2> value 4 : {v4}</h2>

      <h1>Object Destructing</h1>
      <h2>rno:{ov1}</h2>
      <h2>name:{ov2}</h2>
      <h2>mark:{ov3}</h2>

      <h1>Nested Object Destructing</h1>
      <h2>rno:{r1}</h2>
      <h2>name:{n1}</h2>
      <h2>mark1:{m1}</h2>
      <h2>mark2:{m2}</h2>
      <h2>mark3:{m3}</h2>
    </>
  )
}
export default App
/*
function App()
{  
  if (true)
  {
    var v=100;
    const c=300;
    let l=200;
    v=v+1
    v+=1
    v++
    ++v
    l=l+1
    //c=c+1
  }
  return(
    <>
    <h1>variable : {v}</h1>
    <h1>let  : {l}</h1> 
     <h1>const :{c}</h1> 
    </>
  )
}
export default App
/*
function App()
{
  var dis=(a,b,c)=>{
    var tot=a+b+c
    document.getElementById("res").innerHTML=tot
  }
  return(
    <>
      <h1><center>Function With Arguments</center></h1>
      <button onClick={()=>dis(10,20,30)}>click me</button>
      <div id="res"></div>
    </>
  )
}
export default App
/*
function App()
{
  const dis=()=>{
    alert("test arrow function")
    document.getElementById("res").innerHTML="button clicked"
  }
  // function dis()
  // {
  //   alert("test normal function")
  // }
  return(
    <>
      <h1>ES 6 1. Arrow function without parameter</h1>
      <button onClick={dis}>click me</button>
      <div id="res"></div>
    </>
  )
}
export default App
/*
function App()
{
  var sobj=[{
      sno:1,
      sname:"ramesh",
      mark:99
  },{
      sno:2,
      sname:"karthi",
      mark:98
  },{
      sno:3,
      sname:"abinaya",
      mark:94
  }]
  
  return(
    <>
      <h1>React array with json</h1>
      <h2>student 1 details</h2>
      <h3>sno:{sobj[0].sno}</h3>
      <h3>student name:{sobj[0].sname}</h3>
      <h3>student mark:{sobj[0].mark}</h3>
      <h2>student 2 details</h2>
      <h3>sno:{sobj[1].sno}</h3>
      <h3>student name:{sobj[1].sname}</h3>
      <h3>student mark:{sobj[1].mark}</h3>
      <h2>student 3 details</h2>
      <h3>sno:{sobj[2].sno}</h3>
      <h3>student name:{sobj[2].sname}</h3>
      <h3>student mark:{sobj[2].mark}</h3>
    </>
  )
}
export default App

/*
function App()
{
  var sobj={
    rno:1001,
    name:"manoj",
    subjects:[100,77,88]    
    }
  
  return(
    <>
      <h1>React JSON with array</h1>
      <h2>Roll Number:{sobj.rno}</h2>
      <h2>Student name:{sobj.name}</h2>
      <h2>Student tamil mark:{sobj.subjects[0]}</h2>
      <h2>Student english mark:{sobj.subjects[1]}</h2>
      <h2>Student maths mark:{sobj.subjects[2]}</h2>
    </>
  )
}
export default App

/*
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