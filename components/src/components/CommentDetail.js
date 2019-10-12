import React from 'react';
// import ReactDOM from 'react-dom';
//import Newcomp from './/components/newcomp';
//import faker from 'faker';

const CommentDetail = (props) =>
{
    //console.log(props);
    return (<div className="comment">
        
        <a href="/" className="avatar">
            <img src={ props.avatar } alt="avatar"/>
            </a>
        <div className="content">
            <a href="/" className="author">
                {props.author}
                </a>
                
            <div className="metadata">
                <span className="date">{props.time}
            
            <div className="text">Messaage is : {props.message} <br/>{props.comments}</div></span>
            
            </div>
     </div>
    </div>

    

    );
};

export default CommentDetail;