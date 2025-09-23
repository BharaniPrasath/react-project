import React, { useEffect, useState } from 'react'
import SellerNavbar from '../seller/seller_navbar'

import '../../styles/category/addProduct.css'

function AddProduct() {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>

      <SellerNavbar />
      <div className='product-main-container'>
        <div className='product-left-side'>
          <h2>Add Your Product</h2>
          <form onSubmit={handleSubmit}>
            <div className='product-details'>
              <label htmlFor="productName">Product Name</label>
              <input type="text" name='productName' placeholder='Ex : Iphone 17 pro max(256)' required />
              
              <label htmlFor="productName">Brand Name</label>
              <input type="text" name='brandName' placeholder='Apple' required />
              
              <label htmlFor="productName">Product Highlight</label>
              <input type="text" name='productHiglight' placeholder='Enter the product highlight' required />
              
              <label htmlFor="productName"  style={{marginTop:"10px"}}>Product Description</label>
              <textarea name="productDescription" style={{marginTop:"10px"}}  placeholder='give the detailed Description about the product for 200-300 lines' required></textarea>
            </div>
            
            {/* Selling Category */}
            <div className="mb-3"  style={{marginTop:"-10px"}}>
              <label>What are you looking to sell?</label>
              <select
              style={{marginTop:"10px"}}
                name="productCategory"
                // value={}
                // onChange={}
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
            <h2 style={{ marginTop: "30px" }}>Product Price detail</h2>
            <div className="product-pricesection">
              <div className="product-price">
                <label htmlFor="prodctPrice">Price</label>
                <div className='product-price-wrapper'>
                  <span>₹</span>
                  <input
                    type="text"
                    name="productPrice"
                    inputMode="decimal"
                    placeholder='99999.99'
                    onInput={(e) => {
                      // allow only numbers and dot
                      e.target.value = e.target.value.replace(/[^0-9.]/g, "");
                    }}
                    onChange={(e) => {
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

              <div className="product-discount-price">
                <label htmlFor="discountPrice">Discount Price</label>
                <div className='product-price-wrapper'>
                  <span>₹</span>
                  <input
                    type="text"
                    name="discountPrice"
                    inputMode="decimal"
                    placeholder='190.90(optional)'
                    onInput={(e) => {
                      // allow only numbers and dot
                      e.target.value = e.target.value.replace(/[^0-9.]/g, "");
                    }}
                    onChange={(e) => {
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
                  />
                </div>
              </div>
            </div>

            {/* Seller Details */}
            <div className='product-seller Details'>
              <h2>Product Seller Details</h2>
              <br />
              <label >Phone No</label>
              <div className="product-phone-container">
                <span>+91</span>
                <input
                  type="tel"
                  name="sellerPhone"
                  maxLength="10"
                  placeholder="9448xxxxxxxx"
                  pattern="[0-9]{10}"
                  onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10))}
                  required
                />
              </div>
              <br />
              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email ID *</label>
                <input
                  type="email"
                  name="sellerEmail"
                  placeholder="Enter Email ID"
                  required
                />

              </div>
              <div className="product-seller-name">
                <label htmlFor="productSellerName">Seller Name</label>
                <input type="text" name="productSellerName" required />
              </div>

              <div className="product-company-name">
                <label htmlFor="productCompanyName">Company Name</label>
                <input type="text" name="productCompanyName" required />
              </div>


            </div>

            {/* Shipping Address (Product Address) */}

            <div className="product-address" style={{ marginTop: "-20px" }}>
              <h2>Shipping Details</h2>
              <div className="product-address">
                <label htmlFor="productAddress">Shipping Address</label>
                <input type="text" name="productAddress" required />
              </div>
              <div className="product-address-mini">

                <div className="product-product-state">
                  <label htmlFor="productState">State</label>
                  <input type="text" name="productState" required />
                </div>

                <div className="product-product-country">
                  <label htmlFor="productCountry">Country</label>
                  <input type="text" name="productCountry" required />
                </div>

                <div className="product-product-pincode">
                  <label htmlFor="productPincode">Pincode</label>
                  <input
                    type="text"
                    name="productPincode"
                    maxLength="6"
                    onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))}
                    required />
                </div>
              </div>
            </div>


            <button className='product-submit-button'>Submit Product</button>
          </form>
        </div>
        <div className="product-right-side">
          <div><h2>Right side</h2></div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
