// Defining the character as an object, assigning properties and methods.
const character = {
    name: 'Snortleblat',
    photo: 'images/snortleblat.png',
    health: 100,
    attack: 20,
    level: 5,
    levelUp: function () {
        this.level++;
    }
}
//Dynamically inlcudinng the image in the page, setting the character, the name, and the 
// initial values of the key properties.
document.querySelector('.name').textContent = character.name;
document.querySelector('.image').setAttribute('src', character.photo);
document.querySelector('.image').setAttribute('alt', character.name);
document.getElementById('health').textContent = `Health: ${character.health}`;
document.getElementById('level').textContent = `Level: ${character.level}`;

//Activating the buttons
const attackButton = document.getElementById('attackbut');
attackButton.addEventListener('click', function () {
    character.health -= character.attack;
    document.getElementById('health').textContent = `Health: ${character.health}`;
});

const levelUpButton = document.getElementById('levelUpbut');
levelUpButton.addEventListener('click', function () {
    character.levelUp();
    document.getElementById('level').textContent = `Level: ${character.level}`;
    document.getElementById('health').textContent = `Health: ${character.health}`;
});