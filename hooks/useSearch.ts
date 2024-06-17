'use client';

import { Locations } from '@/types/location';
import { useEffect, useState } from 'react';

export const useSearch = (initialValue = '', delay = 500) => {
  const [value, setValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);
  const [results, setResults] = useState<Locations | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  useEffect(() => {
    if (debouncedValue) {
      const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(
            `https://api.openweathermap.org/geo/1.0/direct?q=${debouncedValue}&limit=5&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}`
          );
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = (await response.json()) as Locations;
          setResults(data);
        } catch (error: any) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [debouncedValue]);

  console.log(results);

  return { value, setValue, debouncedValue, results, loading, error };
};
