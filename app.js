var animationInterval;
var spriteSheet = document.getElementById("sprite-image");
var widthOfSpriteSheet = 896;
var widthOfEachSprite = 56;

function stopAnimation() {
  clearInterval(animationInterval);
}

function startAnimation() {
  var position = widthOfEachSprite; //start position for the image
  const speed = 100; //in millisecond(ms)
  const diff = widthOfEachSprite; //difference between two sprites

  animationInterval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `-${position}px 0px`;

    if (position < widthOfSpriteSheet) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachSprite;
    }
    //reset the position to show first sprite after the last one
  }, speed);
}

//Start animation
startAnimation();

// Moving the character
let character = document.querySelector('#sprite-image')
character.style.top = 58 + 'px'
character.style.left = 150 + 'px'
let characterTopPos = parseInt(character.style.top)
let characterLeftPos = parseInt(character.style.left)

let keysPressed = [];
document.addEventListener("keydown", e=>{
    if (e.key === 'x') {
        moveDown()
    } else if (e.key === 'd') {
        moveRight()
    } else if (e.key === 'w') {
        moveUp() 
    } else if (e.key === 'a') {
        moveLeft()
    } else if (e.key === 'e') {
        moveTopRight()
    } else if (e.key === 'q') {
        moveTopLeft()
    } else if (e.key === 'c') {
        moveBottomRight()
    } else if (e.key === 'z') {
        moveBottomLeft()
    }
    console.log(e)
    keysPressed[e.key] = true;
    console.log(keysPressed)
})
console.log(character.style.left)

function moveRight() {
    characterLeftPos += 56
    character.style.left = characterLeftPos + 'px'
    character.style.transform = 'rotate('+90+'deg)';
}
function moveDown() {
    characterTopPos += 56
    character.style.top = characterTopPos + 'px'
    character.style.transform = 'rotate('+180+'deg)';
}
function moveLeft() {
    characterLeftPos -= 56
    character.style.left = characterLeftPos + 'px'
    character.style.transform = 'rotate('+270+'deg)';
}
function moveUp() {
    characterTopPos -= 56
    character.style.top = characterTopPos + 'px'
    character.style.transform = 'rotate('+0+'deg)';
}
function moveTopRight() {
    characterTopPos -= 56
    characterLeftPos += 56
    character.style.left = characterLeftPos + 'px'
    character.style.top = characterTopPos + 'px'
    character.style.transform = 'rotate('+45+'deg)';
}
function moveBottomRight() {
    characterTopPos += 56
    characterLeftPos += 56
    character.style.left = characterLeftPos + 'px'
    character.style.top = characterTopPos + 'px'
    character.style.transform = 'rotate('+135+'deg)';
}
function moveBottomLeft() {
    characterTopPos += 56
    characterLeftPos -= 56
    character.style.left = characterLeftPos + 'px'
    character.style.top = characterTopPos + 'px'
    character.style.transform = 'rotate('+225+'deg)';
}
function moveTopLeft() {
    characterTopPos -= 56
    characterLeftPos -= 56
    character.style.left = characterLeftPos + 'px'
    character.style.top = characterTopPos + 'px'
    character.style.transform = 'rotate('+315+'deg)';
}
//moveRight()
//moveDown()
/*
console.log(characterLeftPos)
moveBottomRight()
moveBottomRight()
moveTopLeft()
moveRight()
moveBottomRight()
moveBottomRight()
moveBottomRight()
moveBottomRight()
moveBottomRight()
moveBottomRight()
moveBottomRight()
moveBottomRight()
*/
//moveTopRight()
//moveDown()
//let characterLeftPos = parseInt(character.style.left)
//console.log(characterLeftPos)
// gameboard glass panel
let gameBoard = []

for (let i=0; i < 400; i++) {
    let randomDecimal = Math.random()
    const glassPanelMap = document.querySelector('.container');
    const newGlassPanel = document.createElement('div');
    newGlassPanel.id = i;
    if (randomDecimal < 0.5) {
        newGlassPanel.classList.add('breakablePanel')
        newGlassPanel.addEventListener('click',()=>{
            newGlassPanel.className = 'panelbroken'
        })
    } else {
        newGlassPanel.classList.add('solidPanel')
        newGlassPanel.addEventListener('click',()=>{
            newGlassPanel.innerText = newGlassPanel.getAttribute('totalbreakableglassaround')
        })
    }
    glassPanelMap.appendChild(newGlassPanel)
    gameBoard.push(newGlassPanel)
};

// count the number of breakable panels around each panel
for (let i=0;i<gameBoard.length;i++) {
    let numberOfBreakablePanelsAround = 0;
    let leftCorner = (i%20 === 0);
    let rightCorner = ((i-19)%20 === 0);

    // adds one if tile above is breakable
    if (i>19 && gameBoard[i-20].classList.contains('breakablePanel')) {
        numberOfBreakablePanelsAround++;
    }
    // adds one if tile to the top-right is breakable
    if (i>19 && gameBoard[i-20+1].classList.contains('breakablePanel') && !rightCorner) {
        numberOfBreakablePanelsAround++;
    }
    
    // adds one if tile to the top-right is breakable
    if (i>20 && gameBoard[i-20-1].classList.contains('breakablePanel') && !leftCorner) {
        numberOfBreakablePanelsAround++;
    }

    // adds one if tile to the right is breakable
    if (i>0 && gameBoard[i+1].classList.contains('breakablePanel') && !rightCorner) {
        numberOfBreakablePanelsAround++;
    }
    // adds one if tile to the left is breakable
    if (i>0 && gameBoard[i-1].classList.contains('breakablePanel') && !leftCorner) {
        numberOfBreakablePanelsAround++;
    }
    // adds one if tile to the bottom-right is breakable
    if (i>0 && i<379 && gameBoard[i+20+1].classList.contains('breakablePanel') && !rightCorner) {
        numberOfBreakablePanelsAround++;
    }

    // adds one if tile to the bottom is breakable
    if (i>0 && i<379 && gameBoard[i+20].classList.contains('breakablePanel') && !rightCorner) {
        numberOfBreakablePanelsAround++;
    }

    // adds one if tile to the bottom-left is breakable
    if (i>0 && i<379 && gameBoard[i+20-1].classList.contains('breakablePanel') && !rightCorner) {
        numberOfBreakablePanelsAround++;
    }

    gameBoard[i].setAttribute('totalbreakableglassaround',numberOfBreakablePanelsAround)
    //console.log(gameBoard[i])
}

//console.log(gameBoard)
//console.log(gameBoard.length)