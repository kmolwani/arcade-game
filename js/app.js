////////////////////////////////////////////////////////////////////////////////
// Enemies our player must avoid

var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

var loc = 1; // initiating location of the bug
var speedUpdate = 4; // initiating the speed of the bug travel on the screen

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if (this.x < 501) {
      // using loc to update the location of the enemy on the screen
      loc = Math.floor(speedUpdate + speedUpdate*dt);
      this.x +=  Math.floor(loc);

    } else if (this.x > 500) {
      // updating the enemy's x position after it crosses the screen
      this.x = (Math.floor(Math.random() * 50)) - (Math.floor(Math.random() * 300));
    }
    // calling the collsion detection functions
    collisionDetection35(this.x, this.y);
    collisionDetection120(this.x, this.y);
    collisionDetection205(this.x, this.y);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
  constructor(x = 200, y =375) { // the constructor is setting the starting position of the player
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
  };

  update(dt){

  };

// Draw the player on the screen
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };

  handleInput(move) {
    // This changes the position of the player by some x-value when different keys are pressed
    if (move == 'left') {
      if (this.x == 0){
        this.x == 0
      } else if (this.x != 401) {
          this.x = this.x - 100;;
      }
    } else if (move == 'right') {
      if (this.x == 400){
        this.x == 400
      } else if (this.x < 400) {
        this.x = this.x + 100;
      }
    } else if (move == 'down') {
      if (this.y == 375){
        this.y == 375
      } else if (this.y != 375) {
          this.y = this.y + 85;;
      }
    } else if (move == 'up') {
      if (this.y < 36) {
          this.y = 375;
          numberOfBugs += 1;
          totalEnemies();
          level();
      } else if (this.y < 376){
        this.y = this.y - 85;
      }
    };
  };
}
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
// Now instantiate your objects.
var enemy = []; // creating an empty array to place different enemy objects
var numberOfBugs = 1; // this value is used to increase the bugs as the user passes game levels.
function totalEnemies() { // creating function to generate enemies form the Enemy class
  var x = -100; // declaring initial starting location for the enemy
  var x2 = -300; // declaring initial starting location for the enemy
  var x3 = -200; // declaring initial starting location for the enemy
  var y = 35; // declaring y location of the enemy
  var y2 = 120; // declaring y location of the enemy
  var y3 = 205; // declaring y location of the enemy
  var ranNumber = (Math.floor(Math.random() * numberOfBugs)); // declaring random number to have different number of bugs on each location in the game
  var ranNumber2 = (Math.floor(Math.random() * numberOfBugs));
  var ranNumber3 = (Math.floor(Math.random() * numberOfBugs));

  for (let i=0; i < (numberOfBugs - ranNumber); i++) {
    enemy.x = x;
    enemy.y = y;
    enemy.push(new Enemy(enemy.x, enemy.y));
  }

  for (let i=0; i < (numberOfBugs - ranNumber2); i++) {
    enemy.x = x2;
    enemy.y = y2;
    enemy.push(new Enemy(enemy.x, enemy.y));
  }

  for (let i=0; i < (numberOfBugs - ranNumber3); i++) {
    enemy.x = x3;
    enemy.y = y3;
    enemy.push(new Enemy(enemy.x, enemy.y));
  }
}
totalEnemies();

// Place all enemy objects in an array called allEnemies
var allEnemies = enemy;
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
// Place the player object in a variable called player
var player = new Player();
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
// This checks the collision of the enemy with the player at three different locations.
// If the player collides with the enemy, a message is displayed on the screen.

