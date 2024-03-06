const text = document.getElementById('text');
const randomBtn = document.getElementById('random-btn');
const id = document.getElementById('ad-id');

// let advice = {
//     text: '',
//     number: '',
// }

async function fetchData(){
    let response = await fetch('https://api.adviceslip.com/advice');
    let advice = await response.json();
    updateText(advice);
}

const updateText = (advices) => {
    text.textContent = advices.slip.advice;
    id.textContent = advices.slip.id;
}

randomBtn.addEventListener('click', fetchData);