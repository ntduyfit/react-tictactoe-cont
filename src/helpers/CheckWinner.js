const NUM_CELLS_WIN = 5;

export const CheckMainDiagonal = (squares, symbol, index, numOfRows) => {
	const chainLine = [index];
	let currentIndex = index;
	while (currentIndex - numOfRows > 0) {
		const newIndex = currentIndex - (numOfRows + 1);
		if (squares[newIndex] === symbol) {
			chainLine.push(newIndex);
		} else {
			break;
		}
		currentIndex = newIndex;
	}

	const numOfCells = numOfRows * numOfRows;
	while (index + numOfRows < numOfCells) {
		const newIndex = index + numOfRows + 1;
		if (squares[newIndex] === symbol) {
			chainLine.push(newIndex);
		} else {
			break;
		}
		index = newIndex;
	}
	if (chainLine.length >= NUM_CELLS_WIN) {
		return chainLine;
	}
	return null;
};

export const CheckAuxiliaryDiagonal = (squares, symbol, index, numOfRows) => {
	const chainLine = [index];
	let currentIndex = index;
	while (currentIndex - numOfRows > 0) {
		const newIndex = currentIndex - (numOfRows - 1);
		if (squares[newIndex] === symbol) {
			chainLine.push(newIndex);
		} else {
			break;
		}
		currentIndex = newIndex;
	}

	const numOfCells = numOfRows * numOfRows;
	while (index + numOfRows < numOfCells) {
		const newIndex = index + (numOfRows - 1);
		if (squares[newIndex] === symbol) {
			chainLine.push(newIndex);
		} else {
			break;
		}
		index = newIndex;
	}
	if (chainLine.length >= NUM_CELLS_WIN) {
		return chainLine;
	}
	return null;
};

export const CheckHorizontal = (squares, symbol, index, numOfRows) => {
	const chainLine = [];
	const currentRow = Math.floor(index / numOfRows);
	const start = currentRow * numOfRows;
	const end = start + numOfRows;
	for (let i = start; i < end; i++) {
		if (squares[i] === symbol) {
			chainLine.push(i);
		} else if (chainLine.length >= NUM_CELLS_WIN) {
			return chainLine;
		} else {
			chainLine.splice(0, chainLine.length);
		}
	}
	if (chainLine.length >= NUM_CELLS_WIN) {
		return chainLine;
	}
	return null;
};

export const CheckVertical = (squares, symbol, index, numOfRows) => {
	const chainLine = [];
	let currentCol = index % numOfRows;
	const numOfCells = numOfRows * numOfRows;
	for (let i = currentCol; i < numOfCells; i += numOfRows) {
		if (squares[currentCol] === symbol) {
			chainLine.push(i);
		} else if (chainLine.length >= NUM_CELLS_WIN) {
			return chainLine;
		} else {
			chainLine.splice(0, chainLine.length);
		}
		currentCol += numOfRows;
	}

	if (chainLine.length >= NUM_CELLS_WIN) {
		return chainLine;
	}
	return null;
};
