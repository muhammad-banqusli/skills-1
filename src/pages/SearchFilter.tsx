import { useState } from "react";
import CountriesSearchList from "../components/CountriesSearchList";

const SearchFilter = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [refetch, setrefetch] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setSearchTerm(e.target.value);

    return (
        <section className="section-min-height flex flex-col items-center px-10 pt-1">
            <h1 className="text-xl font-titles">Search Filter & Skeleton</h1>
           <div className="flex w-full justify-center items-center gap-3"> <input
                type="text"
                onChange={handleInputChange}
                value={searchTerm}
                placeholder="Search"
                className=" max-w-90 xs:w-11/12 md:w-1/2 lg:w-4/12 px-2 py-1 rounded-sm mt-2 mb-8 border shadow-lg"
            />
            <button className="mb-8 py-1 px-2 mt-2 bg-gray-200 hover:bg-gray-100 border rounded-sm shadow-lg" onClick={() => setrefetch((prev) => !prev)}>
                Refetch
            </button></div>
          
                <CountriesSearchList searchTerm={searchTerm} refetch={refetch} />
          
        </section>
    );
};
export default SearchFilter;
