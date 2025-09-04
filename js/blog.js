document.addEventListener("DOMContentLoaded", function () {
    
    document.body.addEventListener("click", function(event) {  
        const clickedElement = event.target;
        if (clickedElement.id) {
            document.getElementById("blogPostText").textContent = "hi!";
      }

  });

});