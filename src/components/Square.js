import React from 'react';
import propTypes from 'prop-types';

const Square = (props) => {
	const { value, onClick, isWin, isDisabled } = props;
	const classes = 'square' + (isWin ? ' winner' : '');
	return (
		<button className={classes} onClick={() => onClick()} disabled={isDisabled}>
			{value}
		</button>
	);
};

Square.propTypes = {
	onClick: propTypes.func,
	value: propTypes.string,
	isWin: propTypes.bool,
	isDisabled: propTypes.bool
};

export default Square;
