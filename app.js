var animationInterval;
var spriteSheet = document.getElementById("sprite-image");
//var widthOfSpriteSheet = 896;
//var widthOfEachSprite = 56;
var widthOfSpriteSheet = 896;
var widthOfEachSprite = 56;
var position = widthOfEachSprite; //start position for the image
let numberOfLives = '🦑🦑🦑🦑🦑';

var brokenPanelsSteppedOn = 0;
document.querySelector('.fixed-div').innerHTML = `Broken Panels Stepped On: ${brokenPanelsSteppedOn}`
document.querySelector('.fixed-div-right').innerHTML = numberOfLives

function stopAnimation() {
    $(function () {
        $('#sprite-image').animate({'transform':'scale(0.5)',duration:1000})
        //$('#sprite-image').animate({'top' : `${topLeftYCoordGlassGrid*2}px`,'left' : `${topLeftXCoordGlassGrid*2}px`,'zoom' : '0.5',},{duration: 2000, queue: false});
        $('#sprite-image').animate({'top' : `${topLeftYCoordGlassGrid*2}px`},{duration: 2000, queue: false});
        $('#sprite-image').animate({'left' : `${topLeftXCoordGlassGrid*2}px`},{duration: 2000, queue: false});
    })
    
    //character.style.top = topLeftYCoordGlassGrid*2 + 'px'
    //character.style.left = topLeftXCoordGlassGrid*2 + 3 + 'px'
    //if (position == widthOfEachSprite) {
    //    clearInterval(animationInterval);
    //}
}

let iterations = 1

function startAnimation() {
  
  const speed = 100; //in millisecond(ms)
  const diff = widthOfEachSprite; //difference between two sprites

  animationInterval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `-${position}px 0px`;
    
    
    
    if (iterations % 9 == 0 ) {
        clearInterval(animationInterval);
    } else {
        if (position < widthOfSpriteSheet) {
            position = position + diff;
            console.log(position)
          } else {
            //increment the position by the width of each sprite each time
            position = widthOfEachSprite;
          }
    }
    iterations++
    console.log(iterations)
    
}, speed);
    iterations = 1  //find a way to fix the issue when the direction key is pressed twice and animation runs forever.
}

function fall() {
    
    $('#sprite-image').attr('id','sprite-image-stationary');
    $('#sprite-image').animate({"background-size":"80%"});
    //$('#sprite-image').css('backgroundSize','40px');
    //$('#sprite-image').css('background-size','40px');
    //$('#sprite-image').css('background-repeat','no-repeat');
    //$('#sprite-image').animate({'background-size':'40px','background-repeat':'no-repeat','background':'url(stationaryMale.png)'},100);
}

//Start animation
//startAnimation();

// Moving the character
let topLeftYCoordGlassGrid = document.querySelector('.glassPanelMap').getBoundingClientRect().top
let topLeftXCoordGlassGrid = document.querySelector('.glassPanelMap').getBoundingClientRect().left
let character = document.querySelector('#sprite-image')
character.style.top = topLeftYCoordGlassGrid + 'px'
character.style.left = topLeftXCoordGlassGrid + 3 + 'px'
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
//console.log(character.style.left)
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function stepOnPanel(destinationPanel) {
    if (destinationPanel.getAttribute('class') === 'breakablePanel') {
        await sleep(1000)
        destinationPanel.className = 'panelbroken'
        brokenPanelsSteppedOn += 1
        numberOfLives = numberOfLives.slice(0,-2)
        document.querySelector('.fixed-div-right').innerHTML = numberOfLives
        if (numberOfLives === '') {
            alert('You Lose!')
        }
        document.querySelector('.fixed-div').innerHTML = `Broken Panels Stepped On: ${brokenPanelsSteppedOn}`

    } else {
        await sleep(800)
        destinationPanel.innerText = destinationPanel.getAttribute('totalbreakableglassaround')
    }
}


