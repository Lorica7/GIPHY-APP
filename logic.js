
   
    var button = document.getElementById("search");

    var animalArray = ["zebra", "dogs", "pigs", "sloth", "guinea-pig", "platypus", "kangaroo", "elephant", "chipmunk"];
 
     var animalContainer = document.getElementById("animal-info");
    
   
    button.addEventListener("click", function () {
        event.preventDefault();
        let searchReq = document.getElementById("user-input").value;
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchReq + "&api_key=P1UxBlMCbh1oybrMn1pVZvc7jexNd7sE&limit=10";
        
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(data) {
        { console.log("success got data", data); };
        console.log(searchReq);
        animalArray.push(searchReq);
        $("#buttons-holder").empty();
        renderButtons();
        console.log(animalArray);
    });
});


    function renderButtons (){
        
        for (i = 0; i< animalArray.length; i ++){
            var btn = $("<button>");
            btn.addClass("animal-btn");
            btn.attr("data-animal", animalArray[i]);
            btn.text(animalArray[i]);
            $("#button-holder").append(btn);
    };
    };
   renderButtons();
/*
   
            
         animalContainter.insertAdjacentHTML('beforeend', htmlString);
     };
  
 
     //API KEY P1UxBlMCbh1oybrMn1pVZvc7jexNd7sE   */