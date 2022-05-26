import React from 'react'


const Travel = (props) => {

  return (
      <section className='container'>
        <div className='image'>
               <img src={props.image}  alt='photo' className='image'/>     
        </div> 
        <div className='details'>
          <h4>{props.location}</h4>
          <a href={props.map}>view on Google Maps</a>
          <h1>{props.title}</h1>
          <h6>{props.startDate} - {props.endDate} </h6>
          <p>{props.description}</p>
        </div> 
    </section> 
  )
}

export default Travel
