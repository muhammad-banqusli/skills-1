import { forwardRef, useImperativeHandle, useState } from "react";
import { Image } from "../types/Pagination";
import closeIcon from "../assets/x-symbol-svgrepo-com.svg";

type PropTypes = {
    image: Image;
};

type ModalRef = {
    openModal: () => void;
};

const ImageModal = forwardRef<ModalRef, PropTypes>(
    ({ image }: PropTypes, ref) => {
        const [open, setOpen] = useState<boolean>(false);

        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";

        useImperativeHandle(ref, () => {
            return {
                openModal: () => setOpen(true),
            };
        });

        const handleClose = () => setOpen(false);

        if (open)
            return (
                <div className="fixed top-0 left-0 right-0 w-full h-full grid place-content-center p-6 z-50">
                    <div className="z-10 relative ">
                        <img
                            src={image.src.large}
                            alt={image.alt}
                            className=" rounded-md animate-image my-auto left-0 right-0"
                            loading="lazy"
                            title={image.alt}
                        />
                        <button
                            className="absolute top-3 right-3 bg-gray-300 bg-opacity-20 rounded-full p-2 animate-close-button"
                            onClick={handleClose}
                        >
                            <img src={closeIcon} alt="close" className="h-3" />
                        </button>
                    </div>
                    <div
                        className="absolute z-0 bg-black opacity-50 w-full h-full"
                        onClick={handleClose}
                    />
                </div>
            );
        else return null;
    }
);
export default ImageModal;
