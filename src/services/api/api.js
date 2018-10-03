
const baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.coinmarketcap.com/v2/ticker/';

export function getTableData(startAt, elPerPage,sortType = 'id') {
    const paginationUrl = `?start${startAt}&limit=${elPerPage}&sort=${sortType}`;
    return fetch(baseUrl + paginationUrl, {
        headers: {'X-CMC_PRO_API_KEY' : 'c3b07ba3-8c3f-41aa-9f28-3a57c6735a14'}
    })
    .then(response => {
        // ovde handlovati razlicite statuse // todo
        //console.log(response.json());
        try{
            return response.json();
        } catch(error) {
            alert(error);
        }
         
    })
    .then(data => {
        console.log('api called')
        return data;
    })
    .catch(e => console.log(e));
}

// https://api.coinmarketcap.com/v2/ticker/1/?structure=array

const responseStructure = 'dictionary';
export function getDetailsData(currencyId) {
    const detailsUrl = `${currencyId}/?structure=${responseStructure}`;

    return fetch(baseUrl + detailsUrl, {
        headers : {'X-CMC_PRO_API_KEY' : 'c3b07ba3-8c3f-41aa-9f28-3a57c6735a14'}
    })
    .then(response => {
        try{
            return response.json();
        } catch(error) {
            alert(error);
        }
    })
    .then(data => {
        console.log('api callen details');
        return data;
    })
    .catch(e => console.log(e));
}