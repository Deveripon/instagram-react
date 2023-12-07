export const day = Array.from({ length: 31 }, (x, i) => {
    i = i + 1;
    return i++;
});

export const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

export const year = Array.from(
    { length: new Date().getFullYear() - 1904 },
    (x, i) => {
        return new Date().getFullYear() - i;
    }
);
