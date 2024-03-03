export const timeFormat = new Intl.NumberFormat("en-US", {
    minimumIntegerDigits: 2,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

export const scoreFormat = new Intl.NumberFormat("en-US", {
    minimumIntegerDigits: 5,
    maximumFractionDigits: 0,
});
export const incrementFormat = new Intl.NumberFormat("en-US", {
    minimumIntegerDigits: 4,
    maximumFractionDigits: 0,
});