const http = require('http')
//read the html file that I have written
const fs = require('fs') //working with the file system

const port = 4000

const server = http.createServer(function(request, respond){

    //Tell the browser that we want to write HTML rather than a plan text 
    respond.writeHead(200, {'Content-Type' : 'text/html'}) //process it as html

    fs.readFile('main.html', function(error, data) {
        if (error){
            respond.writeHead(404) //not what we are looking for 
            respond.write('Error: File not found')
        } else {
            respond.write(data) // all the content of main.html will be displayed on our webpage
        }
        respond.end() 
    })

    /*
    //returning respose to the server
    respond.write('Welcome to the Web Server')
    respond.end()
    */
})

//Set up a server so it will listen on the port that we want it to..
server.listen(port, function(error) {
    if(error){
        console.log('Something went wrong, Try again!!!!', error) //to check to se which error was it 
    } else {
        console.log('Server is listening to the port ' + port)
    }
})