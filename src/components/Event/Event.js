import React, { useEffect, useState } from 'react';

const Event = ({event}) => {
        console.log(event)
    return (
        <div className="col-md-3">
            <img style={{height: '300px'}} src={event.imageURL} alt=""/>
            <h3>{event.name}</h3>
            
        </div>
    );
};

export default Event;