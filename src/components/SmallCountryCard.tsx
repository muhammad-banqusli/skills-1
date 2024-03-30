import { ExtendedCountryInfo } from "../types/Country";
import draggableIcon from "../assets/draggable-svgrepo-com.svg";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type PropTypes = {
    country: ExtendedCountryInfo;
    id: number;
};

const SmallCountryCard = ({ country, id }: PropTypes) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };
    return (
        <div
            className="flex justify-center cursor-grab active:cursor-grabbing touch-none"
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
        >
            <div
                className="flex items-center justify-between border w-11/12 md:w-9/12 gap-2"
                title={country.name.official}
            >
                <img
                    className="w-16 h-10 border-r"
                    src={country.flags.png}
                    alt={country.name.official}
                />
                <h3>{country.name.common}</h3>
                <img src={draggableIcon} alt="draggable" className="h-10" />
            </div>
        </div>
    );
};
export default SmallCountryCard;
