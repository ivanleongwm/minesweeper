for (let i=0; i < 400; i++) {
    const glassPanelMap = document.querySelector('.container');
    const newGlassPanel = document.createElement('div');
    newGlassPanel.id = i;
    newGlassPanel.classList.add('panel')
    glassPanelMap.appendChild(newGlassPanel)

};