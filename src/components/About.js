import React, { Component } from 'react'
// import All_news from './images/All_News.png'
import News from './images/News.jpg'
import {Link } from "react-router-dom";

export class About extends Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
  <div class="container"><Link to="/" class="navbar-brand d-flex align-items-center"> <i class="fa fa-snowflake-o fa-lg text-primary mr-2"></i><strong>Newsworld</strong></Link>
    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>
    <div id="navbarSupportedContent" class="collapse navbar-collapse">
    </div>
  </div>
</nav>

<div class="bg-light">
  <div class="container py-5">
    <div class="row h-100 align-items-center py-5">
      <div class="col-lg-6">
        <h1 class="display-4">About <b>Newsworld</b></h1>
        <p class="lead text-muted mb-0">Newsworld is a exciting webapp. It is created to not only to Enhance your reading skills but your general knowlegde as well. Newsworld Provides various catergory news such as Sports , Business , Entertainment ,General health , Science and technology. You can select the category to filter out your intereset. You get the News from All over the world. </p>
      </div>
      <div class="col-lg-6 d-none d-lg-block"><img src={News} alt="" class="img-fluid"/></div>
    </div>
  </div>
</div>



<div class="bg-light py-5">
  <div class="container py-5">
    <div class="row mb-4">
      <div class="col-lg-5">
        <h2 class="display-4 font-weight-light">Our team</h2>
        <p class="font-italic text-muted">Energtic , Enthusiatic, Cooperative and Strong </p>
      </div>
    </div>

    <div class="row text-center">
      
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">Nitin Meena</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
          <ul class="social mb-0 list-inline mt-3">
            {/* <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f">facebook</i></a></li> */}
            <li class="list-inline-item"><a href="https://twitter.com/NitinMe40983208" class="social-link"><i class="fa fa-twitter"></i>Twitter</a></li>
            <li class="list-inline-item"><a href="https://www.instagram.com/nitinmeena.23/" class="social-link"><i class="fa fa-instagram">Instagram</i></a></li>
            <li class="list-inline-item"><a href="https://www.linkedin.com/in/nitin-meena-895936244/" class="social-link"><i class="fa fa-linkedin">Linkedin</i></a></li>
          </ul>
        </div>
      </div>
      {/* <!-- End--> */}

      {/* <!-- Team item--> */}
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">Harry</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="/" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="/" class="social-link"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="/" class="social-link"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="/" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</div>
<footer class="bg-light pb-5">
  <div class="container text-center">
    <p class="font-italic text-muted mb-0">&copy; Copyrights 2022 All rights reserved.</p>
  </div>
</footer>
      </>
    )
  }
}

export default About
