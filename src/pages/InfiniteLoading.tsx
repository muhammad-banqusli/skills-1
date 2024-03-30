import { useState, useRef, useCallback } from "react";

import InfiniteLoadingImage from "../components/InfiniteLoadingImage";
import Loading from "../components/Loading";
import useImages from "../hooks/useImages";

const InfiniteLoading = () => {
    const [pageNum, setPageNum] = useState<number>(1);
    const [infiniteType, setInfiniteType] = useState<"BUTTON" | "SCROLL">(
        "SCROLL"
    );
    const { isLoading, isError, results, hasNextPage } = useImages(pageNum);

    const intObserver = useRef<IntersectionObserver>();

    const lastImageRef = useCallback(
        (image: HTMLDivElement | null) => {
            if (!image || isLoading) return;
            if (intObserver.current) intObserver.current.disconnect();

            intObserver.current = new IntersectionObserver((entries) => {
                if (
                    entries[0].isIntersecting &&
                    hasNextPage &&
                    infiniteType === "SCROLL"
                ) {
                    setPageNum((prev) => prev + 1);
                }
            });

            if (image) {
                intObserver.current.observe(image); // Start observing the last image element
            }
        },
        [isLoading, hasNextPage, infiniteType]
    );

    return (
        <section className="section-min-height p-2 md:p-8 flex flex-col items-center gap-8 pt-8">
            <h2 className="text-xl font-titles">Infinite Loading</h2>
            <p className="text-center text-sm md:text-lg mb-3">
                In this component the loading of images will happen as you
                scroll or by pressing Load More button.
            </p>
           <div className="flex gap-4">
            
             <label className="flex items-center gap-2">
                <input

                    type="radio"
                    name="SCROLL"
                    value="SCROLL"
                    checked={"SCROLL" === infiniteType}
                    onChange={() => setInfiniteType("SCROLL")}
                    className="transition-all ease-in-out hover:scale-125 checked:hover:scale-100 w-4 h-4"
                />
                Scroll
            </label>
            <label className="flex gap-2 items-center">
                <input
                    type="radio"
                    name="BUTTON"
                    value="BUTTON"
                    checked={"BUTTON" === infiniteType}
                    onChange={() => setInfiniteType("BUTTON")}
                    className="transition-all ease-in-out hover:scale-125 checked:hover:scale-100 w-4 h-4"
                />
                Button
            </label></div>
            <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {results &&
                    results.photos.map((image, i) => {
                        if (results.photos.length === i + 1) {
                            return (
                                <InfiniteLoadingImage
                                    key={i}
                                    image={image}
                                    ref={lastImageRef}
                                />
                            );
                        }
                        return <InfiniteLoadingImage key={i} image={image} />;
                    })}
            </div>
            {isLoading && <Loading />}
            {!isLoading && hasNextPage && infiniteType  === "BUTTON" && (
                <button
                    disabled={!hasNextPage}
                    onClick={() => setPageNum((prev) => prev + 1)}
                    className="bg-gray-300 px-4 py-1 hover:bg-gray-200 transition-all rounded-md"
                >
                    Load More
                </button>
            )}
            {isError && (
                <p className="p-3">Something went wrong while fetching data.</p>
            )}
        </section>
    );
};
export default InfiniteLoading;
