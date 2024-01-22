function hide(sectionId) {
    let answer = document.getElementById('answer' + sectionId);
    let plusIcon = document.getElementById('plus' + sectionId);
    let minusIcon = document.getElementById('minus' + sectionId);

    if (plusIcon.style.display === 'block') {
        console.log("show");
        answer.style.display = 'block';
        plusIcon.style.display = 'none';
        minusIcon.style.display = 'block';
      } else {
        console.log("hide");
        answer.style.display = 'none';
        plusIcon.style.display = 'block';
        minusIcon.style.display = 'none';
      }
}