import { useEffect, useState } from "react";
import { ImagesResponse } from "../types/Pagination";
import { PaginationImage, PaginationButtons, Section } from "../components";

const Pagination = () => {
    const [images, setImages] = useState<ImagesResponse | null>(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch(
            `https://api.pexels.com/v1/search?query=nature&page=${page}&per_page=50`,
            {
                headers: {
                    Authorization:
                        "Pz6CLNIDRA8EdrRp0s1Q4NEuNADFne7qLuRq8SuKuO3ECNaYusgoCeSl",
                },
            }
        )
            .then((res) => res.json())
            .then((data) => setImages(data));
    }, [page]);
    return (
        <Section title="Pagination & Modal" paragraph="" id="pagination">
                <div className="container grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-0.5 px-4">
                    {images &&
                        images.photos.map((image) => (
                            <PaginationImage key={image.id} image={image} />
                        ))}
                </div>
                {images && (
                    <div className="flex gap-2 grow items-center">
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
            </Section>
    );
};
export default Pagination;
