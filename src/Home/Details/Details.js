import React from 'react';
import {Carousel} from 'react-bootstrap';
import './Details.css';
import carosoul1 from '../../Image/illustration-thumbs-up-icon_53876-15710.webp';
import carosoul2 from '../../Image/login.jpg';
import carosoul3 from '../../Image/i.webp';
const Details = () => {
    return (
        <div className='details'>
            <div>
            <Carousel>
  <Carousel.Item>
    <img
    // style = {{height: 500, width : 1500}}
   
      className="d-block carousel-img "
      src={carosoul1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    //  style = {{height: 500}}
      className="d-block carousel-img "
      src={carosoul2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    // style = {{height: 500}}
      className="d-block carousel-img "
      src={carosoul3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>




            </div>
        </div>
    );
};

export default Details;