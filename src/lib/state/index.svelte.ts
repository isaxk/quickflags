import { FiniteStateMachine } from 'runed';

// function createMessages() {
// 	let message: null | 'correct' | 'incorrect' | 'skip' | 'restart' = $state(null);

// 	let timeout: number | null = null;
// 	const timeoutLength: number = 1500;

// 	function correct() {
// 		message = 'correct';
// 		if (timeout) clearTimeout(timeout);
// 		timeout = setTimeout(() => {
// 			message = null;
// 		}, 750);
// 	}

// 	function incorrect() {
// 		message = 'incorrect';
// 		if (timeout) clearTimeout(timeout);
// 		timeout = setTimeout(() => {
// 			message = null;
// 		}, timeoutLength);
// 	}

// 	function skip() {
// 		message = 'skip';
// 		if (timeout) clearTimeout(timeout);
// 		timeout = setTimeout(() => {
// 			message = null;
// 		}, timeoutLength);
// 	}

// 	function restart() {
// 		message = 'restart';
// 	}

// 	function reset() {
// 		message = null;
// 	}

// 	return {
// 		get message() {
// 			return message;
// 		},
// 		correct,
// 		incorrect,
// 		skip,
// 		restart,
// 		reset
// 	};
// }

// export const message = createMessages();

type MyStates = 'correct' | 'incorrect' | 'skip' | 'idle' | 'restart';
type MyEvents = 'correct' | 'incorrect' | 'skip' | 'idle' | 'restart';

export const fState = new FiniteStateMachine<MyStates, MyEvents>('idle', {
	idle: {
		correct: 'correct',
		incorrect: 'incorrect',
		skip: 'skip',
		restart: 'restart'
	},
	restart: {
		idle: 'idle'
	},
	correct: {
		skip: 'skip',
		incorrect: 'incorrect',
		correct: 'correct',
		idle: 'idle',
		restart: 'restart'
	},
	incorrect: {
		skip: 'skip',
		incorrect: 'incorrect',
		correct: 'correct',
		idle: 'idle',
		restart: 'restart'
	},
	skip: {
		// _enter: () => {
		// 	fState.debounce(1500, 'idle');
		// },
		skip: 'skip',
		incorrect: 'incorrect',
		correct: 'correct',
		idle: 'idle',
		restart: 'restart'
	}
});
