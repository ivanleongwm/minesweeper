for (let i=0; i < 90; i++) {
    const glassPanelMap = document.querySelector('.container');
    const newGlassPanel = document.createElement('div');
    newGlassPanel.id = i;
    newGlassPanel.classList.add('panel')
    //newGlassPanel.innerHTML = 'hello'
    glassPanelMap.appendChild(newGlassPanel)

};