import React from "react";

interface StudentAbsencesProps {
  subject: string;
  absences: number;
  maxAbsences: number;
}

const StudentAbsences: React.FC<StudentAbsencesProps> = ({
  subject,
  absences,
  maxAbsences,
}) => {
  return (
    <div className="flex flex-col ">
      <div className="text-orange-500 text-lg font-bold mt-2">{subject}</div>
      <div className="flex items-baseline mt-1">
        <span className="text-4xl font-bold text-black">{absences}</span>
        <span className="text-lg font-semibold text-gray-700 ml-2">Faltas</span>
      </div>
      <p className="text-xs text-gray-500 mt-1">
        Número de faltas permitidas {maxAbsences}
      </p>
      <div className="flex justify-end mt-4">
        <button className="bg-orange-500 text-white text-sm font-semibold py-2 px-4 rounded-md">
          Ver detalhes
        </button>
      </div>
    </div>
  );
};

export default StudentAbsences;
