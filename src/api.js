import axios from "axios";
 export async function fetchWeather(city,setError){
    console.log(process.env.REAC_APP_API_KEY);
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={api-id}`;
    try {
        const response =await axios.get(url); 
        setError("");
        return response.data;
    } catch (error) {
        setError("City not found!");
        return error;
    }
 }