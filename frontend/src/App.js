import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ini untuk mengaktifkan tampilan Bootstrap
import Absensi from './components/Absensi';

import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary mb-4">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Sistem Absensi Mahasiswa</span>
        </div>
      </nav>
      <Absensi />
    </div>
  );
}

export default App;