function moveRight() {
    startAnimation()
    characterLeftPos += 56
    character.style.left = characterLeftPos + 'px'
    character.style.transform = 'rotate('+90+'deg)';
    stepOnPanel(document.getElementById(characterOnPanelNumber()+1))
}
function moveDown() {
    startAnimation()
    characterTopPos += 56
    character.style.top = characterTopPos + 'px'
    character.style.transform = 'rotate('+180+'deg)';
    stepOnPanel(document.getElementById(characterOnPanelNumber()+20))
}
function moveLeft() {
    startAnimation()
    characterLeftPos -= 56
    character.style.left = characterLeftPos + 'px'
    character.style.transform = 'rotate('+270+'deg)';
    stepOnPanel(document.getElementById(characterOnPanelNumber()-1))
}
function moveUp() {
    startAnimation()
    characterTopPos -= 56
    character.style.top = characterTopPos + 'px'
    character.style.transform = 'rotate('+0+'deg)';
    stepOnPanel(document.getElementById(characterOnPanelNumber()-20))
}
function moveTopRight() {
    startAnimation()
    characterTopPos -= 56
    characterLeftPos += 56
    character.style.left = characterLeftPos + 'px'
    character.style.top = characterTopPos + 'px'
    character.style.transform = 'rotate('+45+'deg)';
    stepOnPanel(document.getElementById(characterOnPanelNumber()-20+1))
}
function moveBottomRight() {
    startAnimation()
    characterTopPos += 56
    characterLeftPos += 56
    character.style.left = characterLeftPos + 'px'
    character.style.top = characterTopPos + 'px'
    character.style.transform = 'rotate('+135+'deg)';
    stepOnPanel(document.getElementById(characterOnPanelNumber()+20+1))
}
function moveBottomLeft() {
    startAnimation()
    characterTopPos += 56
    characterLeftPos -= 56
    character.style.left = characterLeftPos + 'px'
    character.style.top = characterTopPos + 'px'
    character.style.transform = 'rotate('+225+'deg)';
    stepOnPanel(document.getElementById(characterOnPanelNumber()+20-1))
}
function moveTopLeft() {
    startAnimation()
    characterTopPos -= 56
    characterLeftPos -= 56
    character.style.left = characterLeftPos + 'px'
    character.style.top = characterTopPos + 'px'
    character.style.transform = 'rotate('+315+'deg)';
    stepOnPanel(document.getElementById(characterOnPanelNumber()-20-1))
}


//console.log(document.querySelector('.glassPanelMap').offsetLeft)
console.log(topLeftXCoordGlassGrid)
console.log(topLeftYCoordGlassGrid)

let characterXCoord = document.querySelector('#sprite-image').getBoundingClientRect().left + 28
let characterYCoord = document.querySelector('#sprite-image').getBoundingClientRect().top + 28

function getCharacterCoordinates() {
    characterXCoord = document.querySelector('#sprite-image').getBoundingClientRect().left + 28
    characterYCoord = document.querySelector('#sprite-image').getBoundingClientRect().top + 28
    console.log(characterXCoord)
    console.log(characterYCoord)
    return [characterXCoord,characterYCoord]
}
/*
$('#sprite-image').click(function () {
    $('#sprite-image').animate({height: '-=28px'},1000);
    $('#sprite-image').animate({width: '-=28px'},1000);
    stopAnimation()
    $('#sprite-image').animate({'backgroundSize' : '500px'},1000);
    
})
*/
//$('#sprite-image').animate({width: '-=25px'},1000);
//$('#sprite-image').animate({height: '-=25px'},1000);
//$('#sprite-image').animate({'backgroundSize' : '1200px'},1000);

// Create min max array of x and y coordinates of each glass panel
let xArrayPattern = []
let yMin = topLeftYCoordGlassGrid;
let yMax = topLeftYCoordGlassGrid + 56;
for (let x=0; x<20; x++) {
    let xMin = topLeftXCoordGlassGrid;
    let xMax = xMin + 56;
    for (let i=0; i < 20; i++) {    
        //xArrayPattern.push([])
        xArrayPattern.push([[xMin,xMax],[yMin,yMax]])
        xMin = xMax
        xMax += 56
    }
    yMin = yMax
    yMax += 56
}
console.log(xArrayPattern)

function characterOnPanelNumber() {
    /*
    returns the glass panel index on the array that the character is currently situated on 
    -- this function malfunctions when the gamegrid exceeds the screensize and there is a scroll bar on the left.
    -- it returns a number that is less than the actual distance from the top when there is a scrollbar,
    -- because it takes distance from top of the browser. This issue needs to be resolved. try to take distance from
    -- top of grid instead of top of browser.
    */
    let characterXCoord = getCharacterCoordinates()[0]
    let characterYCoord = getCharacterCoordinates()[1]
    for (let i=0; i < xArrayPattern.length; i++) {
        if (xArrayPattern[i][0][0] < characterXCoord && xArrayPattern[i][0][1] > characterXCoord && xArrayPattern[i][1][0] < characterYCoord && xArrayPattern[i][1][1] > characterYCoord) {
            console.log(xArrayPattern[i])
            console.log(i)
            return  i
        }
    }
}
//characterOnPanelNumber()

let gameBoard = []

for (let i=0; i < 400; i++) {
    let randomDecimal = Math.random()
    const glassPanelMap = document.querySelector('.container');
    const newGlassPanel = document.createElement('div');
    newGlassPanel.id = i;
    if (randomDecimal < 0.4) {
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

//console.log(document.querySelector('#0').getBoundingClientRect().left)
//console.log(gameBoard)
//console.log(gameBoard.length)