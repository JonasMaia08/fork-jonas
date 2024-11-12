import React, { useState } from "react";

interface Student {
  id: number;
  name: string;
  status: "PRESENTE" | "AUSENTE";
  absences: number;
}

interface AttendanceProps {
  userType: "professor" | "atleta";
}

const initialStudents: Student[] = [
  {
    id: 1,
    name: "Alessandra Cardoso dos Reis",
    status: "PRESENTE",
    absences: 3,
  },
  {
    id: 2,
    name: "Alessandro Cardoso dos Reis",
    status: "PRESENTE",
    absences: 4,
  },
  {
    id: 3,
    name: "Alessandre Cardoso dos Reis",
    status: "PRESENTE",
    absences: 4,
  },
  {
    id: 4,
    name: "Alessandri Cardoso dos Reis",
    status: "PRESENTE",
    absences: 4,
  },
];

const ChamadaComp: React.FC<AttendanceProps> = ({ userType }) => {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [selectedDate, setSelectedDate] = useState<string>("");

  const toggleStatus = (studentId: number) => {
    if (userType === "professor") {
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.id === studentId
            ? {
              ...student,
              status: student.status === "PRESENTE" ? "AUSENTE" : "PRESENTE",
              absences:
                student.status === "PRESENTE"
                  ? student.absences + 1
                  : student.absences - 1,
            }
            : student
        )
      );
    }
  };

  return (
    <div className="p-6 bg-[#F4F6FF] min-h-screen ">
      {/* Cabeçalho alinhado totalmente à esquerda */}
      <div className="mb-6">
        <h1 className="text-xl flex items-center">
          <span className="font-jockey text-xl mr-2">ESPORTE NA CIDADE</span>
          <span className="font-inter text-sm ">| Chamada</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 mb-1">
            Selecione a modalidade:
          </label>
          <select className="w-full p-2 border border-black bg-[#d9d9d9] ">
            <option>Selecione a modalidade</option>
            <option>Futebol</option>
            <option>Basquete</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Ano/Semestre:</label>
          <select className="w-full p-2 border border-black bg-[#d9d9d9]">
            <option>2024/1</option>
            <option>2024/2</option>
          </select>
        </div>
        <div className="col-span-2">
          <label className="block text-gray-700 mb-1 ">
            Informe a data da chamada:
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full p-2 border border-black bg-[#d9d9d9]"
          />
        </div>
      </div>
      <button className="bg-[#EB8317] mb-6 text-black py-2 px-4 mt-6 rounded border border-black">
        Gerar Lista de Alunos
      </button>

      <div className="space-y-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="p-4 bg-[#d9d9d9] border border-black flex flex-col cursor-pointer"
            onClick={() => toggleStatus(student.id)}
          >
            <div className="flex items-center">
              <img src="https://via.placeholder.com/50" alt={student.name} className="rounded-full mr-4" />
              <div className="flex-1">
                <h3 className="font-semibold">{student.name}</h3>
                <p className={`font-bold ${student.status === 'PRESENTE' ? 'text-green-500' : 'text-red-500'}`}>
                  {student.status}
                </p>
                <p>{student.absences} Faltas</p>

                {/* Texto e barra de progresso */}
                <div className="flex items-center mt-2">
                  <div className="flex-1 bg-[#F4F6FF] border border-black h-4 overflow-hidden">
                    <div
                      className="bg-[#10375C] h-full"
                      style={{ width: `${(student.absences / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm ml-2"> % Faltas: {student.absences * 10}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      {userType === "professor" && (
        <button className="bg-[#EB8317] text-black py-2 px-4 mt-6 rounded border border-black">
          Gravar Chamada
        </button>
      )}
    </div>
  );
};

export default ChamadaComp;
