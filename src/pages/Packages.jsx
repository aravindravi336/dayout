import React from 'react'
import { Link } from "react-router-dom"
import NavBar from './NavBar'
import Footer from '../components/footer/Footer'
import InputRange from './InputRange'

const Packages = () => {
    return (
        <div>

<NavBar />
            <div className="container">


            <h1>Our Destinations</h1><br/>
                
                <div className="col col 12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row gy-3">
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <div class="card shadow p-3 mb-5 bg-white rounded" >
                                <img src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuYWxpfGVufDB8fDB8fHww" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Manali</h5>
                                    <p class="card-text">Explore the beautiful Manali.</p>
                                    <Link to="/book" class="btn btn-primary">Book Now</Link>
                                </div>
                            </div>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <div class="card shadow p-3 mb-5 bg-white rounded" >
                                <img src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuYWxpfGVufDB8fDB8fHww" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Manali</h5>
                                    <p class="card-text">Explore the beautiful Manali.</p>
                                    <Link to="/book" class="btn btn-primary">Book Now</Link>
                                </div>
                            </div>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <div class="card shadow p-3 mb-5 bg-white rounded" >
                                <img src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuYWxpfGVufDB8fDB8fHww" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Manali</h5>
                                    <p class="card-text">Explore the beautiful Manali.</p>
                                    <Link to="/book" class="btn btn-primary">Book Now</Link>
                                </div>
                            </div>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <div class="card shadow p-3 mb-5 bg-white rounded" >
                                <img src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuYWxpfGVufDB8fDB8fHww" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Manali</h5>
                                    <p class="card-text">Explore the beautiful Manali.</p>
                                    <Link to="/book" class="btn btn-primary">Book Now</Link>
                                </div>
                            </div>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">


                            <div class="card shadow p-3 mb-5 bg-white rounded" >
                                <img src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuYWxpfGVufDB8fDB8fHww" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Manali</h5>
                                    <p class="card-text">Explore the beautiful Manali.</p>
                                    <Link to="/book" class="btn btn-primary">Book Now</Link>
                                </div>
                            </div>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <div class="card shadow p-3 mb-5 bg-white rounded" >
                                <img src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuYWxpfGVufDB8fDB8fHww" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Manali</h5>
                                    <p class="card-text">Explore the beautiful Manali.</p>
                                    <Link to="/book" class="btn btn-primary">Book Now</Link>
                                </div>
                            </div>


                        </div>
                    </div>
                    <br></br><br></br><br></br><br></br>
<InputRange/>

                </div>
            </div>

            



<Footer/>


        </div>
    )
}

export default Packages