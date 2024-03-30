import { useState } from "react";
import upArrow from "../assets/up-arrow-svgrepo-com.svg";

const DropDownMenu = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const list = [
        {
            target: "hero",
            targetName: "Start",
        },
        {
            target: "hero",
            targetName: "end",
        },
    ];

    return (
        <div className="relative">
            <button
                className="border-2 px-2 py-1.5 rounded-md text-sm flex items-center gap-3"
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
            <div className={`${menuOpen ? "flex " : "hidden invisible"}`}>
                <ul
                    className={`absolute top-10 px-2 rounded-md bg-whitesmoke w-full flex-col border-2 drop-shadow-lg animate-fadeIn`}
                >
                    {list.map((item, i) => (
                        <li
                            className="border-b py-1.5 last:border-none text-sm"
                            key={i}
                        >
                            <a href={`#${item.target}`}>{item.targetName}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default DropDownMenu;
