console.log('At the start of the image_loader.js')

console.log('Registering listner DOMContentLoaded Event');

document.addEventListener("DOMContentLoaded", function(){

    console.log('DOM loaded //Even resolving Script tag is part of the DOM');
    var imageContainer = document.getElementById('image-container');
    if(imageContainer){
        console.log('Hence, Able to access image container');
        console.log(imageContainer)
    }
});


var imageContainer = document.getElementById('image-container');
var imageElement = document.createElement('img');
imageElement.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/200px-Lion_waiting_in_Namibia.jpg"
try {
    imageContainer.append(imageElement)
    console.log('Adding image elemnt inside image container successful');
} catch{
    console.warn('Cannot able to access as image container DOM not fully resolved');
}

