import React, { useState } from 'react';

type UserType = 'professor' | 'atleta';

interface ScheduleProps {
  userType: UserType;
}

interface DayNote {
  day: string;
  note: string;
}

const initialNotes: DayNote[] = [
  { day: 'Segunda-Feira', note: '' },
  { day: 'Terça-Feira', note: '' },
  { day: 'Quarta-Feira', note: '' },
  { day: 'Quinta-Feira', note: '' },
  { day: 'Sexta-Feira', note: '' },
  { day: 'Sábado', note: '' },
];

const AgendaSemanal: React.FC<ScheduleProps> = ({ userType }) => {
  const [notes, setNotes] = useState<DayNote[]>(initialNotes);

  const handleNoteChange = (index: number, value: string) => {
    if (userType === 'professor') {
      const updatedNotes = [...notes];
      updatedNotes[index].note = value;
      setNotes(updatedNotes);
    }
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <div className="grid grid-cols-6 gap-4">
        {notes.map((dayNote, index) => (
          <div key={index} className="bg-gray-200 p-3 rounded">
            <h3 className="font-semibold">{dayNote.day}</h3>
            {userType === 'professor' ? (
              <textarea
                className="mt-2 w-full p-2 border rounded bg-gray-200"
                value={dayNote.note}
                onChange={(e) => handleNoteChange(index, e.target.value)}
                placeholder="Anotação"
              />
            ) : (
              <p className="mt-2 text-gray-700">{dayNote.note || "Sem anotação"}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Exemplo de uso do componente
const Home: React.FC = () => {
  const userType: UserType = 'atleta'; // ou 'atleta', dependendo do usuário logado

  return (
    <div>
      <AgendaSemanal userType={userType} />
    </div>
  );
};

export default Home;
