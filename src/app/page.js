"use client"
import { useEffect, useState } from "react";
import HomePage from "../pages/Homepage/HomePage";
import axios from "axios";

export default function Home() {
  const [productData, setProductData] = useState()
  useEffect(() => {
    getData('http://localhost:3000/productData')
  }, [])
  const getData = async (url) => {
    try {
      await axios.get(url).then((res) => {

        setProductData(res.data)
      })
    } catch (error) {
      console.log(error.message)
    }
  }
  return (

    <div>


      <div className='main'>

        <HomePage /></div>

    </div>
  );
}
