
const baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.coinmarketcap.com/v2/ticker/';

export function getTableData(startAt, elPerPage) {
    const paginationUrl = '?start=' + startAt + '&limit=' + elPerPage;
    console.log(baseUrl + paginationUrl);
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
        return data;
    })
    .catch(e => console.log(e));
}


export function getDetailsData() {

}