
   
    var button = document.getElementById("search");
 
     var animalContainter = document.getElementById("animal-info");
    var searchReq=  $(this).val("searchReq");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchReq + "&api_key=P1UxBlMCbh1oybrMn1pVZvc7jexNd7sE&limit=5"
 
    button.addEventListener("click", function () {
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(data) {
        { console.log("success got data", data); };
    });
});

/*
     ourRequest.onload = function() {
         if (ourRequest.status >= 200 && ourRequest.status < 400){
             console.log(ourRequest.responseText);
             var ourData = JSON.parse(ourRequest.responseText);
             renderHTML(ourData);
         } else {
             alert("We connected to the server, but it returned an error")
         }   
     };
 
     ourRequest.onerror = function () {
         alert("Connection error")
     };
 
     ourRequest.send();
     pageCounter ++;
     if (pageCounter > 3) {
         btn.classList.add("hide-me");
 
     }
    });
 
     function renderHTML (ourData) {
         var htmlString = ""; 
         for (i = 0; i< ourData.length; i ++){
             htmlString += "<p>" + ourData[i].name + "is a " + ourData[i].species + " that likes to eat ";
             for (ii = 0; ii < ourData[i].foods.likes.length; ii++){
                 if (ii == 0){
                     htmlString+= ourData[i].foods.likes[ii];
                 }else {
                     htmlString+= " and " + ourData[i].foods.likes[ii];
                 }
             }
                htmlString += " and dislikes "
                 for (ii = 0; ii < ourData[i].foods.dislikes.length; ii++){
                     if (ii == 0){
                         htmlString+= ourData[i].foods.dislikes[ii];
                     }else {
                         htmlString+= " and " + ourData[i].foods.dislikes[ii];
                     }
                 }
                 htmlString += ".</p>";
             }
            
         animalContainter.insertAdjacentHTML('beforeend', htmlString);
     };
  
 
     //API KEY P1UxBlMCbh1oybrMn1pVZvc7jexNd7sE   */