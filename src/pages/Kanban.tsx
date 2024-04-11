import { KanbanBoard, Section } from "../components";
const Kanban = () => {
    return (
        <Section
            id="kanban"
            title="Kanban"
            paragraph="Sort Technologies with drag and drop"
        >
            <div className="px-2">
                <KanbanBoard />
            </div>
        </Section>
    );
};
export default Kanban;
