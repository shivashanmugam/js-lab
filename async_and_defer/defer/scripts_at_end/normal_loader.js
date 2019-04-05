console.log('\n\n\n%c At the start of the normal_loader.js, This will add Lion Image', 'color:green');

console.log('%c Registering listner DOMContentLoaded Event', 'color:green');

document.addEventListener("DOMContentLoaded", function(){

    console.log('%c DOM loaded ', 'color:green');
    var imageContainer = document.getElementById('image-container');
    if(imageContainer){
        console.log('%c, Hence, Able to access image container', 'color:green');
        console.log(imageContainer)
    }
});


var imageContainer = document.getElementById('image-container');
var imageElement = document.createElement('img');
imageElement.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/200px-Lion_waiting_in_Namibia.jpg"
try {
    imageContainer.append(imageElement)
    console.log('%c Adding image elemnt inside image container successful','color:green');
} catch{
    console.log('%c <<<< Cannot able to access as image container as DOM not fully resolved >>>>', 'color:green');
}

