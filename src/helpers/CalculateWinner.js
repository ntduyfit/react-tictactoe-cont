import * as CheckWinner from './CheckWinner';

const CalculateWinner = (squares, symbol, position, numOfRows) => {
	const verticalCheck = CheckWinner.CheckVertical(squares, symbol, position, numOfRows);
	if (verticalCheck) {
		return verticalCheck;
	}

	const horizontalCheck = CheckWinner.CheckHorizontal(squares, symbol, position, numOfRows);
	if (horizontalCheck) {
		return horizontalCheck;
	}

	const mainDiagonalCheck = CheckWinner.CheckMainDiagonal(squares, symbol, position, numOfRows);
	if (mainDiagonalCheck) {
		return mainDiagonalCheck;
	}

	const auxiDiagonalCheck = CheckWinner.CheckAuxiliaryDiagonal(squares, symbol, position, numOfRows);
	if (auxiDiagonalCheck) {
		return auxiDiagonalCheck;
	}

	return null;
};

export default CalculateWinner;
