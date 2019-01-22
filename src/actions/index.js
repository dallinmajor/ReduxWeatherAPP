import axios from 'axios';

const API_KEY = '4cc4078b2e426e58472979a78b5a337b';
const ROOT_URL = 'https://api.openweathermap.org/data/2.5/weather?';

export const FETCH_WEATHER = 'FEATCH_WEATHER';

export function fetchWeather(city) { 
    const url = `${ROOT_URL}q=${city},us&appid=${API_KEY}`;
    console.log(url);
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload: request 
    }
}