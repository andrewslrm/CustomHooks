import React, { useState } from 'react';
import ComponentMiHook from './components/ComponentMiHook';
//import ComponentHook from './components/ComponentHook';
//import ComponentClass from './components/ComponentClass';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      <h1>Demo</h1>
      <button type="button" onClick={() => setIsVisible(!isVisible)}>Cargar componente</button>
      { isVisible && <ComponentMiHook /> }
    </div>
  );
}

export default App;




