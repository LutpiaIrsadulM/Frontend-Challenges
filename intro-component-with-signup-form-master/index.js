// First Name cannot be empty
// Last Name cannot be empty
// Looks like this is not an email
// Passowrd cannot be empty

function validateEmail(email) {
    const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return res.test(String(email).toLowerCase());
}

function validateForm(){
    // prevent to reload automatic
    event.preventDefault();

    let input = document.querySelectorAll('input');
    let isEmpty = false;
    let arr = ["First Name cannot be empty", "Last Name cannot be empty", "Email cannot be empty", "Passowrd cannot be empty", "Looks like this is not an email"]
    // background: url(images/icon-error.svg) no-repeat;
    // background-position: calc(100% - 10px);
    input.forEach(function(input, index) {
        if (input.value === "" || input.value === null || input.value === undefined) {
            let span = document.getElementById('error-' + input.id);
            span.innerHTML = arr[index];
            
            input.style.background = 'url(images/icon-error.svg) no-repeat';
            input.style.backgroundPosition = 'calc(100% - 10px)';
        } else if(!validateEmail(input.value) && input.id === "email") {
            let span = document.getElementById('error-' + input.id);
            span.innerHTML = arr[4];
            
            input.style.background = 'url(images/icon-error.svg) no-repeat';
            input.style.backgroundPosition = 'calc(100% - 10px)';
        } else {
            let span = document.getElementById('error-' + input.id);
            span.innerHTML = "OK";
            span.style.color = '$green'
        }
    })

}