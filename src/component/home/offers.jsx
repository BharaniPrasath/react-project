import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/home/offer.css";

import ac from '../../assets/offer_images/ac.png'
import fridge from '../../assets/offer_images/fridge.png'
import washing_machine from '../../assets/offer_images/washing_machine.png'
import microwave from '../../assets/offer_images/microwave.png'

import mobile from '../../assets/offer_images/mobile.png'
import cpu from '../../assets/offer_images/gaming_cpu.png'
import watches from '../../assets/offer_images/watches.png'
import laptop from '../../assets/offer_images/laptops.png'

function Offer() {
  const offer_img = [
    { id: 1, name: "AC", img: ac },
    { id: 2, name: "Refrigerators", img: fridge },
    { id: 3, name: "Washine Machine", img: washing_machine },
    { id: 4, name: "Microwave oven", img: microwave },
  ]
  const right_offer=[
    { id: 1, name: "Gaming Laptops", img: laptop },
    { id: 2, name: "Smart Watches", img: watches },
    { id: 3, name: "Gaming Components", img: cpu },
    { id: 4, name: "Mobile Accesories", img: mobile },
  ]

  return (
    <div>
      <Container fluid className="my-4 px-3">
        <Row className="g-3 ">
          {/* Left Column */}
          <Col lg={6} md={6} xs={12}>
            <div className="offer-card p-3 h-100">
              <h5 className="mb-3">Offer available at 10 <b>%</b></h5>
              <Row className="g-2" >
                {offer_img.map((item) => (
                  <Col xs={6} className="image-container offer" key={item.id}>
                    <a href="#">
                      <img src={item.img} alt="offer products" className="img-fluid" />
                      <h6>{item.name}</h6>
                    </a>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>


          {/* Right Column */}
          <Col lg={6} md={6} xs={12}>
            <div className="offer-card p-3 h-100">
              <h5 className="mb-3">Offer available at 30 <b>%</b></h5>
              <Row className="g-2" >
                {right_offer.map((item) => (
                  <Col xs={6} className="image-container" key={item.id}>
                    <a href="#">
                      <img src={item.img} alt="offer products" className="img-fluid" />
                      <h6>{item.name}</h6>
                    </a>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="new-launch-container">
        <h5>New Arrivals !</h5>
        <div className="new-launch-boxes">
          <div className="new-launch-box">
            <span><p>Smart Mobile</p><h4>Iphone 17</h4></span>
            <img src="https://www.apple.com/newsroom/images/2025/09/apple-debuts-iphone-17/tile/Apple-iPhone-17-hero-250909-lp.jpg.og.jpg?202509091836" alt="" />
          </div>
          <div className="new-launch-box">
            <span><p>Smart Mobile</p><h4>Iphone 17</h4></span>
            <img src="https://www.apple.com/newsroom/images/2025/09/apple-debuts-iphone-17/tile/Apple-iPhone-17-hero-250909-lp.jpg.og.jpg?202509091836" alt="" />
          </div>
          <div className="new-launch-box">
            <span><p>Smart Mobile</p><h4>Iphone 17</h4></span>
            <img src="https://www.apple.com/newsroom/images/2025/09/apple-debuts-iphone-17/tile/Apple-iPhone-17-hero-250909-lp.jpg.og.jpg?202509091836" alt="" />
          </div>
        </div>
      </div>
      <div className="deal-container">
        <h5>Deal of the Month</h5>
        <div className="deal-products">
          <div className="deal"><img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-laptop-color-illustration-png-image_13136754.png" alt="" /><span>Laptops</span><span className="deal-price">From ₹27000</span></div>
          <div className="deal"><img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-laptop-color-illustration-png-image_13136754.png" alt="" /><span>Laptops</span><span className="deal-price">From ₹27000</span></div>
          <div className="deal"><img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-laptop-color-illustration-png-image_13136754.png" alt="" /><span>Laptops</span><span className="deal-price">From ₹27000</span></div>
          <div className="deal"><img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-laptop-color-illustration-png-image_13136754.png" alt="" /><span>Laptops</span><span className="deal-price">From ₹27000</span></div>
          <div className="deal"><img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-laptop-color-illustration-png-image_13136754.png" alt="" /><span>Laptops</span><span className="deal-price">From ₹27000</span></div>
          <div className="deal"><img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-laptop-color-illustration-png-image_13136754.png" alt="" /><span>Laptops</span><span className="deal-price">From ₹27000</span></div>
          <div className="deal"><img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-laptop-color-illustration-png-image_13136754.png" alt="" /><span>Laptops</span><span className="deal-price">From ₹27000</span></div>
          <div className="deal"><img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-laptop-color-illustration-png-image_13136754.png" alt="" /><span>Laptops</span><span className="deal-price">From ₹27000</span></div>
          <div className="deal"><img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-laptop-color-illustration-png-image_13136754.png" alt="" /><span>Laptops</span><span className="deal-price">From ₹27000</span></div>
          <div className="deal"><img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-laptop-color-illustration-png-image_13136754.png" alt="" /><span>Laptops</span><span className="deal-price">From ₹27000</span></div>
        </div>
      </div>

      {/* New Launch Container */}

    </div>


  );
}

export default Offer;
