import React, { useState } from 'react';

type UserType = 'gestor' | 'atleta' | 'professor';

interface ProfessorAbsenceProps {
  userType: UserType;
}

const ProfessorAbsence: React.FC<ProfessorAbsenceProps> = ({ userType }) => {
  const [selectedProfessors, setSelectedProfessors] = useState<string[]>([]);
  const professors = ['Professor 1', 'Professor 2', 'Professor 3', 'Professor 4'];

  const handleProfessorSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const options = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedProfessors(options);
  };

  return (
    <div className="p-4 rounded-lg bg-gray-100 shadow-md">
      <h2 className="text-lg font-semibold mb-2">AUSÊNCIA DE PROFESSOR</h2>
      {userType === 'atleta' ? (
        <select
          multiple
          className="w-full p-2 rounded border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500"
          onChange={handleProfessorSelect}
          value={selectedProfessors}
        >
          {professors.map(professor => (
            <option key={professor} value={professor}>
              {professor}
            </option>
          ))}
        </select>
      ) : (
        <p className="p-2 bg-white rounded shadow-md">
          {selectedProfessors.length > 0
            ? selectedProfessors.join(', ')
            : 'Não há ausência de professor'}
        </p>
      )}
    </div>
  );
};

export default ProfessorAbsence;
