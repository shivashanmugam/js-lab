console.log('\n\n\n%c At the start of the defer_loader.js, Will Add Tiger Image', 'color:blue');

console.log('%c Registering listner DOMContentLoaded Event', 'color:blue');

document.addEventListener("DOMContentLoaded", function(){

    console.log('%c DOM loaded', 'color:blue');
    var imageContainer = document.getElementById('image-container');
    if(imageContainer){
        console.log('%c, Hence, Able to access image container', 'color:blue');
        console.log(imageContainer)
    }
});


var imageContainer = document.getElementById('image-container');
var imageElement = document.createElement('img');
imageElement.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Panthera_tigris_sumatran_subspecies.jpg/200px-Panthera_tigris_sumatran_subspecies.jpg"
try {
    imageContainer.append(imageElement)
    console.log('%c Adding image elemnt inside image container successful','color:blue');
} catch{
    console.log('%c Cannot able to access as image container DOM not fully resolved', 'color:blue');
}
