import React, { useState } from 'react';
import './App.css';
import Layout from "./components/Layout.tsx";
import WeatherComponent from "./components/WeatherComponent.tsx";
import FlagComponent from './FlagComponent';
import NumberFactsComponent from './components/NumberFactsComponent'; // Импортируем компоненту NumberFactsComponent
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    const [weatherData, setWeatherData] = useState<any>(null);

    const handleWeatherChecked = (data: any) => {
        setWeatherData(data);
    };

    return (
        <Router>
            <div className="LayoutContainer">
                <Layout>
                    <Switch>
                        <Route exact path="/">
                            {weatherData ? (
                                <div className="weather-container">
                                    <h1 className="weather-heading">Погода в {weatherData.name}</h1>
                                    <div>
                                        <p className="weather-temperature">Температура: {weatherData.main.temp}°C</p>
                                        <p className="weather-description">Описание: {weatherData.weather[0].description}</p>
                                        <FlagComponent country={weatherData.sys.country} />
                                    </div>
                                    <button className="weather-button" onClick={() => setWeatherData(null)}>Назад к выбору страны</button>
                                </div>
                            ) : (
                                <WeatherComponent onWeatherChecked={handleWeatherChecked} />
                            )}
                        </Route>
                        <Route path="/number-facts">
                            <NumberFactsComponent /> {/* Добавляем компоненту NumberFactsComponent в маршрут */}
                        </Route>
                    </Switch>
                </Layout>
            </div>
        </Router>
    );
}

export default App;
