//import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


function getTime(){
    return (new Date().toLocaleTimeString())
}

function getDate(){
    return (new Date().toLocaleDateString())
}

//Create a react component 
const App = () =>
{
    const buttonText = { text : 'Click Me!' };
    const style = { border:'1px solid purple', backgroundColor:'white', color:'black' };
    const dateTime= "Date and Time";
    
    return (
    <div>
    <label className="label" htmlFor="name">Enter Name</label>
    <input id="name" type="text"></input><br/>
    <button type="Submit" style={ style }>
    { buttonText.text }</button>
    <br/><br/><br/>
    <div><b>{ dateTime }</b></div>
    <h3>{ getTime() }</h3>
    <h3>{ getDate() }</h3>
   
    
    </div>
    );
}

//Take the React component and show it on the screen

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);
