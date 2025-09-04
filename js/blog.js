document.addEventListener("DOMContentLoaded", function () {    

const posts = document.querySelectorAll('.blogPosts li');  // Select all <li> inside .blogPosts

posts.forEach(function(post) {
  post.addEventListener("click", function(event) {
    const postId = event.target.id;   // Use event.target.id
    document.getElementById("blogPostText").textContent = "This is demo text for post " + postId + ".";
  });
});
});
    
