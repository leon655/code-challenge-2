const shoppinglist =[];

document.getElementById('add-btn').addEventListener('click', () => {
    const input = document.getElementById('item-input');
    const itemText = input.value.trim();

    if(itemText !== '') {
        shoppinglist.push(itemText);
        addItemToDOM(itemText);
        input.value ='';
     }
});
document.getElementById('clear-btn').addEventListener('click' ,() => {
    shoppinglist.length=0;
    document.getElementById('items-list').innerHTML='';
});
function addItemToDOM(itemText) {
    const list =document.getElementById('items-list');
    const listItem =document.createElement('li');

    listItem.innerHTML=`
    <span>${itemText}</span>
    <button class="mark-btn">Mark purchased</button>
    `;

    listItem.querySelector('.mark-btn').addEventListener('click' ,()=>{
        listItem.classList.toggle('purchased');
    });
    list.appendChild(listItem);
    }



