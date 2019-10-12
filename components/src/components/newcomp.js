import React from 'react';
import ReactDOM from 'react-dom';


const news = (props)=>
{
return (
  { name : "Vivek" }

);
}
class Newcomp extends React.Component {
    render() {
     // let news;
      return <h1>Hello {this.props.name}</h1>;
    }
  }



export default Newcomp;