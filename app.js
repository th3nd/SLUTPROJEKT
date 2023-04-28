function menu_state(arg) {
    const menu = document.querySelector('.menu');
    menu.style.display = arg ? 'block' : 'none';
}


const content = document.querySelector('#content');
const feed = document.querySelector('.feed');

String.prototype.remove = function (s){return this.replace(s,'')}

current_block = 0;
saved_notes = ''
function submit() {
    // check saved notes and get how many of the blocks that exists
    saved_notes = localStorage.getItem('notes');
    if (saved_notes)
        current_block = (saved_notes.match(/id/g) || []).length;

    if (!content.value) {
        content.placeholder = 'content is missing a value';
    }   else {
        menu_state(false);
        // inte de bästa sättet
        feed.innerHTML += "<div class='block' onclick='select("+current_block+")' id='"+current_block+"'><p>"+content.value+"</p><img width=20 onclick='delete_block("+current_block+")'src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGUvPjxnIGRhdGEtbmFtZT0iOTMtYmluIiBpZD0iXzkzLWJpbiI+PHJlY3QgY2xhc3M9ImNscy0xIiBoZWlnaHQ9IjIyIiB3aWR0aD0iMTgiIHg9IjciIHk9IjkiLz48cmVjdCBjbGFzcz0iY2xzLTEiIGhlaWdodD0iNCIgd2lkdGg9IjIyIiB4PSI1IiB5PSI1Ii8+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxMiA1IDEyIDEgMjAgMSAyMCA1Ii8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMTMiIHgyPSIxMyIgeTE9IjE0IiB5Mj0iMzEiLz48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIxOSIgeDI9IjE5IiB5MT0iMTQiIHkyPSIzMSIvPjwvZz48L3N2Zz4='</div>";
        content.value = '';
        // current_block++;
        save_notes()
    }
}

let blocks = []
function select(a) {
    const block = document.getElementById(a);

    if (!blocks[a]) {
        block.style.backgroundColor = 'rgb(200, 200, 200)';
        block.style.color = 'rgb(75, 75, 75)';
        block.style.textDecoration = 'line-through';
    } else {
        block.style.backgroundColor = 'rgb(255, 255, 255)';
        block.style.color = 'rgb(50, 50, 50)';
        block.style.textDecoration = 'none';
    }


    blocks[a] = !blocks[a];
}

function delete_block(a) {
    const block = document.getElementById(a);
    block.style.display = 'none';
}


function save_notes() {
    localStorage.setItem('notes', feed.innerHTML);
}

get_notes();
function get_notes() {
    // saved_notes = localStorage.getItem('notes');
    feed.innerHTML = localStorage.getItem('notes');
}