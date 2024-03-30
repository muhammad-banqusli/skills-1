import KanbanBoard from "../components/Kanban";
const Kanban = () => {
    return (
        <section className="section-min-height p-2 md:p-8 flex flex-col items-center gap-5 pt-8">
            <h2 className="text-xl font-titles">Kanban</h2>
            <p className="text-center text-sm md:text-lg mb-3">
               Sort Technologies with drag and drop.
            </p>
            <KanbanBoard />
        </section>
    );
};
export default Kanban;
