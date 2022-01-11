import React from 'react';
import Haku from './components/Hakukenttä';
import index from './index.css';
import Tekstiosio from './components/Tekstiosio';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Haku />

      <Tekstiosio />
    </div>
  );
}

export default App;
