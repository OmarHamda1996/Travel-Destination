import React from 'react';
import Tours from '../tours/Tours';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../home/Home.css'
const Home = () => {
  return (
    <div className="home">

     <Header/> 
      <Tours/>
      <Footer/>
</div>
  );
};

export default Home;
