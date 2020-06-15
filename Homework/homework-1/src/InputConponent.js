import React, { useState } from 'react';
import './InputConponent.css'

const Input = () => {

	const [inputValue, setInputValue] = useState('');
	const [content, setContent] = useState('');

	// const clickButton = useCallback(
	// 	() => {
        //              content = inputValue;
	// 		console.log('work');
	// 	}, []
	// );

	return (
		<div className="input-block">
			<input type="text" onChange={(e) => { setInputValue(e.target.value) }} />
			<div>{inputValue}</div>
			<div className="button-block">
				<button onClick={() => { setContent(inputValue) }}>Push me</button>
			</div>
			<div className="text-block">
				<p>Output text:</p>
				<p>{content}</p>
			</div>
		</div>
	)
}

export default Input;
