// CountryPage.tsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchWeatherData } from '../weatherService';

const CountryPage: React.FC = () => {
    const { countryName } = useParams<{ countryName: string }>();
    const [weatherData, setWeatherData] = useState<any>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetchWeatherData(countryName);
                setWeatherData(response);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };
        fetchWeather();
    }, [countryName]);

    return (
        <div>
            <h1>Country: {countryName}</h1>
            {weatherData && (
                <div>
                    <h2>Weather:</h2>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Description: {weatherData.weather[0].description}</p>
                </div>
            )}
            {/* Add more information about the country and weather condition images */}
        </div>
    );
};

export default CountryPage;
