

export function capitalize(string) {
    return string.charAt(0).toLocaleUpperCase() + string.slice(1);
}
export function numberOfPages(numOfCurrencies, elementsPerPage = 100) {
    return Math.ceil(numOfCurrencies / elementsPerPage);
}
export function formatTwoDecimals(number) {
    return number !== null ? number.toFixed(2) : 0;
}

// const a = [...string][0].toUpperCase()
// a.join('');