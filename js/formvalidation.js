// Wait for form to load - otherwise JS throws exceptions
window.onload = function(){
    // Get form Values
    let name = document.getElementById("formName");
    let email = document.getElementById("formEmail");
    let better = document.getElementById("formBetter");
    let submit = document.getElementById("submitButton");
    let form = document.getElementById("feedback");

    let errorName = document.getElementById("errorName");
    let errorEmail = document.getElementById("errorEmail");
    let errorBetter = document.getElementById("errorBetter");

    let correctName = false;
    let correctEmail1 = false;
    let correctEmail2 = false;
    let correctBetter = false;

    function checkName(errorMsg) {
        // Check for empty input
        if (name.value.trim() === "") {
            if (errorMsg) {
                errorName.innerHTML = "<p>Username cannot be empty.</p>";
            }
        } else {
            errorName.innerHTML = "<p></p>";
            correctName = true;
        }
    }
    function checkEmail(errorMsg) {
        // Check for empty input
        if (email.value.trim() === "") {
            if (errorMsg) {
                errorEmail.innerHTML = "<p>E-mail cannot be empty.</p>";
            }
        } else {
            errorEmail.innerHTML = "<p></p>";
            correctEmail1 = true;
        }

        // Check primitive email format - correct format is to bloated for the project.
        let format = /^\S+@\S+\.\S+$/;
        if (!format.test(email.value)) {
            if (errorMsg) {
                errorEmail.innerHTML = "<p>E-mail ìs not in the correct format.</p>";
            }
        } else {
            errorEmail.innerHTML = "<p></p>";
            correctEmail2 = true;
        }
    }
    function checkBetter(errorMsg) {
        // Textarea min length 50
        if (better.value.length < 50) {
            if (errorMsg){
                errorBetter.innerHTML = "<p>Feedback has to be at least 50 characters long</p>";
            }
        } else {
            errorBetter.innerHTML = "<p></p>";
            correctBetter = true;
        }
    }

    function buttonCheck() {
        // Prevent form from being submitted if not correctly filled out
        // logical and between all fields - all have to be true to enable
        submit.disabled = !(correctName && correctEmail1 && correctEmail2 && correctBetter);
    }

    // Event Listeners - error only shows on focusout so it won't be annoying but keeps checking after key presses to enable the button
    name.addEventListener("focusout", function() {checkName(true);});
    name.addEventListener("keyup", function() {checkName(false)});

    email.addEventListener("focusout",function() {checkEmail(true);});
    email.addEventListener("keyup", function() {checkEmail(false)});

    better.addEventListener("focusout", function() {checkBetter(true);});
    better.addEventListener("keyup", function() {checkBetter(false)});

    // check button state every time a key is pressed or a field loses focus
    form.addEventListener("keyup", function() {buttonCheck()});
    form.addEventListener("focusout", function() {buttonCheck()});
}
