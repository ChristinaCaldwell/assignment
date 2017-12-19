//RESET ALL FIELDS
function myReset() {
    document.getElementById("form").reset();
}

//REQUIRE NAME
function validateForm() {
    var x = document.forms["myForm"]["fName"].value;
    if (x == "") {
        alert("Don't forget to give us your name");
        return false;
    }
    else {
        alert("Thanks for sending your response")
    }
}