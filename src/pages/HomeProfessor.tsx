import React from 'react';



import HeaderBasic from '../components/navigation/header-professor';

import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "../components/ui/sidebar"

import { CustomSidebarTrigger } from '../components/ui/custom-trigger'
import { Button } from "../components/ui/button"
import { Menu } from 'lucide-react'
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

                <nav className="bg-gray-100 py-4 shadow-md bg-white">
                    <div className="flex items-center justify-between w-full px-4">
                        <div className="flex items-center space-x-2">
                        <CustomSidebarTrigger />
                              
                     
                            <img
                                src="https://lh3.googleusercontent.com/proxy/X-B99B9HsP3Lo4ae0nDQMozyMHTcxxdcPINH959IZlOUhqK7j0tdAK-sz09ISiS2c0ew2N4wyhXsHyR5EZ1vqwJKbh0VhZBj7gEfvT4DeFZkKw"
                                alt="Logo"
                                className="h-10"
                            />
                        </div>

                        <ul className="hidden md:flex flex-1 justify-center space-x-6">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="text-gray-700 hover:text-orange-500">
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => GoTo("/profile-select")}
                            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                        >
                            Entrar
                        </button>
                    </div>
                </nav>





                <div className="max-w-7xl mx-auto">
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
            </div>
            </SidebarInset>
            </SidebarProvider>
        </>
    );
};

export default HomeProfessor;
