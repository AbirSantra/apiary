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
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setLatitude(22.57);
          setLongitude(88.37);
          setLocationError(
            "Geolocation not available. Showing results for default location: Kolkata, India",
          );
        },
      );
    } else {
      setLatitude(22.57);
      setLongitude(88.37);
      setLocationError(
        "Geolocation not available. Showing results for default location: Kolkata, India",
      );
    }
  }, []);

  return { latitude, locationError, longitude };
};

export default useGeolocation;
