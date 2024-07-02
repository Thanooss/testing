http.createServer((req, res) => {
    res.write('hi tharun');  // Replace with your desired text
    res.end();
}).listen(3001, () => {  // Replace 8080 with your chosen port
    console.log('Server listening on port 8080');
});
