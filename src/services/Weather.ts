import axios from "axios"

const KEY = `721a52b477d842f4950153121250611`;
  const BASE_URL = `http://api.weatherapi.com/v1`;

const weatherservice = {

  getWeather : async(city:any) =>{
    try {
      const response = await axios.get( `${BASE_URL}/current.json?key=${KEY}&q=${city}`)
      return response.data;
    } catch (error) {
      console.error("Error Seeing Weather",error);
      throw error;
    }

  }

}

export default weatherservice;