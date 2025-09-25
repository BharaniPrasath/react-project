import React, { useEffect, useState } from 'react'
import SellerNavbar from '../seller/seller_navbar'

import '../../styles/category/addProduct.css'

function AddProduct() {


  const [formData, setFormData] = useState({
    productName: "",
    brandName: "",
    productDescription: "",
    productHighlight: "",
    productCategory: "all",
    productPrice: "",
    discountPrice: "",
    productSellerName: "",
    productCompanyName: "",
    companyLocation: "",
    productAddress: "",
    productState: "",
    productCountry: "",
    productPincode: "",
    sellerPhone: "",
    sellerEmail: "",
    productImage1: null,
    productImage2: null,
    productImage3: null,
  });


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const { name } = e.target;

    if (selectedFile) {
      const allowedTypes = ["image/jpeg", "image/png"];
      if (!allowedTypes.includes(selectedFile.type)) {
        setImageError("Only JPG and PNG images are allowed!");
        e.target.value = "";
        return;
      }

      setFormData({
        ...formData,
        [name]: selectedFile,
      });
      setImageError(""); // clear previous error
    }
  };

  const [imageError, setImageError] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()






  }

  return (
    <div>

      <SellerNavbar />
      <div className='product-main-container'>

        <form onSubmit={handleSubmit} className='addproduct-form'>
          <div className='product-left-side'>
            <h2>Add Your Product</h2>
            <div className='product-details'>
              <label htmlFor="productName">Product Name</label>
              <input type="text" name='productName' value={formData.productName} onChange={handleChange} placeholder='Ex : Iphone 17 pro max(256)' required />

              <label htmlFor="productName">Brand Name</label>
              <input type="text" name='brandName' value={formData.brandName} onChange={handleChange} placeholder='Apple' required />

              <label htmlFor="productName">Product Highlight</label>
              <input type="text" name='productHighlight' value={formData.productHighlight} onChange={handleChange} placeholder='Enter the product highlight' required />

              <label htmlFor="productName">Product Description</label>
              <textarea name="productDescription" value={formData.productDescription} onChange={handleChange} placeholder='give the detailed Description about the product for 200-300 lines' rows="5" cols="40" required></textarea>
            </div>

            {/* Selling Category */}
            <div className="mb-3" style={{ marginTop: "-10px" }}>
              <label>What are you looking to sell?</label>
              <select
                style={{ marginTop: "10px" }}
                name="productCategory"
                value={formData.productCategory}
                onChange={handleChange}
                className="form-select"
                required>
                <option value="">-- Select Category --</option>
                <option value="all">All Categories</option>
                <option value="mobile">Mobile Phones</option>
                <option value="watch">Watches</option>
                <option value="laptop">Laptop</option>
                <option value="shoes">Shoes</option>
                <option value="tv">Television</option>
                <option value="earphones">Ear Phones</option>
                <option value="toys">Toys</option>
                <option value="books">Books</option>
              </select>
            </div>
            {/* Price section */}
            <h2 style={{ marginTop: "60px" }}>Product Price detail</h2>
            <div className="product-pricesection">
              <div className="product-price">
                <label htmlFor="prodctPrice">Price</label>
                <div className='product-price-wrapper'>
                  <span>₹</span>
                  <input type="text" name="productPrice" inputMode="decimal" placeholder='99999.99' value={formData.productPrice}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9.]/g, "");
                    }}
                    onChange={(e) => {
                      handleChange(e);
                      let value = e.target.value;
                      // prevent multiple dots
                      if ((value.match(/\./g) || []).length > 1) {
                        value = value.substring(0, value.length - 1);
                      }
                      // limit to 2 decimal places
                      if (value.includes(".")) {
                        const [intPart, decimalPart] = value.split(".");
                        if (decimalPart.length > 2) {
                          value = `${intPart}.${decimalPart.slice(0, 2)}`;
                        }
                      }
                      e.target.value = value;
                    }}
                    required />
                </div>
              </div>

              {/* discount Price */}
              <div className="product-discount-price">
                <label htmlFor="discountPrice">Discount Price</label>
                <div className='product-price-wrapper'>
                  <span>₹</span>
                  <input type="text" name="discountPrice" inputMode="decimal" value={formData.discountPrice} placeholder='190.90(optional)'
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9.]/g, "");
                    }}
                    onChange={(e) => {
                      let value = e.target.value;
                      if ((value.match(/\./g) || []).length > 1) {
                        value = value.substring(0, value.length - 1);
                      }
                      if (value.includes(".")) {
                        const [intPart, decimalPart] = value.split(".");
                        if (decimalPart.length > 2) {
                          value = `${intPart}.${decimalPart.slice(0, 2)}`;
                        }
                      }
                      e.target.value = value;
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Seller Details */}
            <div className='product-seller Details'>
              <h2>Product Seller Details</h2>
              <label >Phone No</label>
              <div className="product-phone-container">
                <span>+91</span>
                <input
                  type="tel"
                  name="sellerPhone"
                  maxLength="10"
                  placeholder="9448xxxxxxxx"
                  pattern="[0-9]{10}"
                  value={formData.sellerPhone}
                  onChange={handleChange}
                  onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10))}
                  required
                />
              </div>
              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email ID *</label>
                <input
                  type="email"
                  name="sellerEmail"
                  value={formData.sellerEmail}
                  onChange={handleChange}
                  placeholder="Enter Email ID"
                  required
                />

              </div>
              <div className="product-seller-name">
                <label htmlFor="productSellerName">Seller Name</label>
                <input type="text" name="productSellerName" value={formData.productSellerName} onChange={handleChange} required />
              </div>

              <div className="product-company-name">
                <label htmlFor="productCompanyName">Company Name</label>
                <input type="text" name="productCompanyName" value={formData.productCompanyName} onChange={handleChange} required />
              </div>


            </div>

            {/* Shipping Address (Product Address) */}

            <div className="product-address">
              <h2>Shipping Details</h2>
              <div className="product-address">
                <label htmlFor="productAddress">Shipping Address</label>
                <input type="text" name="productAddress" value={formData.productAddress} onChange={handleChange} required />
              </div>
              <div className="product-address-mini">

                <div className="product-product-state">
                  <label htmlFor="productState">State</label>
                  <input type="text" name="productState" value={formData.productState} onChange={handleChange} required />
                </div>

                <div className="product-product-country">
                  <label htmlFor="productCountry">Country</label>
                  <input type="text" name="productCountry" value={formData.productCountry} onChange={handleChange} required />
                </div>

                <div className="product-product-pincode">
                  <label htmlFor="productPincode">Pincode</label>
                  <input
                    type="text"
                    name="productPincode"
                    maxLength="6"
                    value={formData.productPincode}
                    onChange={handleChange}
                    onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))}
                    required />
                </div>
              </div>
            </div>
          </div>
          {/* -------------------------------------- */}
          {/* Right side */}
          <div className="product-right-side">

            <h2>Add product  images</h2>
            <p>Select product image</p>

            {/* image container */}
            <div className='product-image-container'>
              {/* left side image */}
              <div className='product-left-image'>
                <div>
                  <input
                    type="file"
                    name="productImage2"
                    className="product-image"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    required />
                  <p className='imageError' name='imageError'>{imageError ? imageError : ""}</p>
                </div>

                <div>
                  <input
                    type="file"
                    name="productImage3"
                    className="product-image"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    required />
                  <p className='imageError' name='product-imageError'>{imageError ? imageError : ""}</p>
                </div>
              </div>

              {/* Right side image */}
              <div className='product-right-image'>
                <input
                  type="file"
                  name="productImage1"
                  className="product-image"
                  accept=".jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  required />
                <p className='imageError' name='imageError'>{imageError ? imageError : ""}</p>
              </div>
            </div>{/*=========>>>>>>>*//* image container */}
            <br /><br />
            <button className='product-submit-button'>Submit Product</button>
          </div>{/*=========>>>>>>>** Right side */}
        </form>
      </div>
    </div >
  )
}

export default AddProduct
