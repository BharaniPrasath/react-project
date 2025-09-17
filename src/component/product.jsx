import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Product() {
    const[name,setname]=useState('')
    const[price,setprice]=useState('')
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()

        const productData={
            name:name,
            price:price
        }

        axios
        .post('http://127.0.0.1:8000/addProduct/',productData)
        .then(res=>{
            console.log("Product added",res.data);
        })
        .catch(err=>{
            console.log("sending data error :",err);
        })

        navigate('/')

    }

    return (
        <div>
            <h2>Add Products here</h2>
            <form onSubmit={handleSubmit} method='POST'>
                <label htmlFor="name">Product Name</label><br />
                <input
                 type="text"
                 name='name' 
                 value={name}
                 onChange={(e)=>setname(e.target.value)}
                 required />
                <br /><br />
                <label htmlFor="price">Price</label><br />
                <input 
                 type="number"
                 name="price" 
                 id="" 
                 value={price}
                 onChange={(e)=>setprice(e.target.value)}
                 required />
                <br /><br />
                <button>submit</button>
            </form>

        </div>

    )
}

export default Product