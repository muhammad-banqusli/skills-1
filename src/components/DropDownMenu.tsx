import { useState, useRef } from "react";
import upArrow from "../assets/up-arrow-svgrepo-com.svg";
import useClickOutside from "../hooks/useClickOutside";

const DropDownMenu = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const ref = useRef(null);
    const toggleMenu = () => setMenuOpen((prev) => !prev);
    useClickOutside(ref, () => setMenuOpen(false));
    const list = [
        {
            title: "Hero",
            desination: "#hero",
        },
        {
            title: "Search Filter & Skeleton",
            desination: "#search-filter",
        },

        {
            title: "Pagination & Modal",
            desination: "#pagination",
        },
        {
            title: "Drag & Drop",
            desination: "#drag-and-drop",
        },
        {
            title: "Kanban",
            desination: "#kanban",
        },
        {
            title: "Infinite Loading",
            desination: "#infinite",
        },
    ];

    return (
        <div className="relative" ref={ref}>
            <button
                className="border-2 px-4 py-1.5 rounded-md text-sm flex items-center gap-8 "
                onClick={toggleMenu}
            >
                Select Section
                <img
                    src={upArrow}
                    alt="Toggle Menu"
                    className={`h-3 ${
                        menuOpen ? "-rotate-90" : "-rotate-180"
                    } transition-all duration-300`}
                />
            </button>

            <div
                className={` absolute top-10 rounded-md bg-whitesmoke w-full flex-col border-2 drop-shadow-lg  overflow-hidden ${
                    menuOpen ? "flex " : "hidden"
                }  animate-fadeIn z-50`}
            >
                {list.map((item, i) => (
                    <a
                        className="border-b px-4 py-2 last:border-none text-sm hover:bg-gray-200 transition-all block"
                        key={i}
                        onClick={toggleMenu}
                        href={`${item.desination}`}
                    >
                        {item.title}
                    </a>
                ))}
            </div>
        </div>
    );
};
export default DropDownMenu;
