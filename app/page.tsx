'use client';

import moment from 'moment';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';
import Search from '@/components/Search';
import { useWeather } from '@/hooks/useWeather';
import Illustration from '@/components/Illustration';
import VariableCard from '@/components/VariableCard';
import { formatToCelcius } from '@/utils/formatToCelcius';

export default function Home() {
  const { data, fetchWeather } = useWeather();

  useEffect(() => {
    fetchWeather(35.6895, 139.6917, 'Tokyo');
  }, [fetchWeather]);

  if (!data)
    return (
      <div className='h-screen w-screen bg-slate-100 flex items-center justify-center'>
        <Loader2 className='size-6 text-slate-500 animate-spin' />
      </div>
    );

  return (
    <main className='w-screen lg:h-screen overflow-hidden p-8 bg-slate-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      <div className='flex flex-col gap-6 h-full'>
        <div className='card flex flex-col flex-1 gap-8'>
          <Search />
          <div className='flex-1 flex flex-col'>
            <h1 className='text-center text-3xl font-bold'>{data?.name}</h1>
            <p className='text-center text-slate-500 mb-2'>
              {data && moment(data.dt * 1000).format('dddd, D MMMM YYYY')}
            </p>
            <p className='text-slate-500 font-semibold text-2xl text-center'>
              {data && moment(data.dt * 1000).format('HH:mm')}
            </p>
            <div className='flex-1 flex justify-center items-center'>
              <Illustration />
            </div>
            <div>
              <p className='text-5xl font-bold text-center'>
                {formatToCelcius(data.main.temp) + '°C'}
              </p>
              <p className='text-lg text-center'>
                {data?.weather[0].description
                  .split(' ')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')}
              </p>
            </div>
          </div>
        </div>
        <div className='hidden md:block lg:hidden'>
          <p className='next-title'>Next 2 hours</p>
          <div className='grid grid-cols-2 gap-6'>
            <div className='next-card'>
              <p className='text-slate-500 text-sm text-center'>17:00</p>
              <Image
                src='/assets/05.partial-cloudy-light.svg'
                width={80}
                height={80}
                alt='cloudy rainy'
                className='w-full max-w-[80px] object-contain'
              />
              <p className='text-xl text-center font-bold'>28°C</p>
            </div>
            <div className='next-card'>
              <p className='text-slate-500 text-sm text-center'>17:00</p>
              <Image
                src='/assets/05.partial-cloudy-light.svg'
                width={80}
                height={80}
                alt='cloudy rainy'
                className='w-full max-w-[80px] object-contain'
              />
              <p className='text-xl text-center font-bold'>28°C</p>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:col-span-2 flex flex-col gap-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1'>
          <div className='flex flex-col gap-6 h-full'>
            <div className='grid grid-cols-2 gap-6 flex-1'>
              <VariableCard title='Humidity' value={`${data.main.humidity}%`} />
              <VariableCard
                title='Pressure'
                value={`${data.main.pressure} hPa`}
              />
            </div>
            <div className='grid grid-cols-2 gap-6 flex-1'>
              <VariableCard
                title='Wind Speed'
                value={`${Math.round(data.wind.speed)} km/h`}
              />
              <VariableCard
                title='Visibility'
                value={`${data.visibility / 1000} km`}
              />
            </div>
            <div className='grid grid-cols-2 gap-6 flex-1'>
              <VariableCard
                title='Min Temp'
                value={`${formatToCelcius(data.main.temp_min)} °C`}
              />
              <VariableCard
                title='Max Temp'
                value={`${formatToCelcius(data.main.temp_max)} °C`}
              />
            </div>
          </div>
          <div className='card'>
            <p className='card-title mb-8 text-left'>Overview</p>
            <p className='text-sm text-justify leading-relaxed line-clamp-[12]'>
              The current weather is overcast with a temperature of 16°C and a
              feels-like temperature of 16°C. The wind speed is 4 meter/sec with
              gusts up to 6 meter/sec coming from the west-southwest direction.
              The air pressure is at 1007 hPa with a humidity level of 79%. The
              dew point is at 12°C and the visibility is 10000 meters. The UV
              index is at 4, indicating moderate risk from the sun&apos;s UV
              rays. The sky is covered with overcast clouds, and there is no
              precipitation expected at the moment. Overall, it is a moderately
              cool and cloudy day with light to moderate winds from the
              west-southwest.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div className='md:hidden lg:block'>
            <p className='next-title'>Next 2 hours</p>
            <div className='grid grid-cols-2 gap-6'>
              <div className='next-card'>
                <p className='text-slate-500 text-sm text-center'>17:00</p>
                <Image
                  src='/assets/05.partial-cloudy-light.svg'
                  width={80}
                  height={80}
                  alt='cloudy rainy'
                  className='w-full max-w-[80px] object-contain'
                />
                <p className='text-xl text-center font-bold'>28°C</p>
              </div>
              <div className='next-card'>
                <p className='text-slate-500 text-sm text-center'>17:00</p>
                <Image
                  src='/assets/05.partial-cloudy-light.svg'
                  width={80}
                  height={80}
                  alt='cloudy rainy'
                  className='w-full max-w-[80px] object-contain'
                />
                <p className='text-xl text-center font-bold'>28°C</p>
              </div>
            </div>
          </div>
          <div className=''>
            <p className='next-title'>Next 2 hours</p>
            <div className='grid grid-cols-2 gap-6'>
              <div className='next-card'>
                <p className='text-slate-500 text-sm text-center'>17:00</p>
                <Image
                  src='/assets/05.partial-cloudy-light.svg'
                  width={80}
                  height={80}
                  alt='cloudy rainy'
                  className='w-full max-w-[80px] object-contain'
                />
                <p className='text-xl text-center font-bold'>28°C</p>
              </div>
              <div className='next-card'>
                <p className='text-slate-500 text-sm text-center'>17:00</p>
                <Image
                  src='/assets/05.partial-cloudy-light.svg'
                  width={80}
                  height={80}
                  alt='cloudy rainy'
                  className='w-full max-w-[80px] object-contain'
                />
                <p className='text-xl text-center font-bold'>28°C</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
