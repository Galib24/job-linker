import Button from '@/components/Button';
import React from 'react';
import { Toaster } from 'react-hot-toast';
const Home = () => {
  return <div>
    <div className=''>
      <h1 className='text-6xl text-center'>Home Section</h1>
      <Button></Button>
      <Toaster></Toaster>
    </div>
  </div>;
};

export default Home;