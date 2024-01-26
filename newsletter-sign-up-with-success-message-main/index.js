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

function dismisSuccess() {
    let cardForm = document.getElementById('cardForm');
    let cardSuccess = document.getElementById('cardSuccess');
    cardForm.style.display = 'flex';
    cardSuccess.style.display = 'none'
}

function replaceImagePaths(path, resolution) {
    // Switch images
    const image = document.querySelector(".illmage");
    let imagePath = image.getAttribute('src')
    image.setAttribute('src', imagePath.replace(path, resolution));

    // $('.illmage').each(function() {
    //     var imagePath = $(this).attr('src');
    //     console.log(imagePath);
    //     $(this).attr('src', imagePath.replace("mobile", resolution));
    //     $(this).attr('src', imagePath.replace("desktop", resolution));
    // });
}

window.addEventListener('resize', function() {
    var width = window.innerWidth;
    // var height = window.innerHeight;

    if (width <= 375) {
        replaceImagePaths("/assets/images/illustration-sign-up-mobile.svg");
    }else{
        replaceImagePaths("/assets/images/illustration-sign-up-desktop.svg");
    }
    // console.log("Width: " + width + ", Height: " + height);
});

// $(window).resize(function() {
//     checkResolution();
// });

// $(document).ready(function() {
//     checkResolution();
// });
