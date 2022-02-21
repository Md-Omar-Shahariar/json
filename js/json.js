console.log('API');
const user = {
    id:11,
    name: 'afridi',
    job: 'bekar'



}
const stringify  = JSON.stringify(user)
// console.log(user);
// console.log(stringify);
const shop = {
    name: 'Alia',
    address : 'zinzira',
    product : ['laptop', 'mobile', 'pepsi'],
    owner: {
        name:'Alia bhat',
        profession : 'Actor'
    },
    isExpensive: false
}
const shopStringify = JSON.stringify(shop)

console.log(shop);
console.log(shopStringify);
const converted = JSON.parse(shopStringify)
console.log(converted);
