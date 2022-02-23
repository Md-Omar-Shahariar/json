
function loadData(){
    fetch('https://jsonplaceholder.typicode.com/users').then( response =>{console.log(response)
     return response.json()}).then(data =>console.log(data))
}
const info={ data: [ { language:"Javascript", library:"React" } ] }  
console.log(info.data[0].library);