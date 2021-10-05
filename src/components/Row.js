import React from 'react';
import propTypes from 'prop-types';

import Square from './Square';

const Row = ({ rowIndex, squares, onClick, winChain, numOfRows }) => {
	return (
		<div className='board-row'>
			{squares.map((square, index) => {
				const index1D = rowIndex * numOfRows;
				const exactIndex = index + index1D;
				return (
					<Square
						key={'key' + exactIndex}
						value={square}
						onClick={() => onClick(exactIndex)}
						isWin={winChain && winChain.includes(exactIndex)}
						isDisabled={!!winChain}
					/>
				);
			})}
		</div>
	);
};

Row.propTypes = {
	rowIndex: propTypes.number,
	squares: propTypes.array,
	onClick: propTypes.func,
	winChain: propTypes.array,
	numOfRows: propTypes.number
};

export default Row;
