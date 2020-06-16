import React, { useState, useCallback } from 'react';
import './InputConponent.css'

const Input = () => {
	const [inputValue, setInputValue] = useState('');
	const [content, setContent] = useState('');

	const clickButton = useCallback(
		() => {
			setContent(inputValue);
			console.log('work');
		}, [inputValue]
	);

	const onChange = (e) => { setInputValue(e.target.value) }
	// const onClick = () => { setContent(inputValue) };

	return (
		<div className="input-block">
			<input type="text" onChange={onChange} />
			<div>{inputValue}</div>
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
