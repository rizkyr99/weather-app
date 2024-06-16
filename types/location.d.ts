export type Locations = Location[];

export interface Location {
  name: string;
  local_names?: LocalNames;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export interface LocalNames {
  ru: string;
  dz: string;
  eo: string;
  zh: string;
  hu: string;
  es: string;
  en: string;
  ja: string;
  uk: string;
}
