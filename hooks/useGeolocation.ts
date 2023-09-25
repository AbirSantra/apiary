import axios from "axios";
import React from "react";

const GEOCODING_URL = `http://api.openweathermap.org/geo/1.0/reverse`;
const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_APPID;

const useGeolocation = () => {
  const [city, setCity] = React.useState<string | null>(null);
  const [locationError, setLocationError] = React.useState<String | null>(null);

  React.useEffect(() => {
    const savedCity = localStorage.getItem("user-city");
    if (savedCity) {
      setCity(savedCity);
    } else {
      setCity("Kolkata");
    }
  }, []);

  /* Find city for coordinates */
  const getCityName = async ({ lat, lon }: { lat: number; lon: number }) => {
    try {
      console.log(lat, lon);
      const response = await axios(GEOCODING_URL, {
        params: {
          lat: lat,
          lon: lon,
          limit: 1,
          appid: API_KEY,
        },
      });

      const data = response.data[0];
      setLocationError(null);
      return data.name;
    } catch (error) {
      console.log(error);
      return "Kolkata";
    }
  };

  const getGeoLocation = async () => {
    try {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const cityName = await getCityName({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            });
            setCity(cityName);
            localStorage.setItem("user-city", cityName);
            setLocationError(null);
            console.log(cityName);
          },
          (error) => {
            setLocationError(
              "Geolocation not available. Showing results for default location: Kolkata, India",
            );
          },
        );
      } else {
        setCity("Kolkata");
        setLocationError(
          "Geolocation not available. Showing results for default location: Kolkata, India",
        );
      }
    } catch (error) {
      console.log(error);
      setCity("Howrah");
    }
  };

  return { city, setCity, locationError, getGeoLocation };
};

export default useGeolocation;
