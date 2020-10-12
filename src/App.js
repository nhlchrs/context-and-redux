import React from 'react';
import './App.css';
import Contextapp from './Context/Contextapp'
import ContextReducerapp from './ContextUseReducer/Contextreducerapp'

import Reduxapp from './Redux/Components/Reduxapp'
function App() {
  return (
    <div className="App">
      <Contextapp/>
      <ContextReducerapp/>
      <Reduxapp/>
    </div>
  );
}

export default App;
