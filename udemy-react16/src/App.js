import React, { useState } from 'react';
import './App.css';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path='/dialogs'
          render={() => <Dialogs state={props.state.dialogsPage} />} />
        <Route path='/profile'
          render={() => <Profile
            profilePage={props.state.profilePage}
            dispatch={props.dispatch} />} />
      </div>
    </div>
  );
}

export default App;
