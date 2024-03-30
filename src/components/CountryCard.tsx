import { useEffect, useState } from "react";
import { CountryInfo } from "../types/Country";

type PropTypes = {
    country: CountryInfo;
};

type Language = {
    key: string;
    name: string;
};

type Currency = {
    key: string;
    name: string;
    symbol: string;
};

const CountryCard = ({ country }: PropTypes) => {
    const [langs, setLangs] = useState<Language[] | null>(null);
    const [currencies, setCurrenceis] = useState<Currency[] | null>(null);


    useEffect(() => {
        if (country.languages) {
            const languages = Object.entries(country.languages).map(
                ([languageCode, languageName]) => ({
                    key: languageCode,
                    name: languageName,
                })
            );
            setLangs(languages);
        }
    }, [country.languages]);
    useEffect(() => {
        if (country.currencies) {
            const currencies = Object.entries(country.currencies).map(
                ([currencyKey, currencyName]) => ({
                    key: currencyKey,
                    name: currencyName.name,
                    symbol: currencyName.symbol,
                })
            );
            setCurrenceis(currencies);
        }
    }, [country.currencies]);
    return (
        <div
            className="w-full border rounded-md pb-2 shadow-xl overflow-hidden hover:translate-y-2 hover:translate-x-1 transition-all "
            title={country.name.common}
        >
            <img
                src={country.flags.png}
                alt={country.name.common}
                className="max-h-36 h-1/2 w-full object-cover rounded-tl-md rounded-tr-md"
            />
            <div className="px-2 mt-2">
                <p>{country.name.official}</p>

                <p className="truncate ">Capital: {country.capital}</p>
                {currencies && <p className="truncate">Currency: {currencies[0].name} {currencies[0].symbol}</p>}
                {langs && (
                    <p className="truncate">
                        Languages:{" "}
                        {langs.map((lang, i) => {
                            if (i === 0) {
                                return <span key={lang.key}>{lang.name}</span>;
                            } else if (i === langs.length - 1) {
                                return (
                                    <span key={lang.key}> and {lang.name}</span>
                                );
                            } else
                                return (
                                    <span key={lang.key}>, {lang.name}</span>
                                );
                        })}
                    </p>
                )}
            </div>
        </div>
    );
};
export default CountryCard;
