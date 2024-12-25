import React from 'react'
import menu from './ServiceApi'
import ServiceCard from './ServiceCard'
const Service = () => {
  return (
    <>
    <div className="my-3">
      <h1 className='common'> Our Services</h1>
      <hr className='w-25 mx-auto ' />
    </div>

    <div className=" container-fluid mb-5">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row gy-3">

            
          {/* image:"/images/hero.jpg",
        title:"Card name",
        description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        cardbtn */}
            {
              menu.map((val,ind)=> {
                return(
                  <ServiceCard key={ind}
                  image={val.image}
                  title={val.title}
                  description={val.description}
                  cardbtn={val.cardbtn } />
                )

              })
            }
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Service