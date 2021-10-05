const calculatePosition = (index, numOfRows) => {
	const row = Math.floor(index / numOfRows + 1);
	const col = (index % numOfRows) + 1;
	return { row, col };
};

export default calculatePosition;
