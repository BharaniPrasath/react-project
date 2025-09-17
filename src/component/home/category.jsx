import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import watch from "../../assets/category/watch.png";
import earphone from "../../assets/category/earphone.png";
import kitchen from "../../assets/category/kitchen.jpg";
import laptop from "../../assets/category/laptop.png";
import toys from "../../assets/category/toys.jpg";
import tv from "../../assets/category/tv.png";
import mobile from "../../assets/category/mobile.png";

import car1 from '../../assets/carousel/car1.jpeg'
import car2 from '../../assets/carousel/car2.png'
import car3 from '../../assets/carousel/car3.png'

import "../../styles/home/category.css";

function Category() {
    const category_img = [
        { id: 1, name: "Mobile", img: mobile, link: "/mobilephones" },
        { id: 2, name: "Watch", img: watch },
        { id: 3, name: "Earphone", img: earphone },
        { id: 4, name: "Kitchen", img: kitchen },
        { id: 5, name: "Laptop", img: laptop },
        { id: 6, name: "TV", img: tv },
        { id: 7, name: "Toys", img: toys },
    ];
    const carousel_image = [
        { id: 1, img: car1 },
        { id: 2, img: car2 },
        { id: 3, img: car3 },
    ]

    return (

        <div className="main-container">
            {/* Category */}
            <div className="category-bar">
                <div className="category-bar-items">
                    {category_img.map((item) => (
                        <Link to={item.link} key={item.id} className="category-link">
                            <img src={item.img} alt={item.name} className="category-img" />
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* CAROUSEL */}
            <div className="carousel-bar">
                <Carousel className="inner-carousel">
                    {carousel_image.map((item) => (
                        <Carousel.Item key={item.id} className="carousel-item">
                                <img
                                    src={item.img}
                                    className=""
                                    alt="First slide"
                                />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Category;
