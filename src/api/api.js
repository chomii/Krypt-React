
const baseUrl = 'https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

export function getTableData() {
    fetch(baseUrl, {
        headers: {'X-CMC_PRO_API_KEY' : 'c3b07ba3-8c3f-41aa-9f28-3a57c6735a14'}
    })
    .then(response => {
        // ovde handlovati razlicite statuse // todo
        console.log(response);
        
    })
    .then(data => {
         
    })
    .catch(e => console.log(e));
}

function getDetailsData() {

}