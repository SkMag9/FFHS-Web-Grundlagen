function addFadeClass(){
    document.getElementById("confirmation").classList.add("visible");
    window.scrollTo(0,0);
    setTimeout(function() {
        document.getElementById("confirmation").classList.remove("visible");
    }, 5001);
}

function placeOrder(id, type, name) {
    const payload = {
        id: id,
        type: type,
        name: name
    };
    addFadeClass();
    var xhr = new XMLHttpRequest();
    var url = "https://tonyspizzafactory.herokuapp.com/api/orders";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(payload));
}
