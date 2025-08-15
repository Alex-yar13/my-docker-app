const http = require('http');

function smth(){
    console.log("Lets go baby")
}

const server = http.createServer((req, res) => {
    smth();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Backend is running! Lets go baby!\n');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});