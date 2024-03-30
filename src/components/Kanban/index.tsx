import { Tech, columns } from "../../types/Kanban";
import { useState } from "react";
import {
    DndContext,
    DragOverlay,
    DragStartEvent,
    useSensor,
    useSensors,
    PointerSensor,
    DragOverEvent,
    TouchSensor,
    closestCorners,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import ColumnContainer from "./ColumnContainer";
import { initTechs } from "./techs";
import TechnologyCard from "./TechnologyCard";

const KanbanBoard = () => {
    const [techs, setTechs] = useState<Tech[]>(initTechs);

    const columnIds = columns.map((col) => col.id);

    const [activeTech, setActiveTech] = useState<Tech | null>(null);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 1,
            },
        }),
        useSensor(TouchSensor, {
            // Press delay of 250ms, with tolerance of 5px of movement
            activationConstraint: {
                delay: 250,
                tolerance: 5,
            },
        })
    );

    const onDragStart = (event: DragStartEvent) => {
        if (event.active.data.current?.type === "Tech") {
            setActiveTech(event.active.data.current.tech);
            return;
        }
    };

    const onDragOver = (event: DragOverEvent) => {
        const { active, over } = event;
        if (!over) return;

        const activeId = active.id;
        const overId = over.id;
        if (activeId === overId) return;

        const isActiveATech = active.data.current?.type === "Tech";
        const isOverATech = over.data.current?.type === "Tech";

        if (!isActiveATech) return;
        if (isActiveATech && isOverATech) {
            setTechs((techs) => {
                const activeIndex = techs.findIndex((t) => t.id === activeId);
                const overIndex = techs.findIndex((t) => t.id === overId);
                if (techs[activeIndex].columnId !== techs[overIndex].columnId) {
                    techs[activeIndex].columnId = techs[overIndex].columnId;
                    return arrayMove(techs, activeIndex, overIndex - 1);
                }
                return arrayMove(techs, activeIndex, overIndex);
            });
        }

        const isOverAColumn = over.data.current?.type === "Column";
        if (isActiveATech && isOverAColumn) {
            setTechs((techs) => {
                const activeIndex = techs.findIndex((t) => t.id === activeId);

                techs[activeIndex].columnId = overId;
                return arrayMove(techs, activeIndex, activeIndex);
            });
        }
    };

    return (
        <DndContext
            sensors={sensors}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDragEnd={() => setActiveTech(null)}
            collisionDetection={closestCorners}
        >
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3">
                <SortableContext items={columnIds}>
                    {columns.map((column) => (
                        <ColumnContainer
                            key={column.id}
                            column={column}
                            techs={techs.filter(
                                (tech) => tech.columnId === column.id
                            )}
                        />
                    ))}
                </SortableContext>
            </div>

            {createPortal(
                <DragOverlay>
                    {activeTech && <TechnologyCard tech={activeTech} />}
                </DragOverlay>,
                document.body
            )}
        </DndContext>
    );
};
export default KanbanBoard;
