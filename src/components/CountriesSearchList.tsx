import { CountryInfo } from "../types/Country";
import CountryCard from "./CountryCard";
import { useState, useEffect } from "react";
import CountryCardSekeleton from "./CountryCardSekeleton";

type PropTypes = {
    searchTerm: string;
    refetch: boolean;
};

const CountriesSearchList = ({ searchTerm, refetch }: PropTypes) => {
    const [countries, setCountries] = useState<CountryInfo[] | []>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const getData = async (url: string) => {
        const res = await fetch(url);
        const json = await res.json();
        return json;
    };

    const filteredCountries = searchTerm
        ? countries
              .filter(
                  (country) =>
                      country.name.common
                          .toLocaleUpperCase()
                          .includes(searchTerm.toLocaleUpperCase()) ||
                      country.name.official
                          .toLocaleUpperCase()
                          .includes(searchTerm.toLocaleUpperCase())
              )
              .slice(0, 8)
        : countries.slice(0, 8);

    useEffect(() => {
        setLoading(true);
        setError(false);
        setCountries([]);
        setTimeout(() => {
            getData("https://restcountries.com/v3.1/all")
                .then((data: CountryInfo[]) => {
                    setCountries(data);
                    setLoading(false)
                })
                .catch(() => setError(true));
        }, 3000);
    }, [refetch]);

    let content;

    if (loading)
        content = [...Array(8).keys()].map((_,i) => <CountryCardSekeleton key={i} />);
    else if (error){
        return (<div className="grid place-content-center">Something went wrong with fetching data.</div>)
    }
    else
        content = filteredCountries.map((country, i) => (
            <CountryCard key={i} country={country} />
        ));

    return (
        <div className="container grid gap-4 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-full">
            {content}
        </div>
    );
};
export default CountriesSearchList;
