const pacMen = []; // This array holds all the pacmen

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10); // {x:?, y:?}
  let position = setToRandom(200);

  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './images/PacMan1.png';
  newimg.width = 100;

  // TODO: set position here
  newimg.style.top = '80px';
  newimg.style.left = '50px';
  newimg.style.right = '10px';
  newimg.style.bottom = '30px';
  // TODO add new Child image to game
  game.appendChild(newimg);

  // return details in an object
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  // TODO: detect collision with all walls and make pacman bounce
  /*let itemBound = item.getBoundingClienRect();
  let wallBound = wall.getBoundingClienRect();
  let ix = itemBound.left + itemBound.width * 0.5;
  let iy = itemBound.top + itemBound.height * 0.5;
  let wx = wallBound.left + wallBound.width * 0.5;
  let wy = wallBound.top + wallound.height * 0.5;
  let wOff = (itemBound.width + wallBound.width) * 0.5;
  let hOff = (itemBound.height + wallBound.height) * 0.5;

  return Math.abs(ix - wx) < wOff && Math.abs(iy - wy) < hOff;
}
let item = document.getElementByName('img');
let wall = document.getElementById('game');
function testFN() {
  item.style.left = `${Math.floor(Math.random() * 300)}px`;
  item.style.top = `${Math.floor(Math.random() * 150)}px`;
  wall.style.left = `${Math.floor(Math.random() * 300)}px`;
  wall.style.top = `${Math.floor(Math.random() * 150)}px`;

  if (checkCollisions(item, wall)) {
    item.classList.add('coll');
    wall.classList.add('coll');
  } else {
    item.classList.remove('coll');
    wall.classList.remove('coll');
  }
*/};


function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}
