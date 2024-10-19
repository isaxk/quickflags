export type Country = {
	name: string;
	short: string | null;
	easy: number;
	code: string;
};

export type CountryHistoryItem = {
	country: Country;
	correct: boolean;
};

export type PreviousGame = {
	score: number;
	accuracy: number;
	questions: CountryHistoryItem[];
};
