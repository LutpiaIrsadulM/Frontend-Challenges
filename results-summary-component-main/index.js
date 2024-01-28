fetch('./data.json')
  .then((response) => response.json())
  .then((json) => {
    let lists = document.getElementById("lists");
    
    for(let i = 0; i < json.length; i++) {
        let listItem = document.createElement('div');
        let newDiv = document.createElement('div');
        let icon = document.createElement('img');
        let category = document.createElement('p');
        let score = document.createElement('p');
        let para = document.createElement('p');
        let strong = document.createElement('strong');
        let strong2 = document.createElement('strong');

        icon.src = json[i].icon;
        listItem.className = "items";
        category.innerHTML = json[i].category;
        strong.innerHTML = json[i].score
        strong2.innerHTML = ' / 100'
        strong2.style.color = 'hsla(220, 100%, 1%, 0.486)';
        score.appendChild(strong);
        score.appendChild(strong2);
        

        listItem.id = json[i].category;
        newDiv.appendChild(icon);
        newDiv.appendChild(category);
        listItem.appendChild(newDiv);
        listItem.appendChild(score);
        lists.appendChild(listItem);
    }

    // console.log(json[0].category)
  });
  