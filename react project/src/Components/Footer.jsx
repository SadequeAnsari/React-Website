import React from 'react'

const Footer = () => {
  return (
    <>
    <section className="footer-section ">
        <div className="container">
            <div className="row mx-auto">
                <div className="col-10 col-md-2 add ">
                    <h2>Address</h2>
                    <a href=""><i class="fa-solid fa-location-dot"></i> Location </a>
                    <a href=""><i class="fa-solid fa-phone"></i> 9999999999 </a>
                    <a href=""><i class="fa-solid fa-envelope"></i> demo@gmail.com </a>
                </div>

                <div className=" col-md-4">
                <h2>Info</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quos veritatis rerum harum voluptatum sapiente iure, unde ipsam pariatur doloribus!</p>
                </div>

                <div className=" col-md-2 link">
                <h2>Link</h2>
                <a href="/">Home</a>
                <a href="/about">About Us</a>
                <a href="/service">Services</a>
                <a href="/contact">Contact Us</a>
                </div>

                <div className=" col-md-4">
                <h2>Subscribe</h2>
<form action='mailto:sadequeansari7292@gmail.com'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="demo@gmail.com"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Send</button>
</form>
                </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default Footer