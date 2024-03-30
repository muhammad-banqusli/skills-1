import { Tech } from "../../types/Kanban";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type PropTypes = {
    tech: Tech;
};

const TechnologyCard = ({ tech }: PropTypes) => {
    const {
        setNodeRef,
        attributes,
        listeners,
        transition,
        transform,
        isDragging,
    } = useSortable({
        id: tech.id,
        data: {
            type: "Tech",
            tech,
        },
        transition: {
            duration: 150, // milliseconds
            easing: "cubic-bezier(0.25, 1, 0.5, 1)",
        },
    });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };
    const content = (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            title={tech.title}
            className="flex flex-col gap-2 items-center hover:cursor-grab active:cursor-grabbing touch-none"
        >
            <img
                src={tech.src}
                alt={tech.title}
                className="h-10 w-auto object-contain max-w-20"
            />
            <p className="text-center">{tech.title}</p>
        </div>
    );

    if (isDragging) return <div className="opacity-50">{content}</div>;
    return content;
};
export default TechnologyCard;
