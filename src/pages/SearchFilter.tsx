import { useState } from "react";
import { CountriesSearchList, Section } from "../components";

const SearchFilter = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [refetch, setrefetch] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setSearchTerm(e.target.value);

    return (
        <Section
            id="search-filter"
            title="Search Filter & Skeleton"
            paragraph=""
        >
            <div className="flex w-full justify-center items-center gap-3 px-10">
                {" "}
                <input
                    type="text"
                    onChange={handleInputChange}
                    value={searchTerm}
                    placeholder="Search"
                    className=" max-w-90 xs:w-11/12 md:w-1/2 lg:w-4/12 px-2 py-1 rounded-sm mt-2 mb-8 border shadow-lg"
                />
                <button
                    className="mb-8 py-1 px-2 mt-2 bg-gray-200 hover:bg-gray-100 border rounded-sm shadow-lg"
                    onClick={() => setrefetch((prev) => !prev)}
                >
                    Refetch
                </button>
            </div>

            <div className="w-full px-10">
                <CountriesSearchList
                    searchTerm={searchTerm}
                    refetch={refetch}
                />
            </div>
        </Section>
    );
};
export default SearchFilter;
