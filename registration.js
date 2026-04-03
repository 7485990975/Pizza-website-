$(document).ready(function () {

    function checkSlice(input) {
        var val = input.val().trim();
        var id = input.attr("id");
        var msg = "";

        if (val === "") {
            msg = "Oops! This can't be empty 🍕";
        }
        else if (id === "name" && val.length < 3) {
            msg = "Name needs at least 3 letters!";
        }
        else if (id === "email") {
            var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
            if (!pattern.test(val)) {
                msg = "Enter proper email (like abc@gmail.com)";
            }
        }
        else if (id === "pass") {
            if (!val.match(/^[A-Z]/) || val.length < 6) {
                msg = "Start with capital + min 6 chars!";
            }
        }

        input.next(".burntMsg").text(msg);

        if (msg) {
            input.css("border-color", "#e74c3c");
        } else {
            input.css("border-color", "#2ecc71");
        }

        return msg === "";
    }

    $(".sliceInput").keyup(function () {
        checkSlice($(this));
    });

    $("#pizzaForm").submit(function (e) {
        e.preventDefault();

        var n = checkSlice($("#name"));
        var e1 = checkSlice($("#email"));
        var p = checkSlice($("#pass"));

        if (n && e1 && p) {
            alert("🍕 Account created! Let's order pizza!");
            window.location.href = "pizza.html";
        } else {
            alert("Fix errors before ordering 🍕");
        }
    });

});