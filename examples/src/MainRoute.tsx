import React from 'react';
import { Link } from 'react-router-dom';

export function MainRoute() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link to="/examples/xmpl1">Example 1</Link>
      <Link to="/examples/xmpl2">Example 2</Link>
      <Link to="/examples/xmpl3">Example 3</Link>
      <Link to="/examples/xmpl4">Example 4</Link>
      <Link to="/examples/xmpl5">Example 5</Link>
      <Link to="/examples/xmpl6">Example 6</Link>
    </div>
  );
}
