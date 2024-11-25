import React from 'react';

import HeaderBasic from "../components/navigation/header-professor"

import Navbar from "../components/navigation/navbar-professor"
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
    return (
        <>

            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>

                    <div className="min-h-screen bg-gray-100 ">

                        <HeaderBasic />

                        <div className="max-w-7xl mx-auto pb-1">
                            {/* Saudação */}
                            <h1 className="text-2xl font-bold">
                                Olá, Professor(a) <span className="text-orange-500">Moisés</span>
                            </h1>

                            {/* Conteúdo */}
                            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Aulas de Hoje e Amanhã */}
                                <div>
                                    <h2 className="text-lg font-semibold">Aulas de Hoje</h2>
                                    <div className="mt-4 grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-gray-200 rounded shadow">
                                            <p>Raspadão</p>
                                            <p className="text-orange-500">18:30</p>
                                        </div>
                                        <div className="p-4 bg-gray-200 rounded shadow"></div>
                                    </div>

                                    <h2 className="mt-8 text-lg font-semibold">Aulas de Amanhã</h2>
                                    <div className="mt-4 grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-gray-200 rounded shadow">
                                            <p>Mergulho</p>
                                            <p className="text-orange-500">18:30</p>
                                        </div>
                                        <div className="p-4 bg-gray-200 rounded shadow"></div>
                                    </div>
                                </div>

                                {/* Atendimentos Anteriores */}
                                <div>
                                    <h2 className="text-lg font-semibold">Atendimentos Anteriores</h2>
                                    <div className="mt-4 flex gap-4">
                                        <select className="p-2 bg-white border rounded shadow">
                                            <option>Data</option>
                                        </select>
                                        <select className="p-2 bg-white border rounded shadow">
                                            <option>Local</option>
                                        </select>
                                    </div>

                                    <div className="mt-4 bg-gray-200 p-4 rounded shadow">
                                        <div className="grid grid-cols-3 gap-4 text-gray-600">
                                            <p>Data</p>
                                            <p>Local</p>
                                            <p>Atendimento</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quantidade de Atendimentos */}
                            <div className="mt-8">
                                <h2 className="text-lg font-semibold">Quantidade de Atendimentos</h2>
                                <div className="mt-4 p-4 bg-gray-200 rounded shadow flex justify-between items-center">
                                    <p>
                                        <span className="font-semibold">Modalidade:</span> Futebol
                                    </p>
                                    <p className="text-orange-500 font-bold text-lg">12</p>
                                </div>
                            </div>
                        </div>
                        <Navbar />
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </>
    );
};

export default HomeProfessor;
