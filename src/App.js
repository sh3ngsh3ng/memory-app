import React from 'react';
import './App.css';
import { MainPage } from "./components/MainPage"
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <React.Fragment>
      <div id='backdrop'>
        <MainPage />
      </div>

    </React.Fragment>
  );
}

export default App;
