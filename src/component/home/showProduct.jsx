import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

import MyNavbar from "./navbar";
import '../../styles/home/showProduct.css'

function ShowProduct() {

  const [showMYProduct, setShowProduct] = useState([])
  const [offeredPrice, setOfferedPrice] = useState()
  const [discountPercent, setDiscountPercent] = useState(0);
  const { id } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get(`http://127.0.0.1:8000/getProductbyID/${id}`)
      .then(res => {
        const product = res.data.mobileProduct;
        setShowProduct(product);

        // Calculate offered price
        if (product?.productPrice && product?.discountPrice) {
          const productPrice = Number(product.productPrice);
          const discount = Number(product.discountPrice);

          setOfferedPrice(productPrice - discount);

          const percent = 100 - (((productPrice - discount) / productPrice) * 100);
          setDiscountPercent(Math.round(percent));
        }
      })
      .catch(err => {
        console.log("Error on fetching data ", err)
      })
  }, [id])

  return (
    <>
      <MyNavbar hideseller={true} />

      <div className='showProduct-container'>
        {/* =============================================================================================================== */}
        {/* showProduct-container1 */}

        <div className="product-image-container">

          <div className='showProduct-image'>
            <div className="left-image">
              <div><img src={`http://127.0.0.1:8000/${showMYProduct.productImage2}/`} alt="" /></div>
              <div><img src={`http://127.0.0.1:8000/${showMYProduct.productImage3}/`} alt="" /></div>
            </div>

            <div className="right-image">
              <img src={`http://127.0.0.1:8000/${showMYProduct.productImage1}/`} alt="" />
            </div>
          </div>
        </div>




        {/* =============================================================================================================== */}
        {/* showProduct-container2 */}

        <div className='showProduct-container2'>
          <h3>{showMYProduct.productName}</h3>
          <p>powered by <b>{showMYProduct.brandName}</b></p>
          <div className='review'>
            <span> 4.6 ★ </span>
            <span>15,438 Ratings & 685 Reviews</span>
          </div>
          {/* price */}
          <div className="price">
            <p>Extra ₹ {showMYProduct.discountPrice} off</p>
            <p className='org-price'>
              <span>₹{offeredPrice} </span>
              <span><del>₹ {showMYProduct.productPrice}</del>
              </span> <span>{discountPercent}% off</span>
            </p>
          </div>
          {/* warrenty */}
          <div className="warrenty-msg">
            <p>{showMYProduct.brandName}</p>
            <p>1 Year Manufacturer Warranty for Device and 6 Months for In-Box Accessories</p>
          </div>
          {/* highlights */}
          <div className="highlight">
            <h6>Highlights</h6>
            <ul>
              <li>{showMYProduct.internalStorageRam} GB RAM | {showMYProduct.internalStorageRom} GB ROM</li>
              <li>{showMYProduct.batteryCapacity} mAh Battery</li>
              <li>{showMYProduct.chipset} Processor</li>
              <li>{showMYProduct.mainLens} MP + {showMYProduct.wideAngleLens} MP | Back Camera</li>
              <li>{showMYProduct.selfieCamera} MP | Front Camrea</li>
            </ul>
          </div>
          {/* seller Details */}
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
          {/* ================================================================================= */}
          <div className="specification">
            <h5>Specifications</h5>
            {/* warrenty */}
            <div className="warranty-spe">
              <h6>Warrenty</h6>
              <div>
                <span>Warranty Summary </span>
                <span> 1 Year Manufacturer Warranty for Device and 6 Months for In-Box Accessories</span>
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
            {/* Battery & Power Features */}
            <div className="warranty-spe  batterpower ">
              <h6>Battery & Power Features</h6>
              <div>
                <span>Battery Capacity </span>
                <span>{showMYProduct.batteryCapacity} mAh</span>
              </div>
              <div>
                <span>Battery Type </span>
                <span>{showMYProduct.batteryType} </span>
              </div>
              <div>
                <span>Wireless Charging </span>
                <span>{showMYProduct.wirelessCharging ? "Yes" : "No"}</span>
              </div>
              <div>
                <span>Fast Charging </span>
                <span>{showMYProduct.chargingSpeed ? "Yes" : "No"}</span>
              </div>
            </div>
            {/* Dimensions */}
            <div className="warranty-spe  dimensions">
              <h6>Dimensions</h6>
              <div>
                <span>Height</span>
                <span>{showMYProduct.height} mm</span>
              </div>
              <div>
                <span>Width </span>
                <span>{showMYProduct.width} mm</span>
              </div>
              <div>
                <span>Depth </span>
                <span>{showMYProduct.thickness} mm</span>
              </div>
              <div>
                <span>Weight </span>
                <span>{showMYProduct.weight} g</span>
              </div>
            </div>
            {/* Display Features */}
            <div className="warranty-spe  display">
              <h6>Display Features</h6>
              <div>
                <span>Display Size </span>
                <span>({showMYProduct.displaySize} inch)</span>
              </div>
              <div>
                <span>Resolution</span>
                <span>{showMYProduct.displayResolution1} x {showMYProduct.displayResolution2} Pixels</span>
              </div>
              <div>
                <span>GPU </span>
                <span>Qualcomm Adreno {showMYProduct.gpu} </span>
              </div>
              <div>
                <span>Display Type </span>
                <span>{showMYProduct.displayType} </span>
              </div>
              <div>
                <span>Other Features </span>
                <span>{showMYProduct.refreshRate} Hz Refresh Rate</span>
              </div>
            </div>

            {/* Os & Processor Features */}
            <div className="warranty-spe    processor">
              <h6>Os & Processor Features</h6>
              <div>
                <span>Operating System </span>
                <span>{showMYProduct.os} </span>
              </div>
              <div>
                <span>Processor Type </span>
                <span>{showMYProduct.chipset} </span>
              </div>
              <div>
                <span>Processor Core </span>
                <span>{showMYProduct.cpu} </span>
              </div>
            </div>

            {/* Camera Features */}
            <div className="warranty-spe camera">
              <h6>Camera Features</h6>
              <div>
                <span>Primary Camera </span>
                <span>{showMYProduct.mainLens} MP + {showMYProduct.wideAngleLens} MP + {showMYProduct.macroLens} MP  </span>
              </div>
              <div>
                <span>Main Lens  </span>
                <span>{showMYProduct.mainLens} MP</span>
              </div>
              <div>
                <span>Wide Angle Lens </span>
                <span>{showMYProduct.wideAngleLens} MP</span>
              </div>
              <div>
                <span>Macro Lens </span>
                <span>{showMYProduct.macroLens} MP</span>
              </div>
              <div>
                <span>Optical Zoom </span>
                <span>{showMYProduct.opticalZoom} x Optical Zoom {showMYProduct.telePhotoLens ? showMYProduct.telePhotoLens : ""} MP</span>
              </div>
              <div>
                <span>Front Camera </span>
                <span>{showMYProduct.selfieCamera} MP main + wide</span>
              </div>
              <div>
                <span>Video Resolution </span>
                <span>{showMYProduct.mainCameraVideo} </span>
              </div>
            </div>
            {/* Connectivity & Sensors */}
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

            {/* others */}
            <div className="warranty-spe others">
              <h6>Storage & Card Slot</h6>

              <div>
                <span>Card Slot</span>
                <span>{showMYProduct.cardSlot || "N/A"}</span>
              </div>

              <div>
                <span>RAM</span>
                <span>{showMYProduct.internalStorageRam || "N/A"} GB</span>
              </div>

              <div>
                <span>Internal Storage</span>
                <span>{showMYProduct.internalStorageRom || "N/A"} GB</span>
              </div>
            </div>

            {/* Finger Print */}

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
  )
}

export default ShowProduct