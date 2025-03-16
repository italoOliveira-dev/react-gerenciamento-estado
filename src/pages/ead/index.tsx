import Sala from "@/components/ead/Sala";
import { CursoProvider } from "@/context/CursoContext";

export default function EAD() {

    return (
        <CursoProvider>
            <Sala />
        </CursoProvider>
    );
}