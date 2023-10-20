const http = require('http')
const { readFileSync } = require('fs')

const index = readFileSync('./index.html', 'utf8')
const about = readFileSync('./about.html', 'utf8')
const contact = readFileSync('./contact-me.html', 'utf8')
const errorPage = readFileSync('./404.html', 'utf8')


const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    if(req.url === '/') {
        res.end(index)
    } else if (req.url === '/about') {
        res.end(about)
    } else if (req.url === '/contact') {
        res.end(contact)
    } else {
        res.end(errorPage)
    }
})

server.listen(5000)