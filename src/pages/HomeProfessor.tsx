import React from 'react';
import HeaderBasic from "../components/navigation/header-professor"
import Navbar from "../components/navigation/navbar-professor"
import { useIsMobile } from "../hooks/use-mobile";
import { VisualizarAtendimentos, QuantidadeAtendimentos, AtendimentosAnteriores } from "../components/Atendimentos-professor";





import {
    SidebarInset,
    SidebarProvider,
} from "../components/ui/sidebar"

import useNavigateTo from "../hooks/useNavigateTo";

import { AppSidebar } from '../components/navigation/AppSidebar-prof';

const navLinks = [
    { href: "#", text: "Modalidades" },
    { href: "#", text: "Professores" },
    { href: "#", text: "Galeria" },
];



const HomeProfessor: React.FC = () => {
    const GoTo = useNavigateTo()
    const isMobile = useIsMobile();

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <div className="min-h-screen bg-gray-100">
                    <HeaderBasic />

                    <div className="max-w-7xl pb-16 m-14 ">

                        <h1 className="text-2xl font-bold">
                            Olá, Professor(a) <span className="text-orange-500">Moisés</span>
                        </h1>

                        {isMobile ? (
                            <div className="mt-8 flex flex-col items-center gap-8">
                                <VisualizarAtendimentos/>
                                <QuantidadeAtendimentos/>
                                <AtendimentosAnteriores/>
                            </div>
                        ) : (
                            <div className="mt-8 grid grid-cols-2 gap-8 space-x-10">
                                <div className="flex flex-col gap-8">
                                    <VisualizarAtendimentos/>
                                    <QuantidadeAtendimentos/>
                                </div>
                                <AtendimentosAnteriores/>
                            </div>
                        )}
                    </div>
                    <Navbar/>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default HomeProfessor;
