import React from 'react';
import ReactDOM from 'react-dom';
//import Newcomp from './/components/newcomp';
import faker from 'faker';
import CommentDetail from './/components/CommentDetail';
import ApprovalCard from './/components/ApprovalCard';
import Stopwatch from ".//components/stopwatch";
import Countdown from ".//components/countdown";
import './/components/bootstrap.min.css';

const App = () =>
{
   return (
       
       <div className="ui container comments">
           <Countdown/>
       <Stopwatch/><br/><br/><br/><br/>

        <ApprovalCard/><br/><br/>
        
      <CommentDetail 
          author="Vivek"  
          message="Hii, I m Vivek" 
          time="1 PM" 
          comments="Nice Blog Posts"
          avatar={faker.image.avatar()}
          />


        <CommentDetail
           author="Manish" 
           message="Hii, I m Manish" 
           time="2 PM"
           comments="Nice Blog Posts"
           avatar={faker.image.avatar()}
           />

          <CommentDetail
           author="Akhil" 
           message="Hii, I m Akhil" 
           time="3 PM" 
           comments="Nice Blog Posts"
           avatar={faker.image.avatar()}
           />

          <CommentDetail 
          author="Gautam" 
          message="Hii, I m Gautam" 
          time="4 PM" 
          comments="Nice Blog Posts"
          avatar={faker.image.avatar()}
          />

          <CommentDetail 
          author="Sohan" 
          message="Hii, I m Sohan" 
          time="5 PM" 
          comments="Nice Blog Posts"
          avatar={faker.image.avatar()}
          />

          <CommentDetail 
          author="Gyan" 
          message="Hii, I m Gyan" 
          time="6 PM" 
          comments="Nice Blog Posts"
          avatar={faker.image.avatar()}
          />
          
       
       </div>
       
   )

}

ReactDOM.render(
    <App />,document.querySelector("#root")

);