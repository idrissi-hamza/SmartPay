import React from 'react';
// import Header from '../components/Header';

import SupportEngine from '../SupportEngine';

import './index.css';
import LandingPage from '../LandingPage/LandingPage';

const Home = () => {
  return (
    <div>
      <LandingPage />

      <SupportEngine />
    </div>
  );
};

export default Home;
