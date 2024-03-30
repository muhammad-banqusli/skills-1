export interface CountryInfo {
    name: {
        common: string;
        official: string;
    };
    currencies: {
        [currencyCode: string]: {
            name: string; // Currency
            symbol: string; // Currency symbol
        };
    };
    timezones: string[]; // Time zone
    continents: string[]; // Continent
    flag: string; // Flag image
    languages: {
        [languageCode: string]: string; // Language
    };
    translations: {
        [languageCode: string]:{
            official: string,
            common: string
        }
    }
    population: number;
    
    flags: {
        png: string; // Flag image URL (PNG format)
        svg: string; // Flag image URL (SVG format)
        alt: string; // Description of the flag
    };
    // Additional interesting attributes
    area: number; // Area
    capital: string[]; // Capital city (can be an array due to multiple possible capitals)
}

export interface ExtendedCountryInfo extends CountryInfo {
    id: number;
}