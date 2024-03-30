const CountryCardSekeleton = () => {
    return (
        <div className="w-full border rounded-md pb-2 shadow-xl animate-pulse h-64">
            <div className="max-h-36 h-1/2 w-full object-cover rounded-tl-md rounded-tr-md bg-gray-200" />
            <div className="px-2 mt-2">
                <div className=" h-4 my-3  bg-gray-200"></div>
                <div className=" h-4 my-3 w-3/4 bg-gray-200"></div>
                <div className=" h-4 my-3 w-3/4 bg-gray-200"></div>
                <div className=" h-4 my-3 w-3/4 bg-gray-200"></div>
            </div>
        </div>
    );
};
export default CountryCardSekeleton;
