import { useState } from "react";

import {
    DragAndDrop,
    Hero,
    Pagination,
    SearchFilter,
    Kanban,
    InfiniteLoading
} from "./pages";
import { Header, Footer, Sidebar, SlideUpBtn } from "./components";

function App() {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    return (
        <div className="flex flex-col items-center">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <Sidebar open={sidebarOpen} />
            <main className="w-full max-w-[1400px] shadow-2xl">
                <Hero />
                <SearchFilter />
                <Pagination />
                <DragAndDrop />
                <Kanban />
                <InfiniteLoading />
                <SlideUpBtn />
            </main>
            <Footer />
        </div>
    );
}

export default App;
