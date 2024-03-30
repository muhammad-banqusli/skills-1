import { useState, useEffect } from "react";

const ProgressBar = () => {
    const [progress, setProgress] = useState(0)
    useEffect(() => {
        const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop;
            const calcHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const scrollValue = (scrolled * 100) / calcHeight

            setProgress(scrollValue);
        };

        window.addEventListener("scroll", toggleVisible, { passive: true });

        return () => window.removeEventListener("scroll", toggleVisible);
    }, []);
  return (
    <div className="h-1 absolute left-0 -bottom-1 progress-bar" style={{width:`${progress}%`}}></div>
  )
}
export default ProgressBar