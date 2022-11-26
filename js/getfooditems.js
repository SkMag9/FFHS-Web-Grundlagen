function getPizza() {
    var xhr = new XMLHttpRequest();
    var url = "https://tonyspizzafactory.herokuapp.com/api/pizzas";
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        // Test Connection
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const pizzaInfo = JSON.parse(xhr.responseText);
            for (let i = 0; i < pizzaInfo.length; i++) {
                let obj = pizzaInfo[i];
                let ingredientList = "";
                for (let j in obj.ingredients){
                    ingredientList += obj.ingredients[j] + ", ";
                }
                document.getElementById("pizzas").innerHTML += "" +
                    "<div class=\"food-item\">\n" +
                    "    <div class=\"food-picture\">\n" +
                    "        <img src=\""+ obj["imageUrl"] +"\" alt=\"Pizza "+ obj["name"] +"\">\n" +
                    "    </div>\n" +
                    "    <div class=\"food-content\">\n" +
                    "        <div class=\"food-info\">\n" +
                    "            <h4>Pizza "+ obj["name"] +"</h4>\n" +
                    "            <p>"+ ingredientList +"</p>\n" +
                    "        </div>\n" +
                    "        <div class=\"food-buy\">\n" +
                    "            <p>"+ obj["prize"] +"</p>\n" +
                    "            <button onclick='placeOrder("+ obj["id"] + ", " + "\"pizza\"" + ", \"" + obj["name"] + "\");'>\n" +
                    "                <img src=\"../img/cart.png\" alt=\"Cart\">\n" +
                    "            </button>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "</div>";
            }
        }
    };
    xhr.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4");
    xhr.send(null);
}

function getSalad() {
    var xhr = new XMLHttpRequest();
    var url = "https://tonyspizzafactory.herokuapp.com/api/salads";
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        // Test Connection
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const saladInfo = JSON.parse(xhr.responseText);
            for (let i = 0; i < saladInfo.length; i++) {
                let obj = saladInfo[i];
                let ingredientList = "";
                for (let j in obj.ingredients) {
                    ingredientList += obj.ingredients[j] + ", ";
                }
                document.getElementById("salads").innerHTML += "" +
                    "<div class=\"food-item\">\n" +
                    "    <div class=\"food-picture\">\n" +
                    "        <img src=\""+ obj["imageUrl"] +"\" alt=\"Pizza "+ obj["name"] +"\">\n" +
                    "    </div>\n" +
                    "    <div class=\"food-content\">\n" +
                    "        <div class=\"food-info\">\n" +
                    "            <h4>"+ obj["name"] +"</h4>\n" +
                    "            <p>"+ ingredientList +"</p>\n" +
                    "            <label for=\"dressing-"+ obj["id"] +"\">Dressing:</label>\n" +
                    "            <select id=\"dressing-"+ obj["id"] +"\" name=\"dressing\" class=\"dressing\">\n" +
                    "                <option value=\"french\">French Dressing</option>\n" +
                    "                <option value=\"italian\">Italian Dressing</option>\n" +
                    "            </select>\n" +
                    "        </div>\n" +
                    "        <div class=\"food-buy\">\n" +
                    "            <p>"+ obj["prize"] +"</p>\n" +
                    "            <button onClick='placeOrder("+ obj["id"] + ", " + "\"salad\"" + ", \"" + obj["name"] + "\");'>\n" +
                    "                <img src=\"../img/cart.png\" alt=\"Cart\">\n" +
                    "            </button>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "</div>";

            }
        }
    };
    xhr.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4");
    xhr.send(null);
}

function getDrinks() {
    var xhr = new XMLHttpRequest();
    var url = "https://tonyspizzafactory.herokuapp.com/api/softdrinks";
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        // Test Connection
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const drinkInfo = JSON.parse(xhr.responseText);
            for (let i = 0; i < drinkInfo.length; i++) {
                let obj = drinkInfo[i];
                document.getElementById("drinks").innerHTML += "" +
                    "<div class=\"food-item\">\n" +
                    "    <div class=\"food-picture\">\n" +
                    "        <img src=\""+ obj["imageUrl"] +"\" alt=\""+ obj["name"] +"\">\n" +
                    "    </div>\n" +
                    "    <div class=\"food-content\">\n" +
                    "        <div class=\"food-info\">\n" +
                    "            <h4>"+ obj["name"] +"</h4>\n" +
                    "            <p>"+ obj["volume"] +"</p>\n" +
                    "        </div>\n" +
                    "        <div class=\"food-buy\">\n" +
                    "            <p>"+ obj["prize"] +"</p>\n" +
                    "            <button onclick='placeOrder("+ obj["id"] + ", " + "\"softdrink\"" + ", \"" + obj["name"] + "\")'>\n" +
                    "                <img src=\"../img/cart.png\" alt=\"Cart\">\n" +
                    "            </button>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "</div>";
            }
        }
    };
    xhr.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4");
    xhr.send(null);
}
