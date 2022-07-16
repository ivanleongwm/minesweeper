// Clear rules for the game:
// 1. 
// Get the modal
var modal = document.getElementById("myModalLose");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let numberOfLives = '🦑🦑🦑🦑🦑🦑🦑';

var brokenPanelsSteppedOn = 0;
//document.querySelector('.fixed-div').innerHTML = `Broken Panels Stepped On: ${brokenPanelsSteppedOn}`
//document.querySelector('.fixed-div-right').innerHTML = numberOfLives

function fall() {
    $('#sprite-image').attr('id','sprite-image-stationary');
    $('#sprite-image').animate({"background-size":"80%"});
}

// Moving the character
let topLeftYCoordGlassGrid = document.querySelector('.glassPanelMap').getBoundingClientRect().top
let topLeftXCoordGlassGrid = document.querySelector('.glassPanelMap').getBoundingClientRect().left
let character = document.querySelector('#sprite-image')
character.style.top = topLeftYCoordGlassGrid + 'px'
character.style.left = topLeftXCoordGlassGrid + 3 + 'px'
let characterTopPos = parseInt(character.style.top)
let characterLeftPos = parseInt(character.style.left)


//console.log(character.style.left)
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function stepOnPanel(destinationPanel) {
    if (destinationPanel.getAttribute('class') === 'breakablePanel') {
        await sleep(1000)
        destinationPanel.className = 'panelbroken'
        brokenPanelsSteppedOn += 1
        startAnimationGamemaster()
        numberOfLives = numberOfLives.slice(0,-2)
        if (brokenPanelsSteppedOn < 8) {
            document.getElementById("players").src = `images/playersStart${brokenPanelsSteppedOn}.png`;
        }
        //document.querySelector('.fixed-div-right').innerHTML = numberOfLives
        checkWin(getCharacterCoordinates())
        if (numberOfLives === '') {
            document.getElementById("modalBoxContent").innerHTML = 'You lose! Try again!'
            modal.style.display = "block";
        }
        //document.querySelector('.fixed-div').innerHTML = `Broken Panels Stepped On: ${brokenPanelsSteppedOn}`
    } else {
        await sleep(800)
        checkWin(getCharacterCoordinates())
        //document.getElementById("myImg").src = "images/smile.jpg";
        destinationPanel.innerText = destinationPanel.getAttribute('totalbreakableglassaround')
    }
}

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

function checkWin(currentXYCoordinates) {
    console.log("Checking win:",currentXYCoordinates)
    if (currentXYCoordinates[0] > 1174) {
        //alert("you win!")
        //modal.style.display = "block";
    }
 }

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

/*
function characterOnPanelNumber() {
    
    returns the glass panel index on the array that the character is currently situated on 
    -- this function malfunctions when the gamegrid exceeds the screensize and there is a scroll bar on the left.
    -- it returns a number that is less than the actual distance from the top when there is a scrollbar,
    -- because it takes distance from top of the browser. This issue needs to be resolved. try to take distance from
    -- top of grid instead of top of browser.
    
    let characterXCoord = getCharacterCoordinates()[0]
    let characterYCoord = getCharacterCoordinates()[1]
    for (let i=0; i < xArrayPattern.length; i++) {
        if (xArrayPattern[i][0][0] < characterXCoord && xArrayPattern[i][0][1] > characterXCoord && xArrayPattern[i][1][0] < characterYCoord && xArrayPattern[i][1][1] > characterYCoord) {
            console.log(xArrayPattern[i])
            console.log(i)
            if (i !== 0 && ((i-19) % 20) === 0) {
                document.getElementById("modalBoxContent").innerHTML = 'You Win! Congratulation!'
                modal.style.display = "block";
                //alert('You Win!')
            }
            return  i
        }
    }
}
*/
let xWinMinMax = [1174.599998474121, 1230.599998474121]

