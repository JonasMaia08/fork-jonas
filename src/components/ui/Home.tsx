import React from "react";
import AgendaSemanal from "./AgendaSemanal";
import StudentAbsences from "./StudentAbsences";
import ProfessorAbsence from "./ProfessorAbsence";
import CalendarioCompromissos from "./CalendarioCompromissos";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pb-16">
      {/* Cabeçalho: visível apenas em telas md ou maiores */}
      <header className="w-full bg-white flex items-center justify-between px-6 py-4 shadow md:flex">
        <div className="flex items-center space-x-4">
          <img src="https://lh3.googleusercontent.com/proxy/X-B99B9HsP3Lo4ae0nDQMozyMHTcxxdcPINH959IZlOUhqK7j0tdAK-sz09ISiS2c0ew2N4wyhXsHyR5EZ1vqwJKbh0VhZBj7gEfvT4DeFZkKw" alt="" className="h-10"/>
          <h1 className="text-xl font-semibold">ESPORTE NA CIDADE</h1>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-orange-600 font-medium">Faltas</a>
          <a href="#" className="text-gray-600">Modalidades</a>
          <a href="#" className="text-gray-600">Horário</a>
          <div className="bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center text-white">
            <i className="material-icons"></i>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto mt-8 p-4">
        <h2 className="text-2xl font-bold mb-4 text-left">
          Olá, <span className="text-orange-600">Atleta!</span>
        </h2>

        {/* Layout principal usando grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 bg-gray-200 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">HORÁRIO SEMANAL</h3>
            <AgendaSemanal userType="atleta"/>
          </div>

          <div className="row-span-2 bg-gray-200 p-4 rounded-lg shadow-md h-full flex flex-col">
            <h3 className="font-semibold mb-2">CALENDÁRIO DE COMPROMISSOS</h3>
            <CalendarioCompromissos userType="atleta"/>
            
          </div>

          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">AUSÊNCIA DE PROFESSOR</h3>
              <ProfessorAbsence userType="gestor" />
            </div>

            <div className="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col">
              <h3 className="font-semibold mb-2">FALTAS DO ALUNO</h3>
              <StudentAbsences subject="Judô" absences={0} maxAbsences={10} />
            </div>
          </div>
        </div>
      </main>

      {/* Menu Inferior: visível apenas em telas menores que md */}
      <footer className="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-inner flex justify-around py-3 md:hidden gap-4">
        <a href="#" className="flex-1 flex flex-col items-center text-gray-600 shadow-md rounded-md py-1">
          <i className="material-icons"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
<path d="M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9	C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52	C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z"></path>
</svg></i>
          <span className="text-xs">Home</span>
        </a>
        <a href="#" className="flex-1 flex flex-col items-center text-gray-600 shadow-md rounded-md py-1">
          <i className="material-icons"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16">
  <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
</svg></i>
          <span className="text-xs">Faltas</span>
        </a>
        <a href="#" className="flex-1 flex flex-col items-center text-gray-600 shadow-md rounded-md py-1">
          <i className="material-icons"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
<path d="M 17.5 4 C 15.190108 4 13.30317 5.756334 13.050781 8 L 10.5 8 C 8.5850452 8 7 9.5850452 7 11.5 L 7 17.5 C 7 21.071938 9.9280619 24 13.5 24 L 13.548828 24 C 14.885791 28.172832 18.546016 31.306266 23 31.890625 L 23 35 L 19.5 35 C 15.916 35 13 37.916 13 41.5 L 13 42.5 C 13 43.329 13.671 44 14.5 44 L 34.5 44 C 35.329 44 36 43.329 36 42.5 L 36 41.5 C 36 37.916 33.084 35 29.5 35 L 26 35 L 26 31.890625 C 30.453984 31.306266 34.114209 28.172832 35.451172 24 L 35.5 24 C 39.071938 24 42 21.071938 42 17.5 L 42 11.5 C 42 9.5850452 40.414955 8 38.5 8 L 35.949219 8 C 35.69683 5.756334 33.809892 4 31.5 4 L 17.5 4 z M 10.5 11 L 13 11 L 13 20.5 C 13 20.653 13.017486 20.801558 13.023438 20.953125 C 11.305593 20.722554 10 19.286673 10 17.5 L 10 11.5 C 10 11.204955 10.204955 11 10.5 11 z M 36 11 L 38.5 11 C 38.795045 11 39 11.204955 39 11.5 L 39 17.5 C 39 19.286673 37.694407 20.722554 35.976562 20.953125 C 35.982514 20.801558 36 20.653 36 20.5 L 36 11 z"></path>
</svg></i>
          <span className="text-xs">Modalidades</span>
        </a>
        <a href="#" className="flex-1 flex flex-col items-center text-gray-600 shadow-md rounded-md py-1">
          <i className="material-icons"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
<path d="M42 14v-1.5C42 8.916 39.084 6 35.5 6h-23C8.916 6 6 8.916 6 12.5V14H42zM6 17v18.5c0 3.584 2.916 6.5 6.5 6.5h23c3.584 0 6.5-2.916 6.5-6.5V17H6zM15.5 36c-1.381 0-2.5-1.119-2.5-2.5 0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5C18 34.881 16.881 36 15.5 36zM15.5 27c-1.381 0-2.5-1.119-2.5-2.5 0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5C18 25.881 16.881 27 15.5 27zM24 36c-1.381 0-2.5-1.119-2.5-2.5 0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5C26.5 34.881 25.381 36 24 36zM24 27c-1.381 0-2.5-1.119-2.5-2.5 0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5C26.5 25.881 25.381 27 24 27zM32.5 27c-1.381 0-2.5-1.119-2.5-2.5 0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5C35 25.881 33.881 27 32.5 27z"></path>
</svg></i>
          <span className="text-xs">Calendário</span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
