export const normalise = (value: string) => {
    value = value.toLowerCase();
    value = value.replace(/\s+/g, "");
    return value;
};