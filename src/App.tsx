import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BriefingPage from './pages/BriefingPage';
import ProcessandoPage from './pages/ProcessandoPage';
import ResultadoPage from './pages/ResultadoPage';
import ConfirmacaoPage from './pages/ConfirmacaoPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BriefingPage />} />
        <Route path="/processando" element={<ProcessandoPage />} />
        <Route path="/confirmacao" element={<ConfirmacaoPage />} />
        <Route path="/resultado/:id" element={<ResultadoPage />} />
      </Routes>
    </Router>
  );
}