function collisionDetection35(enemyX, enemyY) {
  if (player.y == 35 && enemyY == 35) {
    if (player.x == 0 && (enemyX >= -50 && enemyX <= 50)) {
       document.body.innerHTML = "";
       var span = document.createElement('span')
       document.body.appendChild(span);
       span.setAttribute("style", "text-align: center; font-size: 20px;");
       span.innerHTML = "<pre>" + 'Oh no, you hit a bug :('  + '\n\nAll of your progress is LOST' + '\n\nThe game will restart momentarily' + "</pre";
       setTimeout(function() {location.reload()}, 3000);
    } else if (player.x == 100 && (enemyX >= 51 && enemyX <= 150)) {
      document.body.innerHTML = "";
      var span = document.createElement('span')
      document.body.appendChild(span);
      span.setAttribute("style", "text-align: center; font-size: 20px;");
      span.innerHTML = "<pre>" + 'Oh no, you hit a bug :('  + '\n\nAll of your progress is LOST' + '\n\nThe game will restart momentarily' + "</pre";
      setTimeout(function() {location.reload()}, 3000);
    } else if (player.x == 200 &&  (enemyX >= 150 && enemyX <= 250)) {
      document.body.innerHTML = "";
      var span = document.createElement('span')
      document.body.appendChild(span);
      span.setAttribute("style", "text-align: center; font-size: 20px;");
      span.innerHTML = "<pre>" + 'Oh no, you hit a bug :(' + '\n\nAll of your progress is LOST' + '\n\nThe game will restart momentarily' + "</pre";
      setTimeout(function() {location.reload()}, 3000);
    } else if (player.x == 300 &&  (enemyX >= 251 && enemyX <= 350)) {
      document.body.innerHTML = "";
      var span = document.createElement('span')
      document.body.appendChild(span);
      span.setAttribute("style", "text-align: center; font-size: 20px;");
      span.innerHTML = "<pre>" + 'Oh no, you hit a bug :(' + '\n\nAll of your progress is LOST' + '\n\nThe game will restart momentarily' + "</pre";
      setTimeout(function() {location.reload()}, 3000);
    } else if (player.x == 400 &&  (enemyX >= 351 && enemyX <= 450)) {
      document.body.innerHTML = "";
      var span = document.createElement('span')
      document.body.appendChild(span);
      span.setAttribute("style", "text-align: center; font-size: 20px;");
      span.innerHTML = "<pre>" + 'Oh no, you hit a bug :(' + '\n\nAll of your progress is LOST' + '\n\nThe game will restart momentarily' + "</pre";
      setTimeout(function() {location.reload()}, 3000);
    }
  }
};

function collisionDetection120(enemyX, enemyY) {
  if (player.y == 120 && enemyY == 120) {
    if (player.x == 0 && (enemyX >= -50 && enemyX <= 50)) {
       document.body.innerHTML = "";
       var span = document.createElement('span')
       document.body.appendChild(span);
       span.setAttribute("style", "text-align: center; font-size: 20px;");
       span.innerHTML = "<pre>" + 'Oh no, you hit a bug :('  + '\n\nAll of your progress is LOST' + '\n\nThe game will restart momentarily' + "</pre";
       setTimeout(function() {location.reload()}, 3000);
    } else if (player.x == 100 && (enemyX >= 51 && enemyX <= 150)) {
      document.body.innerHTML = "";
      var span = document.createElement('span')
      document.body.appendChild(span);
      span.setAttribute("style", "text-align: center; font-size: 20px;");
      span.innerHTML = "<pre>" + 'Oh no, you hit a bug :('  + '\n\nAll of your progress is LOST' + '\n\nThe game will restart momentarily' + "</pre";
      setTimeout(function() {location.reload()}, 3000);
    } else if (player.x == 200 &&  (enemyX >= 150 && enemyX <= 250)) {
      document.body.innerHTML = "";
      var span = document.createElement('span')
      document.body.appendChild(span);
      span.setAttribute("style", "text-align: center; font-size: 20px;");
      span.innerHTML = "<pre>" + 'Oh no, you hit a bug :('  + '\n\nAll of your progress is LOST' + '\n\nThe game will restart momentarily' + "</pre";
      setTimeout(function() {location.reload()}, 3000);
    } else if (player.x == 300 &&  (enemyX >= 251 && enemyX <= 350)) {
      document.body.innerHTML = "";
      var span = document.createElement('span')
      document.body.appendChild(span);
      span.setAttribute("style", "text-align: center; font-size: 20px;");
      span.innerHTML = "<pre>" + 'Oh no, you hit a bug :('  + '\n\nAll of your progress is LOST' + '\n\nThe game will restart momentarily' + "</pre";
      setTimeout(function() {location.reload()}, 3000);
    } else if (player.x == 400 &&  (enemyX >= 351 && enemyX <= 450)) {
      document.body.innerHTML = "";
      var span = document.createElement('span')
      document.body.appendChild(span);
      span.setAttribute("style", "text-align: center; font-size: 20px;");
      span.innerHTML = "<pre>" + 'Oh no, you hit a bug :('  + '\n\nAll of your progress is LOST' + '\n\nThe game will restart momentarily' + "</pre";
      setTimeout(function() {location.reload()}, 3000);
    }
  }
};

