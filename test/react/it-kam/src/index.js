import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
	{ id: 1, message: 'Hi, how are you?', likesCount: 12 },
	{ id: 1, message: 'It is my first post', likesCount: 11 }
]

let dialogsData = [
	{ id: 1, name: 'Dimych' },
	{ id: 2, name: 'Sergey' },
	{ id: 3, name: 'Aleksandr' },
	{ id: 4, name: 'Oleg' },
	{ id: 5, name: 'Vitaliy' },
]

let messagesData = [
	{ id: 1, message: 'Hi' },
	{ id: 2, message: 'Good day' },
	{ id: 3, message: 'How are you' },
	{ id: 4, message: 'What is your name' },
	{ id: 5, message: 'Cool' },
	{ id: 6, message: 'Good bay' },
]


ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
