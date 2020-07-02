import React, { useState } from 'react';
import './App.css';

const [personState, setPersonState] = useState({
  persons: [
    { name: 'newName', age: 28 },
    { name: 'Manu', age: 29 },
    { name: 'Stephanie', age: 27 }
  ]
})

const app = (props) => {
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
            dispatch={props.dispatch}
          />
          }
        />
      </div>
    </div>
  );
}

export default app;
