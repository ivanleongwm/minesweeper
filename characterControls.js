document.addEventListener(
    // adds event lister to directional key to move character
    "keydown", e=>{
    switch(e.key) {
        case 'x':
            moveCharacter('down');
            break;
        case 'd':
            moveCharacter('right');
            break;
        case 'w':
            moveCharacter('up');
            break;
        case 'a':
            moveCharacter('left');
            break;
        case 'e':
            moveCharacter('top-right');
            break;
        case 'c':
            moveCharacter('bottom-right');
            break;
        case 'q':
            moveCharacter('top-left');
            break;
        case 'z':
            moveCharacter('bottom-left');
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
            stepOnPanel(document.getElementById(characterOnPanelNumber()+panelNumberAdd))
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
}