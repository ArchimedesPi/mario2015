welcome = /\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)\s*\*\//.exec(function() {
    /*
███████╗ ██████╗██████╗ 
██╔════╝██╔════╝╚════██╗
███████╗██║      █████╔╝
╚════██║██║      ╚═══██╗
███████║╚██████╗██████╔╝
╚══════╝ ╚═════╝╚═════╝ 
    */
}.toString())[1];

console.log(welcome);
console.log(/\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)\s*\*\//.exec(function() {
    /*
    
    
    Just peeking?
    If you want to hack on the code, go to https://github.com/ArchimedesPi/sc3.
    Making new levels isn't hard, you only need Tiled. Check out https://github.com/ArchimedesPi/sc3/wiki for instructions :)T
    */
}.toString())[1]);