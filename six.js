$(document).ready(function () {
    $(".right button").on("click", function (e) {
        e.preventDefault();

        let name = $(".right input[placeholder='Your Name']").val();
        let email = $(".right input[placeholder='Your Email']").val();
        let subject = $(".right input[placeholder='Subject']").val();
        let message = $(".right textarea").val();

        if (name == "" || email == "" || message == "") {
            alert("Please fill in all required fields.");
            return;
        }

        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "POST",
            data: {
                userName: name,
                userEmail: email,
                userSubject: subject,
                userMessage: message
            },
            success: function (response) {
                alert("✅ Message Sent!\n\nThank you, " + name + ".\nTicket ID: " + response.id);
                $(".right input, .right textarea").val("");
            },
            error: function () {
                alert("❌ Error: Message could not be sent.");
            }
        });
    });

    $(".left").hide().fadeIn(1000);
});