import DropDownMenu from "./DropDownMenu";
import ProgressBar from "./ProgressBar";

type PropTypes = {
    sidebarOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ sidebarOpen, setSidebarOpen }: PropTypes) => {
    const handleSidebarBtn = () => {
        setSidebarOpen((prev) => !prev);
    };
    return (
        <header className="w-full  flex shadow-lg px-3 sticky top-0 bg-whitesmoke align-middle justify-center items-center z-40">
            <div className="flex align-middle justify-between max-w-[1400px] w-full px-10">
                <a href="#hero">
                    <h1 className="my-3">Mohammad Nour Banqusli</h1>
                </a>
                <nav className="hidden md:flex items-center">
                    <DropDownMenu />
                </nav>
            </div>
            <button
                onClick={handleSidebarBtn}
                className={`text-3xl cursor-pointer fixed left-4 w-6 h-6 ${
                    sidebarOpen ? "toggle-btn" : ""
                }`}
                id="toggle-sidebar-button"
            >
                <div className="bg-gray-400 w-6 h-1 rounded absolute -mt-0.5 before:content-[''] before:bg-gray-400 before:w-6 before:h-1 before:rounded before:absolute transition-all duration-500 before:transition-all before:duration-500 before:-translate-x-3 before:-translate-y-2 after:content-[''] after:bg-gray-400 after:w-6 after:h-1 after:rounded after:absolute after:transition-all after:duration-500 after:-translate-x-3 after:translate-y-2" id="toggle-sidebar"></div>
            </button>
            <ProgressBar />
        </header>
    );
};
export default Header;
