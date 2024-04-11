import { RefObject, useEffect } from "react";

const useClickOutside = (
    ref: RefObject<HTMLElement>,
    handler: (ev: MouseEvent | TouchEvent) => void
) => {
    useEffect(() => {
        function listener(event: MouseEvent | TouchEvent) {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }

            handler(event);
        }

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [handler, ref]);
};

export default useClickOutside;
