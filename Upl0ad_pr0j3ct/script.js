server.on('request', (req, res) => {

    if(req.url === '/' && req.method === 'GET') {
        return res.end(fs.readFileSync(__dirname + '/index.html'))
    }
})