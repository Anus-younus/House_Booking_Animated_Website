"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import AppartmentType from './AppartmentType/AppartmentType'
import Properties from './Properties/Properties'
import CityProperties from './CityProperties/CityProperties'
import BuildingFeature from './BuildingFeature/BuildingFeature'
import Reviews from './Reviews/Reviews'
import Blogs from './Blogs/Blogs'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import('aos');
      AOS.init({
         duration:1000,
         easing: "ease",
         once: true,
         anchorPlacement: "top-bottom"
      })
    }

    initAos()
  }, [])
  return (
    <div className='overflow-hidden'>
      <Hero />
      <AppartmentType />
      <Properties />
      <CityProperties />
      <BuildingFeature />
      <Reviews />
      <Blogs />
    </div>
  )
}

export default Home