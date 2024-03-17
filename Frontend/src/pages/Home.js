import React from 'react'
import { Button } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import About from './About';
import Footer from "../components/footer";
import Services from './services';
import Navigation from '../components/Navigation';
import Slider from '../components/slider';
function Home() {
  return (
    <div>
      <Navigation/>
      <section id="homee">
        <div className="container">
          <div className="row justify-content-center">
            <Slider/>
            
          </div>
        </div>
      </section>
     
      <Footer/>
     
    </div>
  );
  
}

export default Home