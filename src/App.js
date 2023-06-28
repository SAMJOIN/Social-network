import React from 'react';
import './App.css';
import './Components/Header/Header.css';
import Header from './Components/Header/Header';
import Nav from './Components/Navigation/Nav';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">

        <Header />
        <Nav state={props.state.friends}/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/Dialogs/*'
              element={<Dialogs
                messages={props.state.dialogsPage.messages}
                dialogs={props.state.dialogsPage.dialogs} />} />
            <Route path='/Profile/*'
              element={<ProfilePage
                posts={props.state.profilePage.posts} />} />
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
