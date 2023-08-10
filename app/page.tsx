import Banner from '@/components/Banner/Banner';
import Footer from '@/components/Footer/Footer';
import Likhon from '@/components/LikhonButton/Likhon';
import React from 'react';

const Home = () => {
  return <div className='text-7xl text-blue-500'>
    Home
    <Banner></Banner>
    <Likhon></Likhon>
    <Footer />
  </div>;
};

export default Home;