import axios from "axios";

export const getTempratureByCity = async (city: string) => {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
    );
    return response.data.current.temp_c;
  } catch (error) {
    return { error: error };
  }
};
