let characterOnPanelNumber = 0

document.addEventListener(
    // adds event lister to directional key to move character
    "keydown", e=>{
    if (e.repeat) {
        return false
    }
    switch(e.key) {
        case 'x':
            if (characterOnPanelNumber < 380) {
                moveCharacter('down');
            }
            break;
        case 'd':
            moveCharacter('right');
            break;
        case 'w':
            if (characterOnPanelNumber >19) {
                moveCharacter('up');
            }
            break;
        case 'a':
            if (characterOnPanelNumber%20 !== 0) {
                moveCharacter('left');
            }
            break;
        case 'e':
            if (characterOnPanelNumber >19) {
                moveCharacter('top-right');
            }
            break;
        case 'c':
            if (characterOnPanelNumber < 380) {
                moveCharacter('bottom-right');
            }
            break;
        case 'q':
            if (characterOnPanelNumber%20 !== 0 && characterOnPanelNumber >19) {
                moveCharacter('top-left');
            }
            break;
        case 'z':
            if ((characterOnPanelNumber%20 !== 0) && characterOnPanelNumber < 380) {
                moveCharacter('bottom-left');
            }
            break;
    }
    console.log('keypressed',e.key)
})

function updateCharacterCoordinates(leftPos,topPos,rotateString,panelNumberAdd) {
    //updates the html coordinates of character
            characterLeftPos += leftPos
            characterTopPos += topPos
            character.style.left = characterLeftPos + 'px'
            character.style.top = characterTopPos + 'px'
            character.style.transform = rotateString;
            characterOnPanelNumber += panelNumberAdd;
            stepOnPanel(document.getElementById(characterOnPanelNumber))
            console.log("character is currently on panel:",characterOnPanelNumber)
}

//Sprite animation of character moving
let spriteSheet = document.getElementById("sprite-image");
let widthOfEachSprite = 56;
let widthOfSpriteSheet = 896;
let position = widthOfEachSprite; //start position for the image
let iterations = 1;
let intervals = []

function startAnimation() {

    const speed = 100; //in millisecond(ms)
    const diff = widthOfEachSprite; //difference between two sprites

    let animationInterval = setInterval(() => {
        spriteSheet.style.backgroundPosition = `-${position}px 0px`;
        intervals.push(animationInterval);
        if (iterations % 9 === 0 ) {
            intervals.forEach(aniI=>clearInterval(aniI))
        } 
        else {
            if (position < widthOfSpriteSheet) {
                position = position + diff; //console.log("current positon",position)
            } else {
                position = widthOfEachSprite; //increment the position by the width of each sprite each time
            }
        }
        iterations++ //console.log("iterations",iterations)
    }, speed);
    iterations = 1  //find a way to fix the issue when the direction key is pressed twice and animation runs forever.
}

let finalColReached = false;

function checkWin(i) {
    if ((characterOnPanelNumber + 1) % 20 === 0) {
        finalColReached = true;
    }
    if (i !== 0 && (i % 20 === 0) && finalColReached) {
        let restartbutton = document.createElement('button');
            restartbutton.innerHTML = 'Play Again?';
            restartbutton.classList.add('restart-button');
            restartbutton.addEventListener("click",()=>{
                window.location.href = 'mainPage.html';
            });
            document.getElementById("modalBoxContent").innerHTML = 'You Win! Congratulations :) ' 
            document.getElementById("modalBoxContent").appendChild(restartbutton)
            modal.style.display = "block";
        //alert('You Win!')
    }
}

function moveCharacter(direction) {
    //takes a direction string as input and calls the functions to move the character icon
    startAnimation()
    switch(direction) {
        case 'right':
            updateCharacterCoordinates(56,0,'rotate('+90+'deg)',1);
            break;
        case 'down':
            updateCharacterCoordinates(0,56,'rotate('+180+'deg)',20);
            break;
        case 'left':
            updateCharacterCoordinates(-56,0,'rotate('+270+'deg)',-1);
            break;
        case 'up':
            updateCharacterCoordinates(0,-56,'rotate('+0+'deg)',-20);
            break;
        case 'top-right':
            updateCharacterCoordinates(56,-56,'rotate('+45+'deg)',-20+1);
            break;
        case 'bottom-right':
            updateCharacterCoordinates(56,56,'rotate('+135+'deg)',21);
            break;
        case 'bottom-left':
            updateCharacterCoordinates(-56,56,'rotate('+225+'deg)',19);
            break;
        case 'top-left':
            updateCharacterCoordinates(-56,-56,'rotate('+315+'deg)',-21);
            break;
        }
    checkWin(characterOnPanelNumber)
}