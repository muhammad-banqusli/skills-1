import arrow from "../assets/up-arrow-svgrepo-com.svg";
import { useState, useEffect } from "react";

const SlideUpBtn = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop;
            const calcHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const scrollValue = Math.round((scrolled * 100) / calcHeight);

            setProgress(scrollValue);

            if (scrolled > 400) {
                setVisible(true);
            } else if (scrolled <= 400) {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisible, { passive: true });

        return () => window.removeEventListener("scroll", toggleVisible);
    }, []);

    return (
        <div
            className={`fixed right-5 md:right-10  bg-gradient-to-tr from-[#9cfcf8] to-[#6e7bfb] flex rounded-full animate-bounce z-10 transition-all duration-300 ${
                visible ? "bottom-5 md:bottom-10" : "-bottom-20"
            }`}
        >
            <button
                onClick={scrollToTop}
                style={{
                    background: `conic-gradient( transparent ${progress}%,  whitesmoke ${progress}%)`,
                }}
                className="rounded-full m-0 p-[2px]"
            >
                <div className=" bg-whitesmoke rounded-full p-2">
                    <img className="h-4 w-4" src={arrow} alt="slide up" />
                </div>
            </button>
        </div>
    );
};
export default SlideUpBtn;
