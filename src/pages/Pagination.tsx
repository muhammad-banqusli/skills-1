import { useEffect, useState } from "react";
import { ImagesResponse } from "../types/Pagination";
import { PaginationImage, PaginationButtons } from "../components";

const Pagination = () => {
    const [images, setImages] = useState<ImagesResponse | null>(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch(`https://api.pexels.com/v1/search?query=nature&page=${page}&per_page=50`, {
            headers: {
                Authorization:
                    "Pz6CLNIDRA8EdrRp0s1Q4NEuNADFne7qLuRq8SuKuO3ECNaYusgoCeSl",
            },
        })
            .then((res) => res.json())
            .then((data) => setImages(data));
    }, [page]);
    return (
        <section className="section-min-height p-2 md:p-8 flex flex-col items-center gap-8 pt-8">
            <h2 className="text-xl font-titles">Pagination & Modal</h2>
            <div className="container grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-0.5">
                {images &&
                    images.photos.map((image) => (
                        <PaginationImage key={image.id} image={image} />
                    ))}
            </div>
            {images && (
                <div className="flex gap-2">
                    <PaginationButtons
                        paginationData={{
                            page: images.page,
                            per_page: images.per_page,
                            total_results: images.total_results,
                        }}
                        setPage={setPage}
                    />
                </div>
            )}
        </section>
    );
};
export default Pagination;
