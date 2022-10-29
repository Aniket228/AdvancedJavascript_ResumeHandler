var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password-input").value;
    if ( username == "Formget" && password == "formget#123")
    {
        alert ("Login successfully");
        window.location = "Resume.html"; // Redirecting to other page.
        return false;
    }
    else{
        attempt --;// Decrementing by one.
        alert("You have left "+attempt+" attempt;");
        // Disabling fields after 3 attempts.
        if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password-input").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}
function preventBack() {
    window.history.forward(); 
}
setTimeout("preventBack()", 0);
window.onunload = function () { null };

/*window.history.forward();
function noBack() {
window.history.forward();
}*/