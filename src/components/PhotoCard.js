import React from 'react';

export default function PhotoCard(props){
       return (
             <div className = "photo-list" key={props.id}>
                   <h2>{props.title}</h2>
                   <h2>{props.date}</h2>
                   <img src={props.source} alt="Photo of the day!"/>
                   <p>{props.description}</p>
             </div>
       );
}