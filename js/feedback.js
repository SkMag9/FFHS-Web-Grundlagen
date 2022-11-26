function confirmationMessage(){
    document.getElementById("confirmation").classList.add("visible");
    window.scrollTo(0,0);
}

function giveFeedback() {
    let form = document.querySelector("#feedback")
    let formData = {
        pizzaRating: form.querySelector('input[name="fav_pizza"]').value,
        prizeRating: form.querySelector('input[name="price"]').value,
        name: form.querySelector('input[name="name"]').value,
        email: form.querySelector('input[name="email"]').value,
        feedback: form.querySelector('textarea[name="feedbackText"]').value
    }
    sendFeedback(formData)
}

function showResults() {
    var xhr = new XMLHttpRequest();
    var url = "https://tonyspizzafactory.herokuapp.com/api/feedback";
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        // Test Connection
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Get Data
            const ratings = JSON.parse(xhr.responseText);
            let pizzaAwesome = 0;
            let pizzaGood = 0;
            let pizzaOkay = 0;
            let pizzaPoor = 0;
            let priceFair = 0;
            let priceOkay = 0;
            let priceExpensive = 0;
            for (let i = 0; i < ratings.length; i++) {
                let obj = ratings[i];
                switch (obj.pizzaRating) {
                    case "awesome":
                        pizzaAwesome++;
                        break;
                    case "good":
                        pizzaGood++;
                        break;
                    case "okay":
                        pizzaOkay++;
                        break;
                    case "poor":
                        pizzaPoor++;
                        break;
                }
                switch (obj.prizeRating) {
                    case "fair":
                        priceFair++;
                        break;
                    case "okay":
                        priceOkay++;
                        break;
                    case "expensive":
                        priceExpensive++;
                        break;
                }
            }

            // create Tables
            document.getElementById("feedbackResults").innerHTML = "" +
                "<table id=\"ratings\">\n" +
                "    <tr>\n" +
                "        <th>Pizza Ratings</th>\n" +
                "        <th></th>\n" +
                "        <th>Price Ratings</th>\n" +
                "        <th></th>\n" +
                "    </tr>\n" +
                "    <tr>\n" +
                "        <td>Awesome</td>\n" +
                "        <td>"+ pizzaAwesome +"</td>\n" +
                "        <td>Fair</td>\n" +
                "        <td>"+ priceFair +"<td>\n" +
                "    </tr>\n" +
                "    <tr>\n" +
                "        <td>Good</td>\n" +
                "        <td>"+ pizzaGood +"</td>\n" +
                "        <td>Okay</td>\n" +
                "        <td>"+ priceOkay +"</td>\n" +
                "    </tr>\n" +
                "    <tr>\n" +
                "        <td>Okay</td>\n" +
                "        <td>"+ pizzaOkay +"</td>\n" +
                "        <td>Expensive</td>\n" +
                "        <td>"+ priceExpensive +"</td>\n" +
                "    </tr>\n" +
                "    <tr>\n" +
                "        <td>Poor</td>\n" +
                "        <td>"+ pizzaPoor +"</td>\n" +
                "        <td></td>\n" +
                "        <td></td>\n" +
                "    </tr>\n" +
                "</table>";
            confirmationMessage();
        }
    }
    xhr.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4");
    xhr.send(null);
}

function sendFeedback(feedback) {
    const payload = feedback;
    var xhr = new XMLHttpRequest();
    var url = "https://tonyspizzafactory.herokuapp.com/api/feedback";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(payload));
    document.getElementById("feedback").remove();
    setTimeout(showResults(),500);
}
