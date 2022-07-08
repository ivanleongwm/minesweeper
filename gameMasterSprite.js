let gameMasterSpriteSheet = document.getElementById("gamemaster-sprite-image");
let widthOfGamemasterSprite = 540;
let widthOfGamemasterSpriteSheet = 23220;
let heightOfGamemasterSprite = 380;
let positionGamemaster = widthOfGamemasterSprite;
let iterationsGamemaster = 1;
let intervalsGamemaster = []

function startAnimationGamemaster() {

    const speed = 100; //in millisecond(ms)
    const diff = widthOfGamemasterSprite; //difference between two sprites

    let animationIntervalGamemaster = setInterval(() => {
        gameMasterSpriteSheet.style.backgroundPosition = `-${positionGamemaster}px 0px`;
        intervalsGamemaster.push(animationIntervalGamemaster);
        if (iterationsGamemaster % 41 === 0 ) {
            intervalsGamemaster.forEach(aniI=>clearInterval(aniI))
        } 
        else {
            if (positionGamemaster < widthOfGamemasterSpriteSheet) {
                positionGamemaster = positionGamemaster + diff; //console.log("current positon",position)
            } else {
                positionGamemaster = widthOfGamemasterSprite; //increment the position by the width of each sprite each time
            }
        }
        iterationsGamemaster++ //console.log("iterations",iterations)
    }, speed);
    iterationsGamemaster = 1  //find a way to fix the issue when the direction key is pressed twice and animation runs forever.
}