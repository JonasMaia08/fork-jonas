import useNavigateTo from "../../hooks/useNavigateTo";
import { House, ChartLine, Users } from "lucide-react";
import { useIsMobile } from "../../hooks/use-mobile";
import { Button } from "../ui/button"
const Navbar = () => {
    const GoTo = useNavigateTo();
    const isMobile = useIsMobile();

    if (!isMobile) {
        return null;
    }

    return (
        <nav className="bg-gray-100 py shadow-md bg-white fixed bottom-0 w-full">
            <div className="container mx-auto flex justify-center space-x-24 items-center">
                <div className="flex flex-col py-2 items-center">
                    <button
                        onClick={() => GoTo("/home-professor")}
                        className="px-4 py-1 rounded-lg hover:shadow-hover-custom hover:bg-orange-500 transition-all"
                    >
                        <House />
                    </button>
                    <label
                        onClick={() => GoTo("/home-professor")}
                        className="cursor-pointer text-sm"
                    >
                        Home
                    </label>
                </div>

                <div className="flex flex-col py-2 items-center">
                    <button
                        onClick={() => GoTo("/chamada")}
                        className="px-4 py-1 rounded-lg hover:shadow-hover-custom hover:bg-orange-500 transition-all"
                    >
                        <ChartLine />
                    </button>
                    <label
                        onClick={() => GoTo("/chamada")}
                        className="cursor-pointer text-sm"
                    >
                        Chamada
                    </label>
                </div>

                <div className="flex flex-col py-2 items-center">
                    <button
                        onClick={() => GoTo("/lista-atletas")}
                        className="px-4 py-1 rounded-lg hover:shadow-hover-custom hover:bg-orange-500 transition-all"
                    >
                        <Users />
                    </button>
                    <label
                        onClick={() => GoTo("/lista-atletas")}
                        className="cursor-pointer text-sm"
                    >
                        Alunos
                    </label>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;