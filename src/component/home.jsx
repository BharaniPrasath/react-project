import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {


  const [product, setProduct] = useState([])
  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/getProduct/')
      .then(res => {
        setProduct(res.data)
      })
      .catch(err => {
        console.error("Error fetching data :", err)
      })

  }, [])

  return (
    <div>
      <h2>Django to React</h2>
      <table >
        {product.map((item) => (
          <tr key={item.id} >
            <td style={{padding:"10px",border:"1px solid black"}} >{item.name}</td>
            <td style={{padding:"10px",border:"1px solid black"}} >{item.price}</td>
            <td style={{padding:"10px",border:"1px solid black"}}><button>Edit</button></td>
          </tr>
        ))}
      </table>
      <br /><br />
      <button><Link to={'/product'} >Add product</Link></button>
    </div>
  )
}

export default Home