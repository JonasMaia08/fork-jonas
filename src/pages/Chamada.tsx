// src/App.tsx ou src/components/ui/Home.tsx
import React from 'react';
import Attendance from '../components/ui/Attendance';

const Chamada: React.FC = () => {
  const userType: 'professor' | 'atleta' = 'professor'; // Defina o tipo de usuário aqui

  return (
    <div>
      <Attendance userType={userType} />
    </div>
  );
};

export default Chamada;
