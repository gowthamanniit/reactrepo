import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// var data=<><h1  className="myclass">welcome to jsx</h1><h1>welcome to jsx</h1></>
// var n1=10
// var n2=20
// var tot=n1+n2
var sobj={
  rno:1991,
  sname:"manojkumar",  
  marks:{  
        tamil:99,
        english:88,
        maths:48
        }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App name="manojkumar" rno="1001" mark="99"/>     */}
  <App myobj={sobj}></App>
    {/* {data}
    {n1}
    {n2}
    {tot} */}
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
