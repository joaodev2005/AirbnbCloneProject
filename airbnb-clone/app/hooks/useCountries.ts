import countries from "world-countries";

const formattedCountries = countries.map((country) => ({
    value: country.cca2, // ISO 3166-1 alpha-2 code
    label: country.name.common,
    flag: country.flag,
    latlng: country.latlng,
    region: country.region,
}));

export const useCountries = () => {
    const getAll = () => formattedCountries;

    const getByValue = (value: string) => {
        return formattedCountries.find((item) => item.value === value);
    }

    return {
        getAll,
        getByValue
    }
}