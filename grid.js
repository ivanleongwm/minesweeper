// create the gameboard grid array
let gameBoard = []
const glassPanelMap = document.querySelector('.container');
for (let i=0; i < 400; i++) {
    const newGlassPanel = document.createElement('div');
    newGlassPanel.id = i;
    if (Math.random() < 0.4) {
        newGlassPanel.classList.add('breakablePanel')
        //newGlassPanel.addEventListener('click',()=>{newGlassPanel.className = 'panelbroken'})
    } else {
        newGlassPanel.classList.add('solidPanel')
        //newGlassPanel.addEventListener('click',()=>{newGlassPanel.innerText = newGlassPanel.getAttribute('totalbreakableglassaround')})
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
    if (i>19 && gameBoard[i-20].classList.contains('breakablePanel')) { numberOfBreakablePanelsAround++; }
    
    // adds one if tile to the top-right is breakable
    if (i>19 && gameBoard[i-20+1].classList.contains('breakablePanel') && !rightCorner) { numberOfBreakablePanelsAround++; }
    
    // adds one if tile to the top-right is breakable
    if (i>20 && gameBoard[i-20-1].classList.contains('breakablePanel') && !leftCorner) { numberOfBreakablePanelsAround++;}

    // adds one if tile to the right is breakable
    if (i>0 && gameBoard[i+1].classList.contains('breakablePanel') && !rightCorner) { numberOfBreakablePanelsAround++; }
    
    // adds one if tile to the left is breakable
    if (i>0 && gameBoard[i-1].classList.contains('breakablePanel') && !leftCorner) { numberOfBreakablePanelsAround++; }
    
    // adds one if tile to the bottom-right is breakable
    if (i>0 && i<379 && gameBoard[i+20+1].classList.contains('breakablePanel') && !rightCorner) { numberOfBreakablePanelsAround++; }

    // adds one if tile to the bottom is breakable
    if (i>0 && i<379 && gameBoard[i+20].classList.contains('breakablePanel') && !rightCorner) { numberOfBreakablePanelsAround++; }

    // adds one if tile to the bottom-left is breakable
    if (i>0 && i<379 && gameBoard[i+20-1].classList.contains('breakablePanel') && !rightCorner) { numberOfBreakablePanelsAround++; }

    gameBoard[i].setAttribute('totalbreakableglassaround',numberOfBreakablePanelsAround)
    //console.log(gameBoard[i])
}