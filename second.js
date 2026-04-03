$(document).ready(function () {
    $("a:contains('Order'), .x4").on("click", function (e) {
        e.preventDefault(); 

        let pizzaName = "";
        let pizzaPrice = "";
        let parentDiv = $(this).parent();

        if (parentDiv.find("h4").length > 0) {
            pizzaName = parentDiv.find("h4").first().text().trim();
            pizzaPrice = parentDiv.find("h5").last().text().trim();
        } else {
            pizzaName = parentDiv.find("h3").first().text().trim();
            pizzaPrice = parentDiv.find(".x3").text().trim();
        }

        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "POST",
            data: {
                item: pizzaName,
                price: pizzaPrice,
                status: "Order Placed"
            },
            success: function (response) {
                alert("✅ Order Successful!\n\n" +
                      "Pizza: " + pizzaName + "\n" +
                      "Price: " + pizzaPrice + "\n" +
                      "Order ID: " + response.id);
            },
            error: function () {
                alert("❌ Error: Could not connect to the server.");
            }
        });
    });

    $(".middle, .middle1, .middle2, .middle23").hover(
        function() { $(this).css("background-color", "rgba(255, 165, 0, 0.1)"); },
        function() { $(this).css("background-color", "transparent"); }
    );
});