
function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1').then( response =>{console.log(response)
     return response.json()}).then(data =>console.log(data))
}