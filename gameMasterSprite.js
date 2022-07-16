let gameMasterSpriteSheet = document.getElementById("gamemaster-sprite-image");
let widthOfGamemasterSprite = 540;
let widthOfGamemasterSpriteSheet = 46440;
let heightOfGamemasterSprite = 380;
let positionGamemaster = widthOfGamemasterSprite;
let iterationsGamemaster = 1;
let intervalsGamemaster = []

function startAnimationGamemaster() {

    const speed = 50; //in millisecond(ms)
    const diff = widthOfGamemasterSprite; //difference between two sprites
    
    let animationIntervalGamemaster = setInterval(() => {
        gameMasterSpriteSheet.style.backgroundPosition = `-${positionGamemaster}px 0px`;
        intervalsGamemaster.push(animationIntervalGamemaster);
        if (iterationsGamemaster % 82 === 0 ) {
            intervalsGamemaster.forEach(aniI=>clearInterval(aniI))
        } 
        else if (iterationsGamemaster < 42) {
            if (positionGamemaster < widthOfGamemasterSpriteSheet) {
                positionGamemaster = positionGamemaster + diff; //console.log("current positon",position)
            } else {
                positionGamemaster = widthOfGamemasterSprite; //increment the position by the width of each sprite each time
            }
        }
        else {
            if (positionGamemaster < widthOfGamemasterSpriteSheet) {
                positionGamemaster = positionGamemaster - diff; //console.log("current positon",position)
            } else {
                positionGamemaster = widthOfGamemasterSprite; //increment the position by the width of each sprite each time
            }
        }
        iterationsGamemaster++ //console.log("iterations",iterations)
    }, speed);
    iterationsGamemaster = 1  //find a way to fix the issue when the direction key is pressed twice and animation runs forever.
    gameMasterSpriteSheet.style.backgroundPosition = `-${540}px 0px`;
    widthOfGamemasterSprite = 540;
    widthOfGamemasterSpriteSheet = 46440;
    heightOfGamemasterSprite = 380;
    positionGamemaster = widthOfGamemasterSprite;
    iterationsGamemaster = 1;
    intervalsGamemaster = []
}
/*
intervalsGamemasterBreaths = [];

function startGameMasterContinuousAnimation() {
    let breaths = 1;
    let animationGameMasterBreathing = setInterval(() => {
        gameMasterSpriteSheet.style.backgroundPosition = `-${positionGamemaster}px 0px`;
        intervalsGamemasterBreaths.push(animationGameMasterBreathing);
        while true:
            
    },50);
}
*/
function openingMessage() {
    var audio = new Audio('images/openingMessage.mp3');
    audio.play();
    startAnimationGamemasterBeginning();
}

setTimeout(openingMessage,1500);

