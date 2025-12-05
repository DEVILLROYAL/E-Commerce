import React from 'react';
import { Hero } from './Hero';
import FoodRadioSlider from './FoodRadioSlider';

export default function Main() {
  return (
    <>
    <div className='w-full h-auto'>
      <Hero/>
      <FoodRadioSlider/>
    </div>
    </>
  )
}
