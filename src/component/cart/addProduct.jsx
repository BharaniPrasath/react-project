import React, { useEffect, useState } from 'react'
import SellerNavbar from '../seller/seller_navbar'

import '../../styles/category/addProduct.css'

function AddProduct() {

  const [companyName, setCompanyName] = useState("");
  const [isSellerAuthenticated, setIsSellerAuthenticated] = useState(
    localStorage.getItem("isSellerAuthenticated") === "true"
  );

  useEffect(() => {
    if (isSellerAuthenticated) {
      const seller = localStorage.getItem("seller");
      if (seller) {
        setCompanyName(seller);
      }
    }
  }, [isSellerAuthenticated]);

  return (
    <>
      <SellerNavbar />
      <div className='main-container'>
        <h2>{companyName}</h2>
        <h2>Add Your Product</h2>
      </div>


    </>
  )
}

export default AddProduct
