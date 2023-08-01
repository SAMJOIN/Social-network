import React from 'react';
import './App.css';
import './Components/Header/Header.css';
import Header from './Components/Header/Header';
import Nav from './Components/Navigation/Nav';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">

        <Header />
        <Nav state={props.state.friendsPage} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/Dialogs/*' element={<DialogsContainer />} />
            <Route path='/Profile/*' element={<ProfilePage />} />
            <Route path='/Users/*' element={<UsersContainer />} />
            <Route path='/News/*' Component={News} />
            <Route path='/Music/*' Component={Music} />
            <Route path='Settings/*' Component={Settings} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
