import React, { useEffect } from "react";
import "./App.css";
import Nav from "./Components/Navigation/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfilePageContainer from "./Components/ProfilePage/ProfilePageContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import { connect } from "react-redux";
import { getUserAuthData } from "./Rdeux/auth-reducer";

const App = (props) => {

  useEffect(() => {
    props.getUserAuthData();
  }, [])

  return (
    <BrowserRouter>
      {props.isAuth
        ?
        <div className="App">
          <HeaderContainer />
          <Nav userId={props.state.auth.userId} />
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/Dialogs/*" element={<DialogsContainer />} />
              <Route path="/Profile/:userId" element={<ProfilePageContainer />} />
              <Route path="/Users/*" element={<UsersContainer />} />
              <Route path="/News/*" Component={News} />
              <Route path="/Music/*" Component={Music} />
              <Route path="Settings/*" Component={Settings} />
              {/* <Route path="/Login/*" Component={Login} /> */}
            </Routes>
          </div>
        </div>
        : <Login />
        }
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { getUserAuthData })(App);

