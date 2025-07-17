import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import BannerImg from '../../components/BannerImg/BannerImg'
import Carrossel from '../../components/Carrossel/Carrossel'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Carrossel />
      <BannerImg />
      <Card />
      <Footer />
    </>
    
  )
}

export default Home