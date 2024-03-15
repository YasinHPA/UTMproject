// countryService.ts
import axios from 'axios';

const REST_COUNTRIES_API = 'https://restcountries.com/v3.1/all';

export const fetchCountries = async () => {
    try {
        const response = await axios.get(REST_COUNTRIES_API);
        return response.data.map((country: any) => country.name.common);
    } catch (error) {
        console.error('Error fetching countries:', error);
        return [];
    }
};
