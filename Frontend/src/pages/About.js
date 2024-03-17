import React from 'react'
import about1 from "../assets/about1.png";
import Footer from "../components/footer";
import { Button } from "react-bootstrap";
import Navigation from '../components/Navigation'
function About() {
  return (
    <div>
      <Navigation/>
      <section id="about ">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img src={about1} alt="About" className="w-75 mt-5" />
            </div>
            <div className="col-md-6">
              <h3 className="fs-5 mb-0">About us</h3>
              <h1 className="display-6 mb-2">
                Who <b>We</b> Are
              </h1>
              <hr className="w-50" />
              <p className="lead mb-4 ">
                CodeCollab est une plateforme dédiée à l'entraide et à la
                collaboration entre étudiants en génie logiciel, TIC, 3IL, etc..
                Elle offre un espace où les étudiants peuvent partager des
                connaissances, résoudre des problèmes de programmation ensemble
                et développer leurs compétences techniques.
              </p>
              <Button className="btnn btn-primary ms-2 rounded-pill px-4 py-2">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    <Footer/>
    </div>
  );
}

export default About