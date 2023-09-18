import React from "react";

interface GeolocationDataType {
  lat: number;
  lon: number;
  error: string | null;
}

const useGeolocation = () => {
  const [latitude, setLatitude] = React.useState<Number | null>(null);
  const [longitude, setLongitude] = React.useState<Number | null>(null);
  const [locationError, setLocationError] = React.useState<String | null>(null);

  React.useEffect(() => {
    if (localStorage.getItem("coords")) {
      setLatitude(
        JSON.parse(localStorage.getItem("coords") as string).latitude,
      );
      setLongitude(
        JSON.parse(localStorage.getItem("coords") as string).longitude,
      );
    } else {
      setLatitude(22.57);
      setLongitude(88.37);
      setLocationError(
        "Geolocation not available. Showing results for default location: Kolkata, India",
      );
    }
  }, []);

  const getCoords = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          localStorage.setItem(
            "coords",
            JSON.stringify({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            }),
          );
        },
        (error) => {
          setLatitude(22.57);
          setLongitude(88.37);
          setLocationError(
            "Geolocation not available. Showing results for default location: Kolkata, India",
          );
        },
      );
    }
  };

  return { latitude, locationError, longitude, getCoords };
};

export default useGeolocation;
