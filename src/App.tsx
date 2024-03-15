import React, { useState, useEffect } from 'react';
import './App.css';
import Layout from "./components/Layout.tsx";
import SelectComponent from "./components/SelectComponent.tsx";
import { fetchCountries } from "./countryService";
import { fetchWeatherData } from "./weatherService";

function App() {
    const [countries, setCountries] = useState<string[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
    const [weatherData, setWeatherData] = useState<any>(null);
    const [isWeatherChecked, setIsWeatherChecked] = useState(false);

    useEffect(() => {
        const getCountries = async () => {
            const countriesList = await fetchCountries();
            setCountries(countriesList);
        };

        getCountries();
    }, []);

    const handleCountrySelect = (country: string) => {
        setSelectedCountry(country);
    };

    const handleWeatherCheck = async () => {
        console.log('Нажата кнопка "Проверить погоду"');
        try {
            if (selectedCountry) {
                const weatherResponse = await fetchWeatherData(selectedCountry);
                setWeatherData(weatherResponse);
                setIsWeatherChecked(true);
                console.log('Установлен флаг isWeatherChecked в true');
            } else {
                console.error('Не выбрана страна');
                // Добавьте обработку случая, когда не выбрана страна
            }
        } catch (error) {
            console.error('Ошибка при получении данных о погоде:', error);
            // Обработка ошибки при получении данных о погоде
        }
    };

    const handleBackToMainMenu = () => {
        console.log('Нажата кнопка "Назад к выбору страны"');
        setSelectedCountry(null);
        setIsWeatherChecked(false);
        console.log('Сброшены состояния selectedCountry и isWeatherChecked');
    };


    return (
        <div className="LayoutContainer">
            <Layout>
                {isWeatherChecked && weatherData ? (
                    <>
                        <h1>Погода в {selectedCountry}</h1>
                        <div>
                            <p>Температура: {weatherData.main.temp}°C</p>
                            <p>Описание: {weatherData.weather[0].description}</p>
                        </div>
                        <button onClick={handleBackToMainMenu}>Назад к выбору страны</button>
                    </>
                ) : (
                    <>
                        <h1 className="heading">Выберите страну и проверьте погоду</h1>
                        <div>
                            <SelectComponent label="Выберите страну" options={countries} onSelect={handleCountrySelect} />
                        </div>
                        <button onClick={handleWeatherCheck}>Проверить погоду</button>
                    </>
                )}
            </Layout>
        </div>
    );
}

export default App;
