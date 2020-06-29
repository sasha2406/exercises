import React, { useState, useCallback } from 'react';
import { InputConponent } from './InputConponent';
import './InputConponent.css';

const Input = () => {

	const [inputValue, setInputValue] = useState('');
	const [content, setContent] = useState('');

	const handleOnChange = (e) => { setInputValue(e.target.value) };

	const clickButton = useCallback(
		() => {
		setContent(inputValue);
		}, [inputValue]
	);

	return (
		<div className="input-block">
			<InputConponent type="text" onChange={handleOnChange} id='id' name='input' />
			<div className="button-block">
				<button onClick={clickButton}>Push me</button>
			</div>
			<div className="text-block">
				<p>Output text:</p>
				<p>{content}</p>
			</div>
		</div>
	)
}

export default Input;
