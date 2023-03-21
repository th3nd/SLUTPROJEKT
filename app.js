function menu_state(arg) {
    const menu = document.querySelector('.menu');
    menu.style.display = arg ? 'block' : 'none';
}

current_block = 0;

function submit() {
    const content = document.querySelector('#content');
    const err = document.querySelector('#error');

    const feed = document.querySelector('.feed');

    if (!content.value) {
        err.style.display = 'block';
    }   else {
        err.style.display = 'none';
        menu_state(false);
        // inte de bästa sättet
        feed.innerHTML += "<div class='block' onclick='select("+current_block+")' id='"+current_block+"'><p>"+content.value+"</p></div>";
        current_block++;
    }
}

function select(a) {
    const block = document.getElementById(a);
    block.style.backgroundColor = 'red';
}