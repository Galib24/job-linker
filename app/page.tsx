import ButtonLikhon from '@/components/ButtonLikhon';
import React from 'react';
import { Toaster } from 'react-hot-toast';
const Home = () => {
  return <div>
    <div className=''>
      <h1 className='text-6xl text-center'>Home Section</h1>
      <ButtonLikhon></ButtonLikhon>
      <Toaster></Toaster>
    </div>
  </div>;
};

export default Home;