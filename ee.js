

const express = require('express')
const nunjucks = require('nunjucks')

var app = express()

nunjucks.configure('views', {
    autoescape: true,
    express: app
})

app.get('/', function(req, res){
    var data = [{
        "code": 1,
        "teste": 'dasdsa',
        "total": {
            "hora": 12,
            "minuto": 15
        }
    }]

    var cc = { name: 'bruno'}

    var aa = {name: 'aaaaaa'}
    return res.render('index.html', {data, cc})
})

app.listen(3000)