import { useState, useEffect } from "react";
import { ImagesResponse } from "../types/Pagination";

const useImages = (pageNum: number = 1) => {
    const [results, setResults] = useState<ImagesResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState({});
    const [hasNextPage, setHasNextPage] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        setError({});

        const controller = new AbortController();
        const { signal } = controller;

        fetch(
            `https://api.pexels.com/v1/search?query=cars&orientation=portrait&page=${pageNum}&per_page=20`,
            {
                headers: {
                    Authorization:
                        "Pz6CLNIDRA8EdrRp0s1Q4NEuNADFne7qLuRq8SuKuO3ECNaYusgoCeSl",
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setResults((prev) => {
                        if (prev) {
                            // Merge the new photos with the old ones
                            const mergedPhotos = [
                                ...prev.photos,
                                ...data.photos,
                            ];
                            return { ...data, photos: mergedPhotos };
                        } else {
                            return data;
                        }
                    });

                    const { page, per_page, total_results } = data;
                    const nextPageDisabled = total_results / per_page === page;
                    nextPageDisabled
                        ? setHasNextPage(false)
                        : setHasNextPage(true);
                    setIsLoading(false);
                }, 5000);
            })
            .catch((e: Error) => {
                setIsLoading(false);
                if (signal.aborted) return;
                setIsError(true);
                setError({ message: e.message });
            });
        return () => controller.abort();
    }, [pageNum]);

    return { isLoading, isError, error, results, hasNextPage };
};

export default useImages;
