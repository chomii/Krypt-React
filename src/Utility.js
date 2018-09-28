

export function capitalize(string) {
    return string.charAt(0).toLocaleUpperCase() + string.slice(1);
}
export function numberOfPages(numOfCurrencies, elementsPerPage = 100) {
    return Math.ceil(numOfCurrencies / elementsPerPage);
}