


function urlWork(){

    {
        // you need to pass a valid url into constructor
        const someUrl = new URL('http://localhost:8081'+'/image')
        someUrl.searchParams.append('path', 'FlatOut 2.jpg')
        console.log(someUrl) // URL { href: "http://localhost:8081/path?path=FlatOut+2.jpg", origin: "http://localhost:8081", protocol: "http:", username: "", password: "", host: "localhost:8081", hostname: "localhost", port: "8081", pathname: "/path", search: "?path=FlatOut+2.jpg" }
    }

}