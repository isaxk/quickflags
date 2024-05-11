export type Country = {
    name: string;
    short: string;
    easy: number;
    code: string;
};

export type qHistory = {
    correct: Country;
    answered: Country | null;
    startTime: number;
    endTime: number;
}[];
