// weatherService.ts

// Функция для получения данных о погоде для заданной страны
async function fetchWeatherData(country: string): Promise<any> {
    const apiKey = 'a7220b314466da1ecc71ff7e3e8c850e'; // Замените YOUR_API_KEY на ваш ключ API от OpenWeatherMap
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Ошибка при получении данных о погоде');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка при получении данных о погоде:', error);
        throw error;
    }
}

export { fetchWeatherData };
