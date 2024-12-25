import React from 'react'

const Contact = () => {
  return (
    <>
      <section className='section-contact '>
        <div className=" container">
          <div className="row d-flex justify-content-center align-items-center flex-column">
            <div className="col-8">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email"/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Phone Number"/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <a href="/">
             <button className='sub-btn'>Send</button> </a>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact