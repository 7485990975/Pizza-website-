$(document).ready(function () {
 
    const recentPosts = [
        {
            title: "The Delicious Pizza",
            date: "Sept 10, 2026",
            admin: "Admin",
            image: "image/last1.png",
            text: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
            title: "Italian Style",
            date: "Sept 12, 2026",
            admin: "Admin",
            image: "image/last2.png",
            text: "Far far away, behind the word mountains, far from the countries Vokalia."
        }
    ];

 
    $("a:contains('Order'), a:contains('Add to cart')").on("click", function (e) {
        e.preventDefault();

        let parent = $(this).parent();
        let itemName = "";
        let itemPrice = "";

        if (parent.find("h4").length > 0) {
            itemName = parent.find("h4").first().text().trim();
            itemPrice = parent.find("h5").filter((i, el) => $(el).text().includes('$')).text().trim();
        } else {
            itemName = parent.find("h3").first().text().trim();
            itemPrice = parent.find(".x3").text().trim();
        }

        console.log("Initiating AJAX simulation for:", itemName);
        

        setTimeout(() => {
            const orderId = Math.floor(Math.random() * 90000) + 10000;
            
            alert(
                "✅ SUCCESS (Simulated AJAX)\n" +
                "--------------------------\n" +
                "Item: " + itemName + "\n" +
                "Total: " + itemPrice + "\n" +
                "Order ID: #" + orderId + "\n" +
                "--------------------------\n" +
                "Your order has been sent to the kitchen!"
            );
        }, 500); 
    });

    console.log("Current Menu Data Loaded:", recentPosts);
});