function collisionDetection205(enemyX, enemyY) {
  if (player.y == 205 && enemyY == 205) {
    if (player.x == 0 && (enemyX >= -50 && enemyX <= 50)) {
       document.body.innerHTML = "";
       var span = document.createElement('span')
       document.body.appendChild(span);
       span.setAttribute("style", "text-align: center; font-size: 20px;");
       span.innerHTML = "<pre>" + 'Oh no, you hit a bug :('  + '\n\nAll of your progress is LOST' + '\n\nThe game will restart momentarily' + "</pre";
       setTimeout(function() {location.reload()}, 3000);
    } else if (player.x == 100 && (enemyX >= 51 && enemyX <= 150)) {
      document.body.innerHTML = "";
      var span = document.createElement('span')
      document.body.appendChild(span);
      span.setAttribute("style", "text-align: center; font-size: 20px;");
      span.innerHTML = "<pre>" + 'Oh no, you hit a bug :('  + '\n\nAll of your progress is LOST' + '\n\nThe game will restart momentarily' + "</pre";
      setTimeout(function() {location.reload()}, 3000);
    } else if (player.x == 200 &&  (enemyX >= 150 && enemyX <= 250)) {
      document.body.innerHTML = "";
      var span = document.createElement('span')
      document.body.appendChild(span);
      span.setAttribute("style", "text-align: center; font-size: 20px;");
      span.innerHTML = "<pre>" + 'Oh no, you hit a bug :('  + '\n\nAll of your progress is LOST' + '\n\nThe game will restart momentarily' + "</pre";
      setTimeout(function() {location.reload()}, 3000);
    } else if (player.x == 300 &&  (enemyX >= 251 && enemyX <= 350)) {
      document.body.innerHTML = "";
      var span = document.createElement('span')
      document.body.appendChild(span);
      span.setAttribute("style", "text-align: center; font-size: 20px;");
      span.innerHTML = "<pre>" + 'Oh no, you hit a bug :('  + '\n\nAll of your progress is LOST' + '\n\nThe game will restart momentarily' + "</pre";
      setTimeout(function() {location.reload()}, 3000);
    } else if (player.x == 400 &&  (enemyX >= 351 && enemyX <= 450)) {
      document.body.innerHTML = "";
      var span = document.createElement('span')
      document.body.appendChild(span);
      span.setAttribute("style", "text-align: center; font-size: 20px;");
      span.innerHTML = "<pre>" + 'Oh no, you hit a bug :('  + '\n\nAll of your progress is LOST' + '\n\nThe game will restart momentarily' + "</pre";
      document.removeEventListener('keypress', player);
      setTimeout(function() {location.reload()}, 3000);
    }
  }
};
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    var keyCode = 0;
    player.handleInput(allowedKeys[e.keyCode]);
});
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
// As the user progresses in the game, this updates the level.
// If the user crosses level 5, a Winning message is presented to the user.
function level() {
  var level = numberOfBugs;
  // decresing the enemy speed after the user reaches level 3
  if (level == 3) {
    speedUpdate = 2;
  }
  if (level > 5) {
    document.body.innerHTML = "";
    var winningMessage = document.createElement('h1')
    document.body.appendChild(winningMessage);
    winningMessage.innerHTML = "<pre>" + "Congratulations!!! \n\n You have WON the game." + "</pre>";
    player.x = 0;
  }
  //using pre tag to be able to use new-line string
  var div = document.getElementById('level');
  div.setAttribute("style", "font-size: 25px");
  div.innerHTML = "<span>" + level + '/5' + "</span";
}
////////////////////////////////////////////////////////////////////////////////
