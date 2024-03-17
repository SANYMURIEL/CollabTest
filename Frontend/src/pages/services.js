import React from 'react'
import Carou from "../components/caroussel";
import Footer from "../components/footer";
import Navigation from '../components/Navigation'
function Services() {
  return (
    <div>
      <Navigation/>
      <section id="service">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 mb-0 text-center">Our Services</h3>
              <h1 className="display-6 mb-4 text-center">
                Our <b>Awesome</b> Services
              </h1>
              <hr className="w-65 mx-auto" />
            </div>
          </div>
          <Carou />
        </div>
      </section>
     <Footer/>
    </div>
  );
}

export default Services