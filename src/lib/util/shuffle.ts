export const shuffle = <T>(startArray: T[]) => {
	const shuffled = startArray
		.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);

	return shuffled;
};
