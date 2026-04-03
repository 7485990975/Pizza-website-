$(document).ready(function () {
    $(".em, .em3").on("click", function () {
        $(this).fadeOut(100).fadeIn(100);
    });

    $(".end h4, .end3 h4").on("click", function () {
        let postTitle = $(this).text();
        
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts/1",
            method: "GET",
            success: function (data) {
                alert("📖 Reading: " + postTitle + "\n\n" + 
                      "Post Content Summary: " + data.body.substring(0, 50) + "...");
            },
            error: function () {
                alert("Error loading full blog post.");
            }
        });
    });

    $(".end1, .end13, .end div").hover(
        function () {
            $(this).css({
                "transform": "scale(1.02)",
                "transition": "0.3s",
                "cursor": "pointer"
            });
        },
        function () {
            $(this).css("transform", "scale(1)");
        }
    );
});