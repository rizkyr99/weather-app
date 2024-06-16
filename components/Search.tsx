'use client';

import { useSearch } from '@/hooks/useSearch';
import { useWeather } from '@/hooks/useWeather';
import { Loader2, SearchIcon, X } from 'lucide-react';

const Search = () => {
  const { value, setValue, results, loading } = useSearch();
  const { fetchWeather } = useWeather();

  const handleClick = (lat: number, lon: number, name: string) => {
    setValue('');
    fetchWeather(lat, lon, name);
  };

  return (
    <div className='relative'>
      <input
        type='text'
        placeholder='Search location'
        className='bg-slate-100 h-12 w-full rounded-2xl outline-slate- px-4 focus:outline-slate-300'
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      {value ? (
        <button
          onClick={() => setValue('')}
          className='absolute top-1/2 -translate-y-1/2 right-4 size-6 rounded-full bg-slate-200 flex items-center justify-center hover:opacity-75'>
          <X className='size-4 text-slate-500' />
        </button>
      ) : (
        <SearchIcon className='absolute top-1/2 right-4 -translate-y-1/2 size-6 text-slate-500' />
      )}
      {value && (
        <div className='absolute w-full left-0 top-full mt-2 p-8 bg-white shadow-sm rounded-xl'>
          {loading ? (
            <div>
              <Loader2 className='size-4 text-slate-500 animate-spin mx-auto' />
            </div>
          ) : results && results.length > 0 ? (
            results.map((result) => (
              <div
                key={result.lat + result.lon}
                onClick={() => handleClick(result.lat, result.lon, result.name)}
                className='px-4 py-2 hover:bg-slate-100 rounded-xl cursor-pointer'>
                {result.name}, {result.country}
              </div>
            ))
          ) : (
            <div className='text-center text-sm text-slate-500'>
              No location found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
