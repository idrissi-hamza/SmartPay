import React from 'react';
// import Header from '../components/Header';

import SupportEngine from '../SupportEngine';

import './index.css';
import LandingPage from '../LandingPage/LandingPage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  return (
    <div>
      <LandingPage />

      <SupportEngine />
    </div>
  );
};

export default Home;
