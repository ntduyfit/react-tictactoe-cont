import React, { useState } from 'react';
import propTypes from 'prop-types';

import Board from './Board';
import History from './History';
import CalculatePosition from '../helpers/CalculatePosition';
import CalculateWinner from '../helpers/CalculateWinner';

import './Game.css';

const initStepNumber = {
	max: 0,
	current: 0,
	lastIndex: -1
};

const Game = ({ rows, children }) => {
	const numOfCells = rows * rows;
	const [history, setHistory] = useState([
		{
			squares: Array(numOfCells).fill(null),
			position: {
				row: -1,
				col: -1
			}
		}
	]);
	const [stepNumber, setStepNumber] = useState(initStepNumber);
	const [xIsNext, setXIsNext] = useState(true);
	const [isAscending, setIsAscending] = useState(true);

	const jumpTo = (step) => {
		setStepNumber((prev) => ({
			...prev,
			current: step
		}));
		const check = step % 2 === 0;
		setXIsNext(check);
	};

	const handleClick = (i) => {
		const current = history[stepNumber.current];
		const squares = current.squares.slice();
		if (squares[i]) {
			return;
		}
		squares[i] = xIsNext ? 'X' : 'O';
		const position = CalculatePosition(i, rows);

		const currentHistory = history.slice(0, stepNumber.current + 1);

		setHistory(() => [
			...currentHistory,
			{
				position,
				squares
			}
		]);

		const newStepNumber = currentHistory.length;
		setStepNumber({
			current: newStepNumber,
			max: newStepNumber,
			lastIndex: i
		});

		const checkNext = !xIsNext;
		setXIsNext(checkNext);
	};

	const handleSortChange = () => {
		const toggle = !isAscending;
		setIsAscending(toggle);
	};

	const current = history[stepNumber.current];
	const currentSym = xIsNext ? 'O' : 'X';
	const winChain = CalculateWinner(current.squares, currentSym, stepNumber.lastIndex, rows);

	const maxStep = rows * rows;
	const isDraw = stepNumber.current === maxStep && !winChain;

	return (
		<div className='game'>
			<div className='game-board'>
				<Board squares={current.squares} onClick={handleClick} winChain={winChain} numOfRows={rows} />
				{children}
			</div>
			<div className='game-info'>
				<button onClick={handleSortChange}>Sort steps order</button>
				<span>{isAscending ? 'Ascending' : 'Descending'}</span>
				{isDraw ? (
					<div>Draw</div>
				) : (
					<div>{winChain ? 'Winner: ' + currentSym : 'Next player: ' + (xIsNext ? 'X' : 'O')}</div>
				)}
				<ol className='history-list'>
					<History steps={stepNumber} history={history} jumpTo={jumpTo} isAscending={isAscending} />
				</ol>
			</div>
		</div>
	);
};

Game.propTypes = {
	rows: propTypes.number,
	children: propTypes.node
};

export default Game;
