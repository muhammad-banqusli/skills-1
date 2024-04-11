import { Image } from "../types/Pagination";
import { useRef, forwardRef, ForwardedRef } from "react";
import ImageModal from "./ImageModal";

type PropTypes = {
    image: Image;
};

const InfiniteLoadingImage = forwardRef(
    ({ image }: PropTypes, ref: ForwardedRef<HTMLDivElement>) => {
        const modalRef = useRef<{ openModal: () => void } | null>(null);

        const handleOpenModal = () => {
            if (modalRef.current) {
                modalRef.current.openModal();
            }
        };

        const ImageBody = (
            <>
                <div
                    onClick={handleOpenModal}
                    className="sm:hover:scale-125 transition-transform cursor-pointer grid place-content-center h-full"
                >
                    <img
                        src={image.src.medium}
                        alt={image.alt}
                        title={image.alt}
                        className="sm:hover:rounded-md w-[80vw] sm:w-full "
                    />
                </div>
                <ImageModal ref={modalRef} image={image} />
            </>
        );

        const content = ref ? (
            <article className="hover:z-50" ref={ref}>
                {ImageBody}
            </article>
        ) : (
            <article className="hover:z-50">{ImageBody}</article>
        );

        return content;
    }
);

export default InfiniteLoadingImage;
