import axios from 'axios';

const API_KEY = '577e37f5023a9a64efc45d0c0d29aeef';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FEATCH_WEATHER';

export function fetchWeather(city) { 
    const url = `${ROOT_URL}$q=${city},us`;
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload: request 
    }
}