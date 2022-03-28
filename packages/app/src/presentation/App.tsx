import { dummy } from '@foo/core';
import './App.scss';
import React from 'react';
import { AppRouter } from './router/AppRouter';

function App() {
  console.log(dummy);

  return (
    <div className="App">
      <header className="App-header">FOO HEADER</header>
      {/* <AppRouter /> */}
    </div>
  );
}

export default App;
