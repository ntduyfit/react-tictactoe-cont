import React from 'react';
import propTypes from 'prop-types';

import Row from './Row';

const Board = (props) => {
	const { squares, onClick, winChain, numOfRows } = props;
	const Rows = () => {
		const rows = [];
		for (let i = 0; i < numOfRows; i++) {
			const first = i * numOfRows;
			const last = first + numOfRows;
			const row = squares.slice(first, last);
			rows.push(
				<Row key={i} rowIndex={i} onClick={onClick} squares={row} winChain={winChain} numOfRows={numOfRows} />
			);
		}
		return rows;
	};

	return (
		<div>
			<Rows />
		</div>
	);
};

Board.propTypes = {
	squares: propTypes.array,
	onClick: propTypes.func,
	winChain: propTypes.array,
	numOfRows: propTypes.number
};

export default Board;
