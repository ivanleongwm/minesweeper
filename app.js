console.log(Array(9).fill().map(()=>Array(9).fill(1)))

for (let i=0; i < 30; i++) {
    const glassPanelMap = document.querySelector('.container');
    const newGlassPanel = document.createElement('div');
    newGlassPanel.id = i;
    newGlassPanel.classList.add('panel')
    //newGlassPanel.innerHTML = 'hello'
    glassPanelMap.appendChild(newGlassPanel)

}
