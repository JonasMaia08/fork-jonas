import React from "react";
import AgendaSemanal from "./AgendaSemanal";
import StudentAbsences from "./StudentAbsences";
import ProfessorAbsence from "./ProfessorAbsence";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Cabeçalho */}
      <header className="w-full bg-white flex items-center justify-between px-6 py-4 shadow">
        <div className="flex items-center space-x-4">
          <img src="/path/to/logo.png" alt="Logo" className="h-10" />
          <h1 className="text-xl font-semibold">ESPORTE NA CIDADE</h1>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-orange-600 font-medium">
            Faltas
          </a>
          <a href="#" className="text-gray-600">
            Modalidades
          </a>
          <a href="#" className="text-gray-600">
            Horário
          </a>
          <div className="bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center text-white">
            <i className="material-icons">account_circle</i>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto mt-8 p-4 ">
        <h2 className="text-2xl font-bold mb-4 text-left">
          Olá, <span className="text-orange-600">Atleta!</span>
        </h2>

        {/* Layout principal usando grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {/* Coluna da esquerda (Horário Semanal) */}
          <div className="col-span-2 bg-gray-200 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">HORÁRIO SEMANAL</h3>
            <AgendaSemanal />
          </div>

          {/* Coluna direita (Calendário de Compromissos com altura dupla) */}
          <div className="row-span-2 bg-gray-200 p-4 rounded-lg shadow-md h-full flex flex-col">
            <h3 className="font-semibold mb-2">CALENDÁRIO DE COMPROMISSOS</h3>
            <p className="bg-white p-2 rounded-md">
              Não haverá aula - Feriado nacional
            </p>
          </div>

          {/* Seções abaixo de Horário Semanal */}
          <div className="col-span-2 grid grid-cols-2 gap-6">
            {/* Ausência de Professor */}
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">AUSÊNCIA DE PROFESSOR</h3>
              <ProfessorAbsence userType="gestor" />
            </div>

            {/* Faltas do Aluno */}
            <div className="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col ">
              
                <StudentAbsences subject="Atletismo" absences={3} maxAbsences={8} />
              
            </div>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="w-full mt-8 p-4 text-center text-gray-500 text-sm">
        © 2024 [Your Company Name] and [Other Owner's Name], All rights
        reserved.
      </footer>
    </div>
  );
};

export default Home;
