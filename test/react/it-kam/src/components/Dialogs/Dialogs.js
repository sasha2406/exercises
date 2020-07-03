import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';


const Dialogs = (props) => {
	let state = props.store.getState().dialogsPage;
	let dialogsElements = props.dialogsData.map(el => <DialogItem name={el.name} id={el.id} />)
	let messageElements = props.messagesData.map(el => <Message message={el.message} />)
	let newMessageBody = state.newMessageBody;

	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator());
	}

	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.store.dispatch(updateNewMessageBodyCreator(body));
	}
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				<div>{messageElements}</div>
				<div>
					<div><textarea value={newMessageBody}
						onChange={onNewMessageChange}
						placeholder='Enter you message'></textarea></div>
					<div><button onClick={onSendMessageClick}></button></div>
				</div>
			</div>
		</div>
	);
}

export default Dialogs;