import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {

	let dialogsElements = props.dialogsData.map(el => <DialogItem name={el.name} id={el.id} />)
	let messageElements = props.messagesData.map(el => <Message message={el.message} />)

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messageElements}
			</div>
		</div>
	);
}

export default Dialogs;