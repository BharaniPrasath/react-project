import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
import axios from 'axios';

import { mobiles } from '../../component/mobiles/mobileProduct.jsx'
import { electronics } from '../../component/topdeals/topdeal.jsx'

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/home/offer.css";


// offer images

import ac from '../../assets/offer_images/ac.png'
import fridge from '../../assets/offer_images/fridge.png'
import washing_machine from '../../assets/offer_images/washing_machine.png'
import microwave from '../../assets/offer_images/microwave.png'

import mobile from '../../assets/offer_images/mobile.png'
import cpu from '../../assets/offer_images/gaming_cpu.png'
import watches from '../../assets/offer_images/watches.png'
import laptop from '../../assets/offer_images/laptops.png'


function Offer() {
  const [mobileProduct, setMobileProduct] = useState([])
  const offer_img = [
    { id: 1, name: "AC", img: ac },
    { id: 2, name: "Refrigerators", img: fridge },
    { id: 3, name: "Washine Machine", img: washing_machine },
    { id: 4, name: "Microwave oven", img: microwave },
  ]
  const right_offer = [
    { id: 1, name: "Gaming Laptops", img: laptop },
    { id: 2, name: "Smart Watches", img: watches },
    { id: 3, name: "Gaming Components", img: cpu },
    { id: 4, name: "Mobile Accesories", img: mobile },
  ]


  useEffect(() => {
    axios.get('http://127.0.0.1:8000/getProduct/', { withCredentials: true })

      .then(res => {
        setMobileProduct(res.data.mobileProduct)
      })
      .catch(err => {
        console.log("Error on fetching data ", err)
      })
  }, [])

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

      {/* ====================================================================================================================================== */}


      {/* New arrivals */}


      <div className="new-launch-container">
        {mobileProduct && mobileProduct.length > 0 ? (
          <>
            <h5>New Arrivals !</h5>
            <div className="new-launch-boxes">
              {mobileProduct.map((product) => (
                <div key={product.id} className="new-launch-box">
                  <Link to={`showproduct/${product.id}`}>
                    <img src={`http://127.0.0.1:8000/${product.productImage1}`} alt="" />
                    <p>{product.productName}</p>
                  </Link>
                </div>
              ))}
            </div>
          </>
        ) : (

          <>
            <h5>New Arrivals!</h5>
            <div className="new-launch-boxes">
              {mobiles.map((mobile, index) => (
                <div key={index} className="new-launch-box">
                  <img src={mobile.productImage1} alt={mobile.productName} />
                  <p>{mobile.productName}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>


      {/* ====================================================================================================================================== */}
      {/* Deal container */}
      <div className="deal-container">
        <h5>Deal of the Month</h5>
        <div className="deal-products">
          {electronics.map((item, index) => (
            <div className="deal" key={index}>
              <img src={item.productImage1} alt={item.name} />
              <br />
              <span>{item.productName}</span>
              <span className="deal-price">₹ {item.discountPrice}</span>
            </div>
          ))}
        </div>
      </div>


    </div >


  );
}

export default Offer;
