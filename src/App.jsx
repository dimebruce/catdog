import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './Index'; // Tu componente de página principal
import Archie from './pets/Archie';
import Coco from './pets/Coco'; // Tu nuevo componente de página para coco


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/coco" element={<Coco />} />
        <Route path="/archie" element={<Archie />} />
        {/* Otras rutas */}
      </Routes>
    </Router>
  )
}

export default App