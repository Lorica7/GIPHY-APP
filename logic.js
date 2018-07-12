
//declare variables
var giphySearchButton = document.getElementById("search");
var animalImages = document.getElementsByTagName("img");
var animalArray = ["zebra", "dogs", "pigs", "sloth", "guinea-pig", "platypus", "kangaroo", "elephant", "chipmunk"];
// MIght not need this variable var topButtons = document.getElementsByClassName("btn-large");
var animalContainer = document.getElementById("animal-images");

let imagesArr2 = []

var resultData = {}
//add event listener to the search button.
giphySearchButton.addEventListener("click", function () {
    $("#animal-images").empty();
    let searchReq = document.getElementById("user-input").value;
    console.log('search?', searchReq);
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchReq + "&api_key=P1UxBlMCbh1oybrMn1pVZvc7jexNd7sE&limit=10";
    var imagesArr = [];
    //making AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (result) {

        console.log("success got data", result);
       

        // }
        //looping through the array of results and accessing the different urls for still and moving gifs

        for (let i = 0; i < result.data.length; i++) {
            var movingImage = result.data[i].images.fixed_height.url;
            var stillImage = result.data[i].images.fixed_height_still.url;
            var imageObj = { movingImage: movingImage, stillImage: stillImage };

            var img = `<img class="giphyImages" data-searchterm="${searchReq}" id="${i}" src="${stillImage}"></img>`;
            //  console.log('img?', img)
            $("#animal-images").append(img)
            console.log("im here")
            imagesArr.push(imageObj);
            console.log(imagesArr);
        };
    });
    

    
    $('body').on('click', '.giphyImages', function () {
        let i = parseInt($(this).attr('id'));
        console.log(i);
        console.log(imagesArr)
        console.log('clicking these animals')
        console.log('changing url?', imagesArr[i].movingImage)
        $(this).attr("src", imagesArr[i].movingImage);

    });



    //push the search term to the array
    console.log(searchReq);

    if (animalArray.indexOf(searchReq) === (-1)) {
    animalArray.push(searchReq);
    //$("#buttons-holder").empty();
    //create a new button from the search entry, and put button in the div at top
    var btn = $("<button>");
    btn.addClass("btn-large");
    btn.attr("data-animal", searchReq);
    btn.text(searchReq);
    $("#button-holder").append(btn);
} else {
    console.log("This button already exists.")
};
});
// put event click for images below --->


//tried to create a click event to change the image source on click



// so you will need the 3 data-attributes, one for the still image, one for the animated and one to keep track of whether it is animated or still (a state indicator)
// the gif will start wih the animated one and
// just like the button an on click event that when the functions runs it will change 
// use what is in the data attribute to swap between animated and still


//need to specify state

// this function renders the buttons that already exists when the page loads
function renderButtons() {

    for (let i = 0; i < animalArray.length; i++) {
        var btn = $("<button>");
        btn.addClass("btn-large");
        btn.attr("data-animal", animalArray[i]);
        btn.text(animalArray[i]);
        $("#button-holder").append(btn);
    };
};
renderButtons();

$(".btn-large").click(function (event) {
    $("#animal-images").empty();
    let buttonReq = event.target.textContent;
imagesArr2 = [];
    console.log(buttonReq);
    let searchURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonReq + "&api_key=P1UxBlMCbh1oybrMn1pVZvc7jexNd7sE&limit=5";
    //making AJAX call
    $.ajax({
        url: searchURL,
        method: "GET"
    }).then(function (result) {
        // if (result.data.length !== 0) {
        //      images[buttonReq] = [];
        //  }
        for (let i = 0; i < result.data.length; i++) {
            var movingImage = result.data[i].images.fixed_height.url;
            var stillImage = result.data[i].images.fixed_height_still.url;
            var imageObj = { movingImage: movingImage, stillImage: stillImage };
            imagesArr2.push(imageObj)
            var img = `<img class="giphyImagesSet2" data-searchterm="${buttonReq}" id="${i}" src="${stillImage}"></img>`;
            $("#animal-images").append(img);
        };

        $('body').on('click', '.giphyImagesSet2', function () {
            let ii = parseInt($(this).attr('id'));
            console.log(ii);
            console.log(imagesArr2);
            console.log('clicking these animals')
            console.log('changing url?', imagesArr2[ii].movingImage)
            $(this).attr("src", imagesArr2[ii].movingImage);
    
        });
    });
});





