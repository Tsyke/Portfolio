import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CompetPage } from './page/CompetPage';
import { HomePage } from './page/HomePage';
import { ProjetPage } from './page/ProjetsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/competences" element={<CompetPage />} />
      <Route path='/projets' element={<ProjetPage />} />
    </Routes>
  );
}

export default App;
