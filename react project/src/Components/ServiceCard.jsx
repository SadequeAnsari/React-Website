import React from 'react'
import { NavLink } from 'react-router-dom'
const ServiceCard = (props) => {
  return (
    <>
    <div className="col-md-4 mx-auto">
    <div className="card">
  <img src={props.image} className="card-img-top" alt="service img error"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description} </p>
    <NavLink  to="/contact" className="btn btn-primary">{props.cardbtn } </NavLink> 
  </div>
</div>
    </div>
    
    </>
  )
}

export default ServiceCard