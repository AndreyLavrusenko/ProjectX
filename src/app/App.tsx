import { AppRouter } from "./providers/router";
import { useScrollTop } from "@/shared/hooks/useScrollTop";
import { Navbar } from "@/widgets/Navbar/ui/Navbar";

function App() {
    useScrollTop();

    return (
        <div>
            <AppRouter />
            <Navbar />
        </div>
    );
}

export default App;
