type PropTypes = {
    open: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

import Content from "./Content";
import { useRef } from "react";
import  useClickOutside  from "../../hooks/useClickOutside";

const Sidebar = ({ open, setSidebarOpen }: PropTypes) => {
    const ref = useRef(null);
    useClickOutside(ref, () => setSidebarOpen(false));
    return (
        <div
            ref={ref}
            className={`h-full pt-[60px] w-80 max-w-full z-20 fixed ${
                open ? " translate-x-80 " : " -translate-x-80"
            } bottom-0 -left-80 transition-transform duration-500 bg-white shadow-2xl`}
        >
            <Content setSidebarOpen={setSidebarOpen} />
        </div>
    );
};
export default Sidebar;
