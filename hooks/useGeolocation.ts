import React from "react";

interface GeolocationDataType {
  lat: number | null;
  lon: number | null;
  error: string | null;
}

const useGeolocation = () => {
  const [geolocation, setGeolocation] = React.useState<GeolocationDataType>({
    lat: null,
    lon: null,
    error: null,
  });

  React.useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeolocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            error: null,
          });
        },
        (error) => {
          setGeolocation({
            lat: 22.57,
            lon: 88.37,
            error:
              "Geolocation not available. Showing results for default location: Kolkata, India",
          });
        },
      );
    } else {
      setGeolocation({
        lat: 22.57,
        lon: 88.37,
        error:
          "Geolocation not available. Showing results for default location: Kolkata, India",
      });
    }
  }, []);

  return geolocation;
};

export default useGeolocation;
