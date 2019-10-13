import React from 'react';
//import faker from 'faker';;

const ApprovalCard = () => {

    return (
       
       
      
    <div className="card">
      <div className="content">
        {/* <img className="right floated mini ui image" alt={faker.image.avatar()}/> */}
        <div className="header">
         Are You Sure?
        </div>
       
        <div className="description">
          You  wants to add them to the group <b>best friends</b>
        </div>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Decline</div>
        </div>
      </div>
    </div>
  
  

    );


};

export default ApprovalCard;