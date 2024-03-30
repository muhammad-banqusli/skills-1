import { Tech, Column } from "../../types/Kanban";
import TechnologyCard from "./TechnologyCard";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { useMemo } from "react";

type PropTypes = {
    column: Column;
    techs: Tech[];
};

const ColumnContainer = ({ column, techs }: PropTypes) => {
    const techsIds = useMemo(() => techs.map((tech) => tech.id), [techs]);

    return (
        <div className="rounded-xl overflow-hidden m-2 border border-gray-200">
            <p className="bg-gray-200 p-2 min-h-16">{column.title}</p>
            <div className="grid grid-cols-3 gap-2 p-2">
                <SortableContext items={techsIds} strategy={rectSortingStrategy}>
                    {techs.map((tech) => (
                        <TechnologyCard key={tech.id} tech={tech} />
                    ))}
                    {12 - techs.length >= 0 &&
                        Array(12 - techs.length)
                            .fill(1)
                            .map((_, i) => (
                                <div key={i} className="h-24 w-4"></div>
                            ))}
                </SortableContext>
            </div>
        </div>
    );
};
export default ColumnContainer;
