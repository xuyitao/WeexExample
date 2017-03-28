export const incrementAsync = () => {
	return new Promise((resolve, reject) => {
    	setTimeout(() => resolve(true), 100)
	});
}

export function decrementAsync() {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(true), 100)
	});
}
