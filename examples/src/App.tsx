import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import {
  Example1,
  Example2,
  Example3,
  Example4,
  Example5,
  Example6,
  Example7,
  Example8,
  Example9,
  Example10,
  Example11,
  Example12,
} from './components';
import { MainRoute } from './MainRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/examples" />} />
      <Route path="/examples" element={<MainRoute />} />
      <Route path="/examples/xmpl1" element={<Example1 />} />
      <Route path="/examples/xmpl2" element={<Example2 />} />
      <Route path="/examples/xmpl3" element={<Example3 />} />
      <Route path="/examples/xmpl4" element={<Example4 />} />
      <Route path="/examples/xmpl5" element={<Example5 />} />
      <Route path="/examples/xmpl6" element={<Example6 />} />
      <Route path="/examples/xmpl7" element={<Example7 />} />
      <Route path="/examples/xmpl8" element={<Example8 />} />
      <Route path="/examples/xmpl9" element={<Example9 />} />
      <Route path="/examples/xmpl10" element={<Example10 />} />
      <Route path="/examples/xmpl11" element={<Example11 />} />
      <Route path="/examples/xmpl12" element={<Example12 />} />
    </Routes>
  );
}

export default App;
