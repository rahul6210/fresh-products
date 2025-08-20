"use client"
import React, {useEffect}  from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';



import Top from './Components/Top'
import Hero from './Components/Hero'
import Nav from './Components/Nav'
import Discount from './Components/Discount'
import Promotion from './Components/Promotion'
import Sales from './Components/Sales'
import Delivery from './Components/Delivery'
import Organic from './Components/Organic'
import Photo from './Components/Photo'
import Footer from './Components/Footer'


export default function page() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animation only once
    });
  }, []);

  return (
    <div>
 
     {/* <Nav/> */}
    <Hero/>
    <Discount/>
    <Promotion/>
    <Sales/>
    <Delivery/>
    <Organic/>
    <Photo/>
   
    </div>
  )
}
