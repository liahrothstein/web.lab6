import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Example1, Example2, Example3 } from './components';
import { MainRoute } from './MainRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/examples" />} />
      <Route path="/examples" element={<MainRoute />} />
      <Route path="/examples/xmpl1" element={<Example1 />} />
      <Route path="/examples/xmpl2" element={<Example2 />} />
      <Route path="/examples/xmpl3" element={<Example3 />} />
    </Routes>
  );
}

export default App;
