$(document).ready(function () {
    $("form").on("submit", function (e) {
        e.preventDefault();

        const firstName = $("input[type='text']").eq(0).val();
        const lastName = $("input[type='text']").eq(1).val();
        const message = $("textarea").val();

        if (firstName === "" || message === "") {
            alert("Please fill in the required fields.");
            return;
        }

        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "POST",
            data: {
                fname: firstName,
                lname: lastName,
                msg: message
            },
            success: function (response) {
                alert("📩 Message Sent Successfully!\n\nThank you " + firstName + ", we will contact you soon.\nReference ID: " + response.id);
                $("form")[0].reset();
            },
            error: function () {
                alert("❌ Error: Could not reach the server.");
            }
        });
    });

    $(".card").hover(
        function () {
            $(this).css({
                "background-color": "rgba(255, 165, 0, 0.1)",
                "border": "1px solid orange",
                "transition": "0.3s"
            });
        },
        function () {
            $(this).css({
                "background-color": "transparent",
                "border": "none"
            });
        }
    );

    $(".chef-title").hide().slideDown(1000);
});