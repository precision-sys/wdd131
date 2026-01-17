
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {document.body.style.backgroundColor = '#333';
        document.querySelector('img').src = 'byui-logo-white.png';
        document.querySelector('h1').style.color = 'white';
        document.querySelectorAll('p').forEach (p=>p.style.color = 'white');
        document.querySelectorAll('li').forEach(li=>li.style.color = 'white');



        // code for changes to colors and logo
    } else if (current == 'light') {document.body.style.backgroundColor = 'white';
        document.querySelector('img').src = 'byui-logo-blue.webp';
        document.querySelector('h1').style.color = 'black';
        document.querySelectorAll('p').forEach (p=>p.style.color = 'black');
        document.querySelectorAll('li').forEach(li=>li.style.color = 'black');
        // code for changes to colors and logo
    }
}           
                    