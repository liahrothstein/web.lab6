import React from 'react';
import { Link } from 'react-router-dom';

export function MainRoute() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link to="/examples/xmpl1">Example 1</Link>
      <Link to="/examples/xmpl2">Example 2</Link>
    </div>
  );
}
