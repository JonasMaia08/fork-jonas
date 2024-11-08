<<<<<<< HEAD
import React from 'react';
import Home from './components/ui/Home'

function App() {
  return (
    <div className="">
      <Home />
    </div>
  );
}

export default App;
=======
import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <main>
      <Outlet/>
     </main>
    </div>
  );
}

export default App;
>>>>>>> 31a54bfd248339cd18449a064151961b0b75d121
