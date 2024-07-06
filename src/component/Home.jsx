import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div className="homepage">
      <div className="card bg-dark text-white border-0">
        {/* <img src="/asset/homebg.jpg" className="card-img" alt="HomeBG" height="625px" /> */}
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/asset/img1.jpg" className="d-block w-100" alt="HomeImg" height="625px"/>
    </div>
    <div className="carousel-item">
      <img src="/asset/img2.jpg" className="d-block w-100" alt="HomeImg" height="625px"/>
    </div>
    <div className="carousel-item">
      <img src="/asset/img3.jpg" className="d-block w-100" alt="HomeImg" height="625px"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        <div className="card-img-overlay d-flex flex-column justify-content-top">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mt-4">Check New Arrivels</h5>
            <p className="card-text fs-2">Check out all the Collections</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  )
}

export default Home
