import { useState, useRef, useCallback } from "react";

import { InfiniteLoadingImage, Section, Loading } from "../components";
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
        <Section
            id="infinite"
            title="Infinite Loading"
            paragraph="In this component the loading of images will happen as you
                scroll or by pressing Load More button."
        >
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
                </label>
            </div>
            <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 px-4">
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
            {isLoading && <div className="grow flex items-center py-8"><Loading /></div>}
            {!isLoading && hasNextPage && infiniteType === "BUTTON" && (
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
        </Section>
    );
};
export default InfiniteLoading;
