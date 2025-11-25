import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBolt } from "@fortawesome/free-solid-svg-icons";
import { mobiles } from '../../component/mobiles/mobileProduct.jsx'


import MyNavbar from "./navbar";
import "../../styles/home/showProduct.css";

function ShowMobileProduct() {
    const [showMYProduct, setShowProduct] = useState({});
    const [offeredPrice, setOfferedPrice] = useState(0);
    const [discountPercent, setDiscountPercent] = useState(0);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);

        // find product locally (NO axios)
        const product = mobiles.find((item) => item.id === Number(id));

        if (product) {
            setShowProduct(product);

            const price = Number(product.productPrice);
            const discountAmount = Number(product.discountPrice);

            setOfferedPrice(price - discountAmount);

            const percent = (discountAmount / price) * 100;
            setDiscountPercent(Math.round(percent));
        }

        setLoading(false);
    }, [id]);

    if (loading) {
        return (
            <>
                <MyNavbar hideseller={true} />
                <div className="loading">Loading product...</div>
            </>
        );
    }

    return (
        <>
            <MyNavbar hideseller={true} />

            <div className="showProduct-container">
                {/* IMAGE SECTION ====================================================================== */}
                <div className="product-image-container">
                    <div className="showProduct-image">
                        <div className="left-image">
                            <div className="image-box">
                                <img src={showMYProduct.productImage1} alt={showMYProduct.productName} />
                            </div>
                            <div className="image-box">
                                <img src={showMYProduct.productImage1} alt={showMYProduct.productName} />
                            </div>
                        </div>

                        <div className="right-image">
                            <img src={showMYProduct.productImage1} alt={showMYProduct.productName} />

                        </div>
                    </div>

                    {/* ADD TO CART BUTTONS */}
                    <div className="add-to-button-container">
                        <button
                            className="addtocartbtn add-to-cart"
                        >
                            <FontAwesomeIcon icon={faShoppingCart} className="icon" />
                            ADD TO CART
                        </button>

                        <button className="addtocartbtn buy-now">
                            <FontAwesomeIcon icon={faBolt} className="icon" />
                            BUY NOW
                        </button>
                    </div>
                </div>

                {/* PRODUCT DETAILS ==================================================================== */}
                <div className="showProduct-container2">
                    <h3>{showMYProduct.productName}</h3>
                    <p>
                        powered by <b>{showMYProduct.brandName}</b>
                    </p>

                    <div className="review">
                        <span>4.6 ★</span>
                        <span>15,438 Ratings & 685 Reviews</span>
                    </div>

                    {/* PRICE */}
                    <div className="price">
                        <p>Extra ₹ {offeredPrice} off</p>

                        <p className="org-price">
                            <span>₹{showMYProduct.discountPrice}</span>
                            <span>
                                <del>₹{showMYProduct.productPrice}</del>
                            </span>
                            <span>{discountPercent}% off</span>
                        </p>
                    </div>

                    {/* WARRANTY */}
                    <div className="warrenty-msg">
                        <p>{showMYProduct.brandName}</p>
                        <p>
                            1 Year Manufacturer Warranty for Device and 6 Months for In-Box
                            Accessories
                        </p>
                    </div>

                    {/* HIGHLIGHTS */}
                    <div className="highlight">
                        <h6>Highlights</h6>
                        <ul>
                            <li>
                                {showMYProduct.internalStorageRam} GB RAM |{" "}
                                {showMYProduct.internalStorageRom} GB ROM
                            </li>
                            <li>{showMYProduct.batteryCapacity} mAh Battery</li>
                            <li>{showMYProduct.chipset} Processor</li>
                            <li>
                                {showMYProduct.mainLens} MP + {showMYProduct.wideAngleLens} MP |
                                Back Camera
                            </li>
                            <li>{showMYProduct.selfieCamera} MP | Front Camera</li>
                        </ul>
                    </div>

                    {/* SELLER */}
                    <div className="seller-details">
                        <div>
                            <h6>Seller</h6>
                        </div>
                        <div>
                            <h5>{showMYProduct.productCompanyName}</h5>
                            <ul>
                                <li>7 Days Brand Support</li>
                                <li>GST invoice available</li>
                            </ul>
                        </div>
                    </div>

                    {/* SPECIFICATIONS SECTION ============================================================ */}
                    <div className="specification">
                        <h5>Specifications</h5>

                        {/* WARRANTY */}
                        <div className="warranty-spe">
                            <h6>Warranty</h6>
                            <div>
                                <span>Warranty Summary</span>
                                <span>
                                    1 Year Manufacturer Warranty for Device and 6 Months for
                                    In-Box Accessories
                                </span>
                            </div>
                            <div>
                                <span>Covered in Warranty</span>
                                <span>Manufacturing Defects Only</span>
                            </div>
                            <div>
                                <span>Domestic Warranty</span>
                                <span>1 Year</span>
                            </div>
                        </div>

                        {/* BATTERY */}
                        <div className="warranty-spe batterpower">
                            <h6>Battery & Power Features</h6>
                            <div>
                                <span>Battery Capacity</span>
                                <span>{showMYProduct.batteryCapacity} mAh</span>
                            </div>
                            <div>
                                <span>Battery Type</span>
                                <span>{showMYProduct.batteryType}</span>
                            </div>
                            <div>
                                <span>Wireless Charging</span>
                                <span>{showMYProduct.wirelessCharging ? "Yes" : "No"}</span>
                            </div>
                            <div>
                                <span>Fast Charging</span>
                                <span>{showMYProduct.chargingSpeed ? "Yes" : "No"}</span>
                            </div>
                        </div>

                        {/* DIMENSIONS */}
                        <div className="warranty-spe dimensions">
                            <h6>Dimensions</h6>
                            <div>
                                <span>Height</span>
                                <span>{showMYProduct.height} mm</span>
                            </div>
                            <div>
                                <span>Width</span>
                                <span>{showMYProduct.width} mm</span>
                            </div>
                            <div>
                                <span>Depth</span>
                                <span>{showMYProduct.thickness} mm</span>
                            </div>
                            <div>
                                <span>Weight</span>
                                <span>{showMYProduct.weight} g</span>
                            </div>
                        </div>

                        {/* DISPLAY */}
                        <div className="warranty-spe display">
                            <h6>Display Features</h6>
                            <div>
                                <span>Display Size</span>
                                <span>({showMYProduct.displaySize} inch)</span>
                            </div>
                            <div>
                                <span>Resolution</span>
                                <span>
                                    {showMYProduct.displayResolution1} x{" "}
                                    {showMYProduct.displayResolution2} Pixels
                                </span>
                            </div>
                            <div>
                                <span>GPU</span>
                                <span>Qualcomm Adreno {showMYProduct.gpu}</span>
                            </div>
                            <div>
                                <span>Display Type</span>
                                <span>{showMYProduct.displayType}</span>
                            </div>
                            <div>
                                <span>Other Features</span>
                                <span>{showMYProduct.refreshRate} Hz Refresh Rate</span>
                            </div>
                        </div>

                        {/* PROCESSOR */}
                        <div className="warranty-spe processor">
                            <h6>OS & Processor Features</h6>
                            <div>
                                <span>Operating System</span>
                                <span>{showMYProduct.os}</span>
                            </div>
                            <div>
                                <span>Processor Type</span>
                                <span>{showMYProduct.chipset}</span>
                            </div>
                            <div>
                                <span>Processor Core</span>
                                <span>{showMYProduct.cpu}</span>
                            </div>
                        </div>

                        {/* CAMERA */}
                        <div className="warranty-spe camera">
                            <h6>Camera Features</h6>
                            <div>
                                <span>Primary Camera</span>
                                <span>
                                    {showMYProduct.mainLens} MP + {showMYProduct.wideAngleLens} MP
                                    + {showMYProduct.macroLens} MP
                                </span>
                            </div>
                            <div>
                                <span>Main Lens</span>
                                <span>{showMYProduct.mainLens} MP</span>
                            </div>
                            <div>
                                <span>Wide Angle Lens</span>
                                <span>{showMYProduct.wideAngleLens} MP</span>
                            </div>
                            <div>
                                <span>Macro Lens</span>
                                <span>{showMYProduct.macroLens} MP</span>
                            </div>
                            <div>
                                <span>Optical Zoom</span>
                                <span>
                                    {showMYProduct.opticalZoom}x Optical Zoom{" "}
                                    {showMYProduct.telePhotoLens || ""}
                                </span>
                            </div>
                            <div>
                                <span>Front Camera</span>
                                <span>{showMYProduct.selfieCamera} MP</span>
                            </div>
                            <div>
                                <span>Video Resolution</span>
                                <span>{showMYProduct.mainCameraVideo}</span>
                            </div>
                        </div>

                        {/* CONNECTIVITY */}
                        <div className="warranty-spe Sensorsx">
                            <h6>Connectivity & Sensors</h6>

                            <div>
                                <span>WLAN</span>
                                <span>{showMYProduct.wlan || "N/A"}</span>
                            </div>
                            <div>
                                <span>Bluetooth</span>
                                <span>{showMYProduct.bluetooth || "N/A"}</span>
                            </div>
                            <div>
                                <span>USB</span>
                                <span>{showMYProduct.usb || "N/A"}</span>
                            </div>
                            <div>
                                <span>GPS</span>
                                <span>{showMYProduct.gps ? "Yes" : "No"}</span>
                            </div>
                            <div>
                                <span>NFC</span>
                                <span>{showMYProduct.nfc ? "Yes" : "No"}</span>
                            </div>
                            <div>
                                <span>Infrared</span>
                                <span>{showMYProduct.infrared ? "Yes" : "No"}</span>
                            </div>
                            <div>
                                <span>Radio</span>
                                <span>{showMYProduct.radio ? "Yes" : "No"}</span>
                            </div>
                            <div>
                                <span>SAR Value</span>
                                <span>{showMYProduct.sar || "N/A"} W/kg</span>
                            </div>
                        </div>

                        {/* STORAGE */}
                        <div className="warranty-spe others">
                            <h6>Storage & Card Slot</h6>

                            <div>
                                <span>Card Slot</span>
                                <span>{showMYProduct.cardSlot || "N/A"}</span>
                            </div>
                            <div>
                                <span>RAM</span>
                                <span>{showMYProduct.internalStorageRam} GB</span>
                            </div>
                            <div>
                                <span>Internal Storage</span>
                                <span>{showMYProduct.internalStorageRom} GB</span>
                            </div>
                        </div>

                        {/* BIOMETRICS */}
                        <div className="warranty-spe processor">
                            <h6>Biometrics & Audio Features</h6>
                            <div>
                                <span>Fingerprint</span>
                                <span>{showMYProduct.fingerPrint || "N/A"}</span>
                            </div>
                            <div>
                                <span>Face Unlock</span>
                                <span>{showMYProduct.faceUnlock ? "Yes" : "No"}</span>
                            </div>
                            <div>
                                <span>Loudspeaker</span>
                                <span>{showMYProduct.loudspeaker ? "Yes" : "No"}</span>
                            </div>
                            <div>
                                <span>Stereo Speakers</span>
                                <span>{showMYProduct.stereoSpeakers ? "Yes" : "No"}</span>
                            </div>
                            <div>
                                <span>Audio Jack</span>
                                <span>{showMYProduct.audioJack ? "Yes" : "No"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShowMobileProduct;
