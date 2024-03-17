import React, { useState, useEffect } from 'react';
import { Select, Button } from 'antd';
import { fetchCountries } from "./../countryService";
import { fetchWeatherData } from "./../weatherService";

const { Option } = Select;

interface WeatherComponentProps {
    onWeatherChecked: (weatherData: any) => void;
}

const WeatherComponent: React.FC<WeatherComponentProps> = ({ onWeatherChecked }) => {
    const [countries, setCountries] = useState<string[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

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
        try {
            if (selectedCountry) {
                const weatherResponse = await fetchWeatherData(selectedCountry);
                onWeatherChecked(weatherResponse);
            } else {
                console.error('Не выбрана страна');
            }
        } catch (error) {
            console.error('Ошибка при получении данных о погоде:', error);
        }
    };

    return (

        <div style={{ width: 500,textAlign: 'center', position: 'absolute', top: '50%', left: '435%', transform: 'translate(-50%, -50%)' }}>
            <h1 style={{ fontSize: '4em', marginBottom: '20px' }}>Выберите страну и проверьте погоду</h1>
            <Select
                placeholder="Выберите страну"
                style={{ width: 200, marginRight: '10px' }}
                onChange={handleCountrySelect}
                showSearch    // Включаем быстрый поиск
                filterOption={(input, option) =>
                    option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }   // Функция для фильтрации опций по вводу пользователя
            >
                {countries.map(country => (
                    <Option key={country} value={country}>{country}</Option>
                ))}
            </Select>
            <Button type="primary" style={{ marginLeft: '-5px' }} onClick={handleWeatherCheck}>Проверить погоду</Button>
        </div>
    );
};

export default WeatherComponent;
