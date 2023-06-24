import React from 'react';
import './App.css';
import './styles/Header.css'
import './styles/Nav.css'
import Header from './Components/Header';
import Nav from './Components/Nav';
import ProfilePage from './Components/ProfilePage';

function App() {
  return (
    <div className="App">

      <Header />
      <Nav />
      <ProfilePage />

    </div>
  );
}

export default App;
