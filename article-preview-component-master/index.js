
function share(){
    let width = window.screen.width;
    let icons = document.getElementById('bubble');
    let btn = document.getElementById('button');
    let detail = document.getElementById('profile');
    let share = document.getElementById('share');
    let item = document.getElementById('prof-item');
    let sharem = document.getElementById('share-icon');
    

    if(width > 375) {
        if(icons.style.visibility === 'visible') {
            icons.style.visibility = 'hidden';
            btn.style.backgroundColor = 'hsl(212, 23%, 69%)';
            share.style.filter = 'brightness(100%)';
        }else {
            icons.style.visibility = 'visible';
            btn.style.backgroundColor = 'hsl(214, 17%, 51%)';
            share.style.filter = 'brightness(200%)';
        }
    }else {
        if(item.style.display === 'none') {
            detail.style.backgroundColor = '';
            item.style.display = 'flex';
            btn.style.backgroundColor = 'hsl(212, 23%, 69%)';
            share.style.filter = 'brightness(100%)';
            sharem.style.display = 'none';
        }else {
            detail.style.backgroundColor = 'hsl(217, 19%, 35%)';
            item.style.display = 'none';
            btn.style.backgroundColor = 'hsl(214, 17%, 51%)';
            share.style.filter = 'brightness(200%)';
            sharem.style.display = 'flex';
        }
    }
}
