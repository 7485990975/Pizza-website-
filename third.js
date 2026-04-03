$(document).ready(function () {
    $("a:contains('Order')").on("click", function (e) {
        e.preventDefault();

        let parentDiv = $(this).parent();
        let pizzaName = parentDiv.find("h4").text().trim();
        let pizzaPrice = parentDiv.find("h5").last().text().trim();

        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "POST",
            data: {
                item: pizzaName,
                price: pizzaPrice,
                category: "Service Page Order"
            },
            success: function (response) {
                alert("✅ Service Order Placed!\n\n" +
                      "Pizza: " + pizzaName + "\n" +
                      "Price: " + pizzaPrice + "\n" +
                      "Order ID: " + response.id);
            },
            error: function () {
                alert("❌ Error: Could not connect to the server.");
            }
        });
    });

    $(".el2, .el3, .el4").hide().fadeIn(1500);
});