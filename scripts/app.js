var $ = require('jquery'); // jQuery.

var welcome = /\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)\s*\*\//.exec(function() {
    /*
_______  _______  ______  
(  ____ \(  ____ \/ ___  \ 
| (    \/| (    \/\/   \  \
| (_____ | |         ___) /
(_____  )| |        (___ ( 
      ) || |            ) \
/\____) || (____/\/\___/  /
\_______)(_______/\______/
    */
}.toString())[1];

console.log(welcome);
console.log(/\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)\s*\*\//.exec(function() {
    /*
    
    
    Just peeking?
    If you want to hack on the code, go to https://github.com/ArchimedesPi/sc3.
    Making new levels isn't hard, you only need Tiled. Check out https://github.com/ArchimedesPi/sc3/wiki for instructions :)
    */
}.toString())[1]);

// So now we need to get down to business.
// We have a big blareboard thing saying SC3,
// and a little line of text saying "Press any key to start."
// To get this to work, we need to register an on('keydown') event on body.
// Let's do that.

$('body').on('keydown', function () {
    // OK, someone hit a key.
    // Now we have to delete the big blareboard,
    // delete the "press to start" message, and 
    // start the game preloader.
    
    $('pre').fadeOut("slow", function() { // Fade out. Here's a callback, which happens after it fades out,
        this.remove(); // where the elements are actually removed.
    });
});
