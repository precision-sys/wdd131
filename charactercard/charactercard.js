const character = {
    name: 'Snortleblat',
    photo: 'images/snortleblat.png',
}

document.querySelector('.name').textContent = character.name;
document.querySelector('.image').setAttribute('src', character.photo);
document.querySelector('.image').setAttribute('alt', character.name);