'use client';

import { Response } from '@/types/weather';
import { create } from 'zustand';

interface WeatherData extends Response {
  imgSrc: string;
}

interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string | null;
  fetchWeather: (lat: number, lon: number, city: string) => void;
}

const illustrations: { [key: string]: string } = {
  '01': '/assets/01.sun-light.svg',
  '02': '/assets/05.partial-cloudy-light.svg',
  '03': '/assets/15.cloud-light.svg',
  '04': '/assets/11.mostly-cloudy-light.svg',
  '09': '/assets/18.heavy-rain-light.svg',
  '10': '/assets/06.rainyday-light.svg',
  '11': '/assets/13.thunderstorm-light.svg',
  '13': '/assets/22.snow-light.svg',
  '50': '/assets/23.hailstrom-light.svg',
};

export const useWeather = create<WeatherState>((set) => ({
  data: null,
  loading: false,
  error: null,
  fetchWeather: async (lat, lon, city) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7b58bd9878dc6f47588c3ac32e721677`
      );
      const result = (await response.json()) as WeatherData;

      const index = result.weather[0].icon.slice(0, 2);
      result.imgSrc = illustrations[index];
      result.name = city;

      set({ data: result, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
}));
