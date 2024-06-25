import { AppRouter } from "./providers/router";
import { useScrollTop } from "@/shared/hooks/useScrollTop";

function App() {
    useScrollTop();

    return (
        <div>
            <AppRouter />
        </div>
    );
}

export default App;
