import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';

function App(props) {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<div className="app-wrapper-content">
					<Route exact path='/' render={ () => <Profile postData={props.postData} /> } />
					<Route path='/dialogs' render={ () => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} /> } />
					<Route path='/profile' render={ () => <Profile postData={props.postData} /> } />
					<Route path='/news' component={News} />
					<Route path='/music' component={Music} />
					<Route path='/settings' component={Settings} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;