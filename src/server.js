const http = require("http");
const fs = require('fs');
const port = process.env.PORT || process.env.NODE_PORT || 3000;

const index = fs.readFileSync(`${__dirname}/../client/client.html`)
console.log(index);

const onRequest = (request, response) => {
    console.log(request.url);

    response.writeHead(200, {'Content-Type': 'text/html'});

    response.end();
};

const server = http.createServer(onRequest).listen(port, () => {
    console.log(`Listening on port ${port}`);
});
