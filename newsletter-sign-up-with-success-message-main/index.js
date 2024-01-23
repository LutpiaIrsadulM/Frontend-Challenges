function validateEmail(email) {
    const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return res.test(String(email).toLowerCase());
  }
  
function validateForm() {
    event.preventDefault();

    let form = document.forms["subsForm"]["email"].value;
    let span = document.getElementById("validText");
    let text;

    if (form === "") {
        text = "input can't empty ";
    } else if (!validateEmail(form)){
        text = "Valid email required";
    } else {
        let cardForm = document.getElementById('cardForm');
        let cardSuccess = document.getElementById('cardSuccess');
        cardForm.style.display = 'none';
        cardSuccess.style.display = 'block'
    }
    span.innerHTML = text;
}