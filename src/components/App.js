import React, { useState, useRef } from 'react';

import Game from './Game';

import './App.css';

const MAX_ROWS = 20;
const MIN_ROWS = 5;

const App = () => {
	const inputRef = useRef();
	const [isPlaying, setIsPlaying] = useState(false);
	const [rows, setRows] = useState();

	const submitHandler = () => {
		if (rows < MIN_ROWS || rows > MAX_ROWS) {
			inputRef.current.focus();
			return;
		}
		setIsPlaying(true);
	};

	const handleChangeRow = () => {
		const rows = parseInt(inputRef.current.value);
		setRows(rows);
	};

	const handleReturn = () => {
		setRows(0);
		setIsPlaying(false);
	};

	return (
		<div className='container'>
			<h3>Tic-tac-toe</h3>
			{isPlaying ? (
				<Game rows={rows}>
					<button id='return-button' onClick={handleReturn}>
						Return
					</button>
				</Game>
			) : (
				<div>
					<input
						type='number'
						onChange={handleChangeRow}
						ref={inputRef}
						placeholder={`Type board size - min = ${MIN_ROWS} and max = ${MAX_ROWS}`}
					/>
					<button onClick={submitHandler}>Play</button>
				</div>
			)}
		</div>
	);
};

export default App;
