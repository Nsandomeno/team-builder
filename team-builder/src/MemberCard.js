import React from 'react';

const MemberCard = props => {

    return(
   <div>
    {props.memCards.map(mem => (
        <div>
            <h1> {mem.name} </h1>
            <h3> {mem.email} </h3>
            <h3>  {mem.role} </h3>
        </div>
    ))

    }
   </div>

    );
}

export default MemberCard;