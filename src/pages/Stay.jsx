import React from 'react'
import { Link } from 'react-router-dom'
import Register from './Register'
import NavBar from './NavBar'
import Footer from '../components/footer/Footer'

const Stay = () => {
  return (
    <div>


      <NavBar />

      <div className="container">

        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1618245318763-a15156d6b23c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


            <h3 class="display-1">
              Explore
              <small class="text-body-secondary ">   Our Resorts</small>
            </h3>
            {/* cards */}

            <div class="card-group">
              <div class="card">
                <img src="https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFpcHVyfGVufDB8fDB8fHww" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Jaipur</h5>
                  <p class="card-text">Explore the beauty of Jaipur</p>
                  <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div class="card">
                <img src="https://images.unsplash.com/photo-1578564969231-039947801495?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbmFsaXxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Manali</h5>
                  <p class="card-text">Explore the mountain ranges</p>
                  <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div class="card">
                <img src="https://images.unsplash.com/photo-1590393275627-0c48482c60e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdvYXxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Goa</h5>
                  <p class="card-text">Sample Description</p>
                  <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>








      <Footer />

    </div>
  )
}

export default Stay