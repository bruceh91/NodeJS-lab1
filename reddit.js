const pathX = require('path');
const fsX = require('fs');
const requestX = require('request');



let dataPath = pathX.join(__dirname, './popular-articles.json');

requestX('https://reddit.com/r/popular.json', (err, res, body) => {

let articleArr = [];
    if (err) console.log(err);

    JSON.parse(body).data.children.forEach(item => {
        articleArr.push({ 
            title : item.data.title, 
            URL : item.data.url, 
            author : item.data.author },
        );     

    })
    console.log(articleArr);
    fsX.writeFileSync(dataPath, JSON.stringify(articleArr));

})

