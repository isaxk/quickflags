export const format =  {
    time: (input:number) => {
        const numFormat = new Intl.NumberFormat("en-US", {
            minimumIntegerDigits: 2,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
        return numFormat.format(input);
    },
    score: (input:number) => {
        const numFormat = new Intl.NumberFormat("en-US", {
            minimumIntegerDigits: 5,
            maximumFractionDigits: 0,
        });
        return numFormat.format(input);
    },
    increment: (input:number) => {
        const numFormat = new Intl.NumberFormat("en-US", {
            minimumIntegerDigits: 4,
            maximumFractionDigits: 0,
        });
        return numFormat.format(input);
    },
    clean: (input:string) => {
        var toReturn = input.replace(/\s/g, '');
        toReturn = toReturn.toLowerCase();

        return toReturn;
    }
}