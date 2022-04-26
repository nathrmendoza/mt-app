import React from 'react'
import './scss/app.scss'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//pages
import InitialSetup from './pages/startup';

//components
import Header from './components/Header';

function App() {
  return (
    <div id="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<InitialSetup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
