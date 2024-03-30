import { PaginationData } from "../types/Pagination";
import upArrow from "../assets/up-arrow-svgrepo-com.svg";

interface PropTypes {
    paginationData: PaginationData;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const PaginationButtons = ({ paginationData, setPage }: PropTypes) => {
    const { page, per_page, total_results } = paginationData;

    const nextPageDisabled = Math.ceil(total_results / per_page) === page;

    const Button = ({ targetPage }: { targetPage: number }) => (
        <button
            onClick={() => setPage(targetPage)}
            disabled={page === targetPage}
            className="h-6 min-w-6 p-1.5 border-2 rounded-full text-xs flex items-center justify-center border-[#6e7bfb] disabled:border-black"
        >
            {targetPage}
        </button>
    );
    console.log(paginationData);

    return (
        <div className="flex gap-1 sm:gap-1.5 justify-self-end">
            <button
                onClick={() => setPage((prev) => prev - 1)}
                disabled={page === 1}
                className="h-6 w-6 p-[6px] border-2 rounded-full -rotate-90 border-[#6e7bfb] disabled:border-black z-0"
            >
                <img className="h-full w-full" src={upArrow} alt="next" />
            </button>
            {[...Array(Math.ceil(total_results / per_page)).keys()].map(
                (el) => {
                    if (el === 0) {
                        return <Button key={el} targetPage={1} />;
                    } else if (el + 1 === Math.ceil(total_results / per_page)) {
                        return (
                            <Button
                                key={el}
                                targetPage={Math.ceil(total_results / per_page)}
                            />
                        );
                    } else if (el + 1 === page)
                        return <Button key={el} targetPage={page} />;
                    else if (el + 1 === page + 1)
                        return <Button key={el} targetPage={page + 1} />;
                    else if (el + 1 === page + 2)
                        return <Button key={el} targetPage={page + 2} />;
                    else if (el + 1 === page - 1)
                        return <Button key={el} targetPage={page - 1} />;
                    else if (el + 1 === page - 2)
                        return <Button key={el} targetPage={page - 2} />;
                }
            )}
            <button
                onClick={() => setPage((prev) => prev + 1)}
                disabled={nextPageDisabled}
                className="h-6 w-6 p-[6px] border-2 rounded-full rotate-90 border-[#6e7bfb] disabled:border-black"
            >
                <img className="h-full w-full" src={upArrow} alt="next" />
            </button>
        </div>
    );
};
export default PaginationButtons;
