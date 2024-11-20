import React from 'react';

const Home: React.FC = () => {
  const diasDaSemana: string[] = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Cabeçalho */}
      <header className="w-full bg-white flex items-center justify-between px-6 py-4 shadow">
        <div className="flex items-center space-x-4">
          <img src="/path/to/logo.png" alt="Logo" className="h-10" />
          <h1 className="text-xl font-semibold">ESPORTE NA CIDADE</h1>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-orange-600 font-medium">Faltas</a>
          <a href="#" className="text-gray-600">Modalidades</a>
          <a href="#" className="text-gray-600">Horário</a>
          <div className="bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center text-white">
            <i className="material-icons">account_circle</i>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="w-full max-w-4xl mx-auto mt-8 p-4">
        <h2 className="text-2xl font-bold mb-4">Olá, <span className="text-orange-600">Atleta!</span></h2>
        
        <div className="grid grid-cols-2 gap-6">
          {/* Horário Semanal */}
          <div className="col-span-2 md:col-span-1 bg-gray-200 p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-2">HORÁRIO SEMANAL</h3>
            <div className="grid grid-cols-6 gap-2">
              {diasDaSemana.map((dia) => (
                <div key={dia} className="bg-white p-2 rounded-md text-center">{dia}</div>
              ))}
            </div>
          </div>

          {/* Calendário de Compromissos */}
          <div className="bg-gray-200 p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-2">CALENDÁRIO DE COMPROMISSOS</h3>
            <p className="bg-white p-2 rounded-md">Não haverá aula - Feriado nacional</p>
          </div>

          {/* Ausência de Professor */}
          <div className="bg-gray-200 p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-2">AUSÊNCIA DE PROFESSOR</h3>
            <p className="bg-white p-2 rounded-md">Não há ausência de professor</p>
          </div>

          {/* Faltas do Aluno */}
          <div className="bg-gray-200 p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-2">FALTAS DO ALUNO</h3>
            <div className="text-center">
              <p className="text-orange-600 text-lg font-medium">Atletismo</p>
              <p className="text-3xl font-bold">03</p>
              <p className="text-gray-500">Número de faltas permitidas: 08</p>
              <button className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-md">Ver detalhes</button>
            </div>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="w-full mt-8 p-4 text-center text-gray-500 text-sm">
        © 2024 [Your Company Name] and [Other Owner's Name], All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
