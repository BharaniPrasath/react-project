import React, { useState } from "react";
import SellerNavbar from "../seller/seller_navbar";

import axios from 'axios'

import '../../styles/category/addmobileProduct.css';

function AddMobileProduct() {
  const initialFormData = {
    // general
    productName: "",
    brandName: "",
    modelNumber: "",
    launchDate: "",
    productDescription: "",
    // dimension
    height: "",
    width: "",
    thickness: "",
    weight: "",
    build: "",
    simType: "",
    // display
    displayType: "",
    displaySize: "",
    displayResolution1: "",
    displayResolution2: "",
    protection: "",
    refreshRate: "",
    // chipset(or)platform
    os: "",
    chipset: "",
    cpu: "",
    gpu: "",
    // Memory
    cardSlot: "",
    internalStorageRam: "",
    internalStorageRom: "",
    // Camera
    mainLens: "",
    wideAngleLens: "",
    macroLens: "",
    telePhotoLens: "",
    opticalZoom: "",
    mainCameraVideo: "",
    selfieCamera: "",
    selfieWideCamera: "",
    selfieCameraVideo: "",
    // Sound
    loudspeaker: true,
    stereoSpeakers: true,
    audioJack: false,
    // Commons
    wlan: "",
    bluetooth: "",
    usb: "",
    gps: true,
    nfc: false,
    infrared: false,
    radio: false,
    // security
    fingerPrint: "",
    faceUnlock: true,
    // battery
    batteryType: "",
    batteryCapacity: "",
    chargingSpeed: "",
    wirelessCharging: false,
    wirelessChargingSpeed: "",
    //  Other Specifications 
    colors: "",
    modelsAvailable: "",
    sar: "",

    // seller
    productSellerName: "",
    productCompanyName: "",
    sellerPhone: "",
    sellerEmail: "",
    // product image
    productImage1: null,
    productImage2: null,
    productImage3: null,
    // shipping address
    productAddress: "",
    productState: "",
    productCountry: "",
    productPincode: "",
    // Price
    productPrice: "",
    discountPrice: ""
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: type === "checkbox" ? checked : value, });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = new FormData(); // declare first
    const booleanFields = [
      "loudspeaker", "stereoSpeakers", "audioJack",
      "gps", "nfc", "infrared", "radio",
      "faceUnlock", "wirelessCharging"
    ];

    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null) {
        if (booleanFields.includes(key)) {
          dataToSend.append(key, formData[key] ? true : false);
        } else {
          dataToSend.append(key, formData[key]);
        }
      }
    });

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/addProduct/",
        dataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(res.data);
      // ✅ Reset the form here
      setFormData(initialFormData);

    } catch (err) {
      console.error("error on adding data", err);
    }
  };


  return (
    <>
      <SellerNavbar />
      <form onSubmit={handleSubmit} className="mobile-product-form" encType="multipart/form-data">
        {/* --- General Info --- */}
        <h2>General Info</h2>
        <div className="general-info">
          <div className="general1">
            <div className="form-group">
              <label htmlFor="productName">Product Name</label>
              <input required type="text" id="productName" name="productName" placeholder="Product Name" value={formData.productName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="brandName">Brand Name</label>
              <input required type="text" id="brandName" name="brandName" placeholder="Brand Name" value={formData.brandName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="modelNumber">Model Number</label>
              <input required type="text" id="modelNumber" name="modelNumber" placeholder="Model Number" value={formData.modelNumber} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="launchDate">Launch Date</label>
              <input required type="date" id="launchDate" name="launchDate" value={formData.launchDate} onChange={handleChange} />
            </div>
          </div>
          <div className="general2">
            <div className="form-group">
              <label htmlFor="productDescription">Description</label>
              <textarea id="productDescription" rows='4' name="productDescription" placeholder="Description" value={formData.productDescription} onChange={handleChange}></textarea>
            </div>
          </div>
        </div>
        <br />
        <br />

        {/* ============================================================================= */}
        <h2>Dimensions</h2>
        {/* dimension */}
        <div className="dimension">
          <div className="form-group">
            <label htmlFor="height">Height</label>
            <div className="dimension-mm">
              <input required type="text" id="height" maxLength={5} name="height" placeholder="height" value={formData.height}
                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, "").slice(0, 10)}
                onChange={handleChange} />
              <span>mm</span>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="width">Width</label>
            <div className="dimension-mm">
              <input required type="text" id="width" maxLength={5} name="width" placeholder="width" value={formData.width}
                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, "").slice(0, 10)}
                onChange={handleChange} />
              <span>mm</span>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="thickness">Thickness</label>
            <div className="dimension-mm">
              <input required type="text" id="thickness" maxLength={5} name="thickness" placeholder="thickness" value={formData.thickness}
                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, "").slice(0, 10)}
                onChange={handleChange} />
              <span>mm</span>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight</label>
            <div className="dimension-mm">
              <input required type="text" id="weight" maxLength={5} name="weight" placeholder="Weight" value={formData.weight}
                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, "").slice(0, 10)}
                onChange={handleChange} />
              <span>g</span>
            </div>
          </div>
        </div>
        {/* Dimension end */}

        {/* Body and SIM */}
        <div className="body">
          <div className="form-group">
            <label htmlFor="build">Body</label>
            <input required type="text" id="build" name="build" placeholder="Body - Glass front, aluminum frame" value={formData.build} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="simType">SIM Type</label>
            <select id="simType" name="simType" value={formData.simType} onChange={handleChange}>
              <option value="" disabled>Select SIM Type</option>
              <option value="Single SIM (Nano-SIM)">Single SIM (Nano-SIM)</option>
              <option value="Dual SIM (Nano-SIM, dual stand-by)">Dual SIM (Nano-SIM, dual stand-by)</option>
              <option value="eSIM">eSIM</option>
              <option value="Dual SIM + eSIM">Dual SIM + eSIM</option>
            </select>
          </div>
        </div>
        <br /><br />

        {/* ============================================================================= */}
        {/* --- Display --- */}
        <h2>Display</h2>
        <div className="display">
          <div className="display1">
            <div className="form-group">
              <label htmlFor="displayType">Display Type</label>
              <input required type="text" id="displayType" name="displayType" placeholder="AMOLED, 1B colors" value={formData.displayType} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="displaySize">Display Size</label>
              <div className="inch">
                <input required type="text" maxLength={4} id="displaySize" name="displaySize" placeholder="6.7" value={formData.displaySize}
                  onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, "").slice(0, 10)}
                  onChange={handleChange} />
                <span>Inch</span>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="displayResolution">Display Resolution</label>
              <div className="display-resolution">
                <input required type="text" maxLength={4} id="displayResolution" name="displayResolution1" placeholder="1440" value={formData.displayResolution1}
                  onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10)}
                  onChange={handleChange} />
                x
                <input required type="text" maxLength={4} id="displayResolution" name="displayResolution2" placeholder="3200" value={formData.displayResolution2}
                  onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10)}
                  onChange={handleChange} />
                <span>pixels</span>
              </div>
            </div>
          </div>
          <div className="display2">
            <div className="form-group">
              <label htmlFor="protection">Protection</label>
              <input required type="text" id="protection" name="protection" placeholder="Gorilla Glass Victus" value={formData.protection} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="refreshRate">Refresh Rate</label>
              <div className="refresh">
                <input required type="text" id="refreshRate" name="refreshRate" placeholder="120 " value={formData.refreshRate} onChange={handleChange} />
                <span>Hz</span>
              </div>
            </div>
          </div>
        </div>
        <br /><br />

        {/* ============================================================================= */}
        {/* Platform */}
        <h2>Platform</h2>
        <div className="platform-info">
          <div className="form-group">
            <label htmlFor="os">Operating System</label>
            <select name="os" value={formData.os} onChange={handleChange}>
              <option value="" disabled>Select OS</option>
              <option value="Android" >Android</option>
              <option value="IOS" >IOS</option>
              <option value="others" >Others</option>
            </select>

          </div>
          <div className="form-group">
            <label htmlFor="chipset">Chipset</label>
            <input required type="text" id="chipset" name="chipset" placeholder="Snapdragon 8 Gen 2" value={formData.chipset} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="cpu">CPU</label>
            <input required type="text" id="cpu" name="cpu" placeholder="Octa-core" value={formData.cpu} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="gpu">GPU</label>
            <input required type="text" id="gpu" name="gpu" placeholder="Adreno 740" value={formData.gpu} onChange={handleChange} />
          </div>
        </div>
        <br />
        <br />

        {/* ============================================================================= */}
        {/* Memory Varient */}
        <h2>Memory</h2>
        <div className="memory">
          {/* Card Slot */}
          <div className="form-group">
            <label htmlFor="cardSlot">Card Slot</label>
            <select id="cardSlot" name="cardSlot" value={formData.cardSlot} onChange={handleChange} >
              <option value="" disabled>Select Card Slot</option>
              <option value="yes">Yes (memory card)</option>
              <option value="no">No (no memory card)</option>
            </select>
          </div>

          {/* Internal Storage RAM */}
          <div className="form-group">
            <label htmlFor="internalStorageRam">RAM</label>
            <div className="ram">
              <input required type="text" maxLength={2} id="internalStorageRam" name="internalStorageRam" placeholder="8" value={formData.internalStorageRam}
                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 4)}
                onChange={handleChange} />
              <span>GB</span>
            </div>
          </div>

          {/* Internal Storage ROM */}
          <div className="form-group">
            <label htmlFor="internalStorageRom">ROM</label>
            <div className="rom">
              <input required type="text" maxLength={4} id="internalStorageRom" name="internalStorageRom" placeholder="128" value={formData.internalStorageRom}
                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 4)}
                onChange={handleChange} />
              <span>GB</span>
            </div>
          </div>
        </div>
        <br />
        <br />
        {/* ============================================================================= */}
        {/* --- Camera --- */}
        <h2>Camera</h2>
        <div className="camera">
          <br />
          <h5>Back Camera</h5>
          <div className="camera1">
            <div className="all-lens">

              <div className="form-group">
                <label htmlFor="mainLens">Main Lens</label>
                <div className="lens">
                  <input required type="text" maxLength={3} id="mainLens" name="mainLens" placeholder="108" value={formData.mainLens}
                    onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10)}
                    onChange={handleChange} />
                  <span>MP</span>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="wideAngleLens">Wide Angle Lens</label>
                <div className="lens">
                  <input required type="text" maxLength={3} id="wideAngleLens" name="wideAngleLens" placeholder="12" value={formData.wideAngleLens}
                    onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10)}
                    onChange={handleChange} />
                  <span>MP</span>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="macroLens">Macro Lens</label>
                <div className="lens">
                  <input required type="text" maxLength={3} id="macroLens" name="macroLens" placeholder="8" value={formData.macroLens}
                    onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10)}
                    onChange={handleChange} />
                  <span>MP</span>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="telePhotoLens">Telephoto Lens</label>
                <div className="lens">
                  <input required type="text" maxLength={3} id="telePhotoLens" name="telePhotoLens" placeholder="2" value={formData.telePhotoLens}
                    onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10)}
                    onChange={handleChange} />
                  <span>MP</span>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="opticalZoom">Optical Zoom </label>
                <div className="lens optical">
                  <input required type="text" maxLength={3} id="opticalZoom" name="opticalZoom" placeholder="2" value={formData.opticalZoom}
                    onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10)}
                    onChange={handleChange} />
                  <span>x Optical Zoom</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="mainCameraVideo">Main Camera Video</label>
              <select id="mainCameraVideo" name="mainCameraVideo" value={formData.mainCameraVideo} onChange={handleChange}>
                <option value="" disabled>Select Video Quality</option>
                <option value="8k 30fps">8k 30fps</option>
                <option value="4k 120fps">4k 120fps</option>
                <option value="4k 60fps">4k 60fps</option>
                <option value="4k 30fps">4k 30fps</option>
                <option value="1080p 120fps">1080p 120fps</option>
                <option value="1080p 60fps">1080p 60fps</option>
                <option value="1080p 30fps">1080p 30fps</option>
              </select>
            </div>
          </div>
          <br />
          <h5>Front Camera</h5>
          <div className="camera2">
            <div className="all-lens">
              <div className="form-group">
                <label htmlFor="selfieCamera">Selfie Camera</label>
                <div className="lens">
                  <input required type="text" maxLength={3} id="selfieCamera" name="selfieCamera" placeholder="32" value={formData.selfieCamera}
                    onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10)}
                    onChange={handleChange} />
                  <span>MP</span>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="selfieWideCamera">Selfie Wide Camera</label>
                <div className="lens">
                  <input required type="text" maxLength={3} id="selfieWideCamera" name="selfieWideCamera" placeholder="12" value={formData.selfieWideCamera}
                    onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, "")}
                    onChange={handleChange} />
                  <span>MP</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="selfieCameraVideo">Selfie Camera Video</label>
              <select id="selfieCameraVideo" name="selfieCameraVideo" value={formData.selfieCameraVideo} onChange={handleChange} >
                <option value="" disabled>Select Video Quality</option>
                <option value="8k 30fps">8k 30fps</option>
                <option value="4k 120fps">4k 120fps</option>
                <option value="4k 60fps">4k 60fps</option>
                <option value="4k 30fps">4k 30fps</option>
                <option value="1080p 120fps">1080p 120fps</option>
                <option value="1080p 60fps">1080p 60fps</option>
                <option value="1080p 30fps">1080p 30fps</option>
              </select>
            </div>
          </div>
        </div>
        {/* Camera End */}

        <br />

        {/* ============================================================================= */}
        <h2>Addition Information</h2>
        <br />
        {/* --- Sound --- */}
        <h4>Sound</h4>
        <div className="sound">
          <div className="form-group checkbox-group">
            <label>
              <input type="checkbox" name="loudspeaker" checked={formData.loudspeaker} onChange={handleChange} /> Loudspeaker
            </label>
          </div>
          <div className="form-group checkbox-group">
            <label>
              <input type="checkbox" name="stereoSpeakers" checked={formData.stereoSpeakers} onChange={handleChange} /> Stereo Speakers
            </label>
          </div>
          <div className="form-group checkbox-group">
            <label>
              <input type="checkbox" name="audioJack" checked={formData.audioJack} onChange={handleChange} /> Audio Jack
            </label>
          </div>
        </div><br />
        {/* ============================================================================= */}
        {/* Additional features */}
        <div className="comms">
          <h4>Wireless Features</h4>
          <div className="wireless-features">
            <div className="form-group checkbox-group">
              <label>
                <input required type="checkbox" name="nfc" checked={formData.nfc} onChange={handleChange} /> NFC
              </label>
            </div>

            <div className="form-group checkbox-group">
              <label>
                <input required type="checkbox" name="infrared" checked={formData.infrared} onChange={handleChange} /> Infrared
              </label>
            </div>

            <div className="form-group checkbox-group">
              <label>
                <input type="checkbox" name="radio" checked={formData.radio} onChange={handleChange} /> Radio
              </label>
            </div>
            <div className="form-group checkbox-group">
              <label>
                <input required type="checkbox" name="gps" checked={formData.gps} onChange={handleChange} /> GPS
              </label>
            </div>
          </div>

          <div className="other-common">
            <div className="form-group">
              <label>WLAN:</label>
              <input required type="text" name="wlan" value={formData.wlan} onChange={handleChange} placeholder="Wi-Fi 802.11 a/b/g/n/ac/6" />
            </div>

            <div className="form-group">
              <label>Bluetooth: </label>
              <input required type="text" name="bluetooth" value={formData.bluetooth} onChange={handleChange} placeholder="Bluetooth 5.2" />
            </div>
            <div className="form-group">
              <label>USB:</label>
              <input required type="text" name="usb" value={formData.usb} onChange={handleChange} placeholder="USB Type-C 3.2" />
            </div>
          </div>
        </div>
        <br />
        {/* ============================================================================= */}

        {/* Security */}
        <h4>Finger Print</h4>
        <div className="fingerprint-security">
          {/* Fingerprint */}
          <div className="form-group">
            <label htmlFor="fingerPrint">Fingerprint Sensor</label>
            <select id="fingerPrint" name="fingerPrint" value={formData.fingerPrint} onChange={handleChange} >
              <option value="" disabled>Select Fingerprint Type</option>
              <option value="rear-mounted">Rear-mounted</option>
              <option value="side-mounted">Side-mounted</option>
              <option value="front-mounted">Front-mounted</option>
              <option value="under-display-optical">Under-display (Optical)</option>
              <option value="under-display-ultrasonic">Under-display (Ultrasonic)</option>
              <option value="power-button">Power Button Integrated</option>
            </select>
          </div>

          {/* Face Unlock */}
          <div className="form-group">
            <label>Face Unlock</label>
            <div className="face-unlock">
              <label>
                <input type="radio" name="faceUnlock" value="true" checked={formData.faceUnlock === true}
                  onChange={(e) => setFormData({ ...formData, faceUnlock: e.target.value === "true", })} /> Available
              </label>

              <label style={{ marginLeft: "15px" }}>
                <input type="radio" name="faceUnlock" value="false" checked={formData.faceUnlock === false}
                  onChange={(e) => setFormData({ ...formData, faceUnlock: e.target.value === "true" ? true : false, })} /> Not Available
              </label>
            </div>
          </div>
        </div>
        <br />


        {/* ============================================================================= */}
        {/* --- Battery --- */}
        <h3>Battery</h3>
        <div className="battery">
          <div className="battery1">
            <div className="form-group">
              <label htmlFor="batteryType">Battery Type</label>
              <input required type="text" id="batteryType" name="batteryType" placeholder="Li-Ion" value={formData.batteryType} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="batteryCapacity">Battery Capacity</label>
              <div className="batteryMAH">
                <input required type="text" maxLength={5} id="batteryCapacity" name="batteryCapacity" placeholder="5000 mAh" value={formData.batteryCapacity}
                  onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10)}
                  onChange={handleChange} />
                <span>mAh</span>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="chargingSpeed">Charging Speed [wired] </label>
              <div className="batteryMAH batW">
                <input required type="text" maxLength={3} id="chargingSpeed" name="chargingSpeed" placeholder="90 W" value={formData.chargingSpeed}
                  onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10)}
                  onChange={handleChange} />
                <span>W</span>
              </div>
            </div>
          </div>
          {/* wireless charging */}
          <div className="battery2">
            <div className="form-group checkbox-group">
              <label className="wirelesschar">Wireless Charging</label>
              <label className="wirelessChargingSupport">
                <input required type="checkbox" name="wirelessCharging" checked={formData.wirelessCharging} onChange={handleChange} />is Wireless ChargingWireless Charging
              </label>
            </div>
            <div className="form-group checkbox-group">
              <label htmlFor="wirelessCharging">Wireless Charging Speed</label>
              <div className="batteryMAH batW">
                <input required type="text" maxLength={3} name="wirelessChargingSpeed" placeholder="12" value={formData.wirelessChargingSpeed} disabled={!formData.wirelessCharging}
                  onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, "")}
                  onChange={handleChange} />
                <span>W</span>
              </div>
            </div>
          </div>
        </div>
        <br />
        {/* ============================================================================= */}
        {/* Other specification */}
        <h2>Other Specs</h2>
        <div className="other-specs">
          {/* Models Available (RAM + Storage) */}
          <div className="form-group">
            <label htmlFor="modelsAvailable">Models Available</label>
            <select id="modelsAvailable" name="modelsAvailable" value={formData.modelsAvailable} onChange={handleChange}>
              <option value="" disabled>Select Model</option>
              <option value="6 GB | 64 GB">6 GB | 64 GB</option>
              <option value="6 GB | 128 GB">6 GB | 128 GB</option>
              <option value="6 GB | 256 GB">6 GB | 256 GB</option>
              <option value="8 GB | 128 GB">8 GB | 128 GB</option>
              <option value="8 GB | 256 GB">8 GB | 256 GB</option>
              <option value="8 GB | 512 GB">8 GB | 512 GB</option>
              <option value="12 GB | 128 GB">12 GB | 128 GB</option>
              <option value="12 GB | 256 GB">12 GB | 256 GB</option>
              <option value="12 GB | 512 GB">12 GB | 512 GB</option>
              <option value="12 GB | 1 TB">12 GB | 1 TB</option>
              <option value="16 GB | 128 GB">16 GB | 128 GB</option>
              <option value="16 GB | 256 GB">16 GB | 256 GB</option>
              <option value="16 GB | 512 GB">16 GB | 512 GB</option>
              <option value="16 GB | 1 TB">16 GB | 1 TB</option>
            </select>
          </div>

          {/* Colors */}
          <div className="form-group">
            <label htmlFor="colors">Mobile Colors</label>
            <input required type="text" id="colors" name="colors" placeholder="Black, Cream, Green, etc" value={formData.colors} onChange={handleChange} />
          </div>
          {/* SAR */}
          <div className="form-group">
            <label htmlFor="sar">SAR</label>
            <div className="batteryMAH">

              <input required type="text" maxLength={4} id="sar" name="sar" placeholder="1.2 W/kg" value={formData.sar}
                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, "").slice(0, 10)}
                onChange={handleChange} />
              <span>W/kg</span>
            </div>
          </div>
        </div>
        <br />


        {/* ============================================================================= */}
        {/* --- Seller Info --- */}
        <h2>Seller Info</h2>
        <div className="product-seller">
          <div className="product-seller1">
            <div className="form-group">
              <label htmlFor="productSellerName">Seller Name</label>
              <input required type="text" id="productSellerName" name="productSellerName" placeholder="Seller Name" value={formData.productSellerName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="productCompanyName">Company Name</label>
              <input required type="text" id="productCompanyName" name="productCompanyName" placeholder="Company Name" value={formData.productCompanyName} onChange={handleChange} />
            </div>
          </div>
          <div className="product-seller2">
            <div className="form-group">
              <label htmlFor="sellerPhone">Phone</label>
              <div className="seller-phone">
                <span> +91</span>
                <input required type="text" maxLength={10} id="sellerPhone" name="sellerPhone" placeholder="Phone" value={formData.sellerPhone}
                  onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10)}
                  onChange={handleChange} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="sellerEmail">Email</label>
              <input required type="email" id="sellerEmail" name="sellerEmail" placeholder="Email" value={formData.sellerEmail} onChange={handleChange} />
            </div>
          </div>
        </div>
        {/* ============================================================================= */}
        {/* --- Images --- */}
        <h2>Product Images</h2>
        <div className="product-images">
          {/* Image 1 */}
          <div className="form-group">
            <label htmlFor="productImage1">Image 1</label>
            <input required type="file" id="productImage1" name="productImage1" accept="image/*"
              onChange={(e) => setFormData({ ...formData, productImage1: e.target.files[0] })} />

            {formData.productImage1 && (
              <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                <img src={URL.createObjectURL(formData.productImage1)} alt="Preview 1" style={{ width: "100px" }} />
              </div>
            )}
          </div>

          {/* Image 2 */}
          <div className="form-group">
            <label htmlFor="productImage2">Image 2</label>
            <input required type="file" id="productImage2" name="productImage2" accept="image/*"
              onChange={(e) => setFormData({ ...formData, productImage2: e.target.files[0] })} />
            {formData.productImage2 && (
              <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                <img src={URL.createObjectURL(formData.productImage2)} alt="Preview 2" style={{ width: "100px" }} />
              </div>
            )}
          </div>

          {/* Image 3 */}
          <div className="form-group">
            <label htmlFor="productImage3">Image 3</label>
            <input required type="file" id="productImage3" name="productImage3" accept="image/*"
              onChange={(e) => setFormData({ ...formData, productImage3: e.target.files[0] })} />
            {formData.productImage3 && (
              <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                <img src={URL.createObjectURL(formData.productImage3)} alt="Preview 3" style={{ width: "100px" }} />
              </div>
            )}
          </div>
        </div>



        {/* ============================================================================= */}
        {/* --- Shipping --- */}
        <h2>Shipping</h2>
        <div className="product-address">
          <div className="address1">
            <div className="form-group">
              <label htmlFor="productAddress">Address</label>
              <input required type="text" id="productAddress" name="productAddress" placeholder="Address" value={formData.productAddress} onChange={handleChange} />
            </div>
          </div>
          <div className="address2">

            <div className="form-group">
              <label htmlFor="productState">State</label>
              <input required type="text" id="productState" name="productState" placeholder="State" value={formData.productState} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="productCountry">Country</label>
              <input required type="text" id="productCountry" name="productCountry" placeholder="Country" value={formData.productCountry} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="productPincode">Pincode</label>
              <input required type="text" maxLength={6} id="productPincode" name="productPincode" placeholder="Pincode" value={formData.productPincode}
                onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, "") }}
                onChange={handleChange} />
            </div>
          </div>
        </div>


        {/* ============================================================================= */}
        {/* --- Pricing --- */}
        <h2>Pricing</h2>
        <div className="product-price">
          <div className="form-group">
            <label htmlFor="productPrice">Price</label>
            <div className="product-original-price">
              <span> ₹</span>
              <input required type="text" id="productPrice" name="productPrice" placeholder="Price" value={formData.productPrice}
                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, "")}
                onChange={handleChange} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="discountPrice">Discount Price</label>
            <div className="product-discount-price">
              <span> ₹</span>
              <input required type="text" maxLength={5} id="discountPrice" name="discountPrice" placeholder="Discount Price" value={formData.discountPrice}
                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, "")}
                onChange={handleChange} />
            </div>
          </div>
        </div>
        <button type="submit" className="product-submit-btn">Add Mobile Product</button>
      </form >
    </>
  );
}

export default AddMobileProduct;
