import { Image } from "../types/Pagination";
import { useRef } from "react";
import ImageModal from "./ImageModal";

type PropTypes = {
    image: Image;
};

const PaginationImage = ({ image }: PropTypes) => {
    const modalRef = useRef<{ openModal: () => void } | null>(null);

    const handleOpenModal = () => {
        if (modalRef.current) {
            modalRef.current.openModal();
        }
    };

    return (
        <>
            <div onClick={handleOpenModal} className="sm:hover:scale-125 transition-transform cursor-pointer">
                <img src={image.src.tiny} alt={image.alt} title={image.alt} className="sm:hover:rounded-md"/>
            </div>
            <ImageModal ref={modalRef} image={image} />
        </>
    );
};

export default PaginationImage;
