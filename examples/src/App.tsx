import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Example1 } from './components';
import { MainRoute } from './MainRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/examples" />} />
      <Route path="/examples" element={<MainRoute />} />
      <Route path="/examples/xmpl1" element={<Example1 />} />
    </Routes>
  );
}

export default App;
