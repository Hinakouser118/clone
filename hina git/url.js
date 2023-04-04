let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b61f457973db40aeacd8e9e8c2bf0496";
const data=fetch(url)
.then(res=>res.json())
.then(data)
console.log(data)


