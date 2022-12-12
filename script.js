//dp
//user_name
//post_count
//follower_count
//following_count
//real_name
//bio

data = decodeURIComponent(window.location.search.replace('?', '')).split('}')[0] + '}'
console.log(data)
const json = JSON.parse(data)

console.log(json['dp'])
console.log(json['user_name'])
console.log(json['post_count'])
console.log(json['follower_count'])
console.log(json['following_count'])
console.log(json['real_name'])
console.log(json['bio'])


uri = json['bio']
//JSON.stringify(json['description']).replace('+', ' ')
let encoded = encodeURI(uri);
let decoded = decodeURI(encoded);
console.log(typeof(decoded))
decoded = decoded.replaceAll("+", " ");
// http://api.scraperapi.com/?api_key=010e6bdc516d1ce035d6eeb741d5ac45&url=${json['dp']}
document.querySelector('#dp').src = json['dp'];
document.querySelector('#user_name').innerHTML = json['user_name']
document.querySelector('#post_count').innerHTML = json['post_count']
document.querySelector('#follower_count').innerHTML = json['follower_count']
document.querySelector('#following_count').innerHTML = json['following_count']
document.querySelector('#real_name').innerHTML = json['real_name']
document.querySelector('#bio').innerHTML = decoded

