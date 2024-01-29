let White = 'hsl(0, 0%, 100%)';
let LightGrey = 'hsl(217, 12%, 63%)';
let MediumGrey = 'hsl(219, 11%, 24%)';
let Orange = 'hsl(25, 97%, 53%)';

let arr = ["one", "two", "three", "four", "five"];

function changeBack(v){
    let num = checkData(v);
    let input = document.querySelectorAll('input');
    

    for(let i = 0; i < input.length; i++){
        if(input[i].checked && i === v){
            colorOrange(num);
            break;
        }else {
            // colorMedium(num);
            if(input[i].checked){
                colorOrange(input[i].id);
            }else {
                colorMedium(input[i].id);
            }
        }
    }
}

function changeCurrent(v){
    let num = checkData(v);
    let input = document.querySelectorAll('input');
    for(let i = 0; i < input.length; i++){
        if(i === v){
            colorOrange(num);
        }else {
            colorMedium(input[i].id);
        }
    }
}

function hoverSelect(v){
    let num = checkData(v);
    colorOrange(num);
    checkPrevNext(num);
}

function checkPrevNext(num){
    for(let i = 0; i < arr.length; i++){
        if(num === arr[i]){
            if (num === 'five') {
                changeLight(arr[3]);
            }else if (num === 'one'){
                changeLight(arr[1]);
            }else {
                changeLight(arr[i-1]);
                changeLight(arr[i+1]);
            }
        }
    }
}

function changeLight(num){
    let span = document.getElementById('span-' + num)
    span.style.backgroundColor = LightGrey;
    span.style.color = White;
}

function colorOrange(num) {
    let span = document.getElementById('span-' + num)
    span.style.backgroundColor = Orange;
    span.style.color = White;
}

function colorMedium(num){
    let span = document.getElementById('span-' + num)
    span.style.backgroundColor = MediumGrey;
    span.style.color = LightGrey;
}

function checkData(v){
    let num
    for(let i = 0; i < arr.length; i++){
        if(v === i){
            num = arr[i];
        }
    }
    return num;
}

function submit(){
    let succ = document.querySelector('.success-container');
    let rat = document.querySelector('.rating-container');
    succ.style.display = 'block';
    rat.style.display = 'none';

}