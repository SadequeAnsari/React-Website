import React from 'react'
import image from "/images/hero.jpg"
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className=" container ">
          <div className="row py-3">
            <div className="col-md-6 d-flex justify-content-center align-items-start flex-column">
              <p className='hero-top-data'>This is me </p>
              <h1 className='hero-heading'>Sadeque <span> Ansari </span></h1>
              <p className='hero-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quidem, tempora voluptatem commodi voluptates vel nihil fuga dolores dicta dolore reprehenderit temporibus et animi quibusdam obcaecati eos cumque? Earum, consequuntur!</p>
              {/* <button > */}
                <NavLink to="about" className=' btn btn-2 text-capitalize '>hire me</NavLink>
              {/* </button> */}
            </div>

            <div className="col-md-6 py-5 d-flex justify-content-center align-items-center ">
            <img src={image} alt=" hero-img error" className=' img-fluid hero-img'  />

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home