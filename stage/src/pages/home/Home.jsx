import React from 'react'
import logo1 from '../../assets/home.png'
import './home.css'

const Home = () => {


    return (
        <div className="home-container">
        <img src={logo1} alt="logo" />
        <div className="centered-content">
          <p>Improve your skills on your own</p>
          <p>To prepare for a better future</p>
          <button className="register-now-button">REGISTER NOW</button>
        </div>
      </div>
   
    );
};

export default Home;
