import axios from "axios";

const url = "https://api.openweathermap.org/data/2.5/weather";
const key = "e43e565a7db5a85b79d9b11ba302f5ae";

const fetchWeather = async (city) => {
  try {
    const res = await axios.get(url, {
      params: {
        q: city,
        units: "metric",
        APPID: key,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchWeather;
