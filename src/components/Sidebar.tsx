type PropTypes = {
    open: boolean;
};

const Sidebar = ({ open }: PropTypes) => {
    return (
        <div
            className={`section-min-height w-80 max-w-full z-20 fixed ${
                open ? " translate-x-80 " : " -translate-x-80"
            } bottom-0 -left-80 transition-transform duration-500 bg-white shadow-2xl`}
        >
            Sidebar
        </div>
    );
};
export default Sidebar;
