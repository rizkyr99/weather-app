import { useWeather } from '@/hooks/useWeather';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Illustration = () => {
  const { data } = useWeather();

  return (
    <Image
      src={data?.imgSrc || '/assets/01.sun-light.svg'}
      width={250}
      height={250}
      alt='cloudy rainy'
      className='w-full max-w-[300px] object-contain'
    />
  );
};

export default Illustration;
