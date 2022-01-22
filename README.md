# Developing a Minesweeper Game - Squid Game Version

## Project Overview
**Basic Requirements** 
- Built with HTML, CSS and JavaScript (jQuery is strongly optional)
- Use Javascript for DOM manipulation
- Hosted on Github pages
- Commits to Github frequently
- A README.md file with explanations of the technologies used, the approach taken, a link to your live site, installation instructions, unsolved problems, etc.
- Be displayed in the browser
- Have some kind of user interaction via mouseclick or keypress

## Tech & Tools Used
- Built with HTML, CSS and JavaScript (jQuery is strongly optional)
- Use Javascript for DOM manipulation
- Hosted on Github pages
- Commits to Github frequently
- A README.md file with explanations of the technologies used, the approach taken, a link to your live site, installation instructions, unsolved problems, etc.
- Be displayed in the browser
Have some kind of user interaction via mouseclick or keypress


## Description
This game was inspired after watching the nerve wrecking glass panel scene of squid game, where players had to traverse a series of glass panels to get to the other side, with a 50% chance of a panel breaking and falling to their demise TT.

I decided to fuse that idea with the traditional minesweeper grid. So instead of a minefield, my game board is a glass map suspended over a 5 storey fall. So players have the traverse the map by touching the least number of breakable panels.

## Approach Taken
Part 1:
Started the basic minesweeper game by creating the minesweeper grid as follows:
1. Created a grid by flex-wrapping the divs
2. Tagged the grids randomly as breakable and non-breakable
3. Created a for loop to count the number of breakable panels around each glass panel and add a total count of breakable panels to the glass.

Part 2:
4. Drew the background and the walking sprite man on photoshop
5. Created an animation that animates a walking man by using a function that shifts the div background
6. Created an array to calculate the coordinates of the grid and activates when the man steps on each grid to reveal either a broken panel or the number

Part 3:
7. Added number of lives and game end modal box when lives reach 0
8. Added facial expression image when person steps on glass.


## Link to Live Site
https://ivanleongwm.github.io/minesweeper/

## Installation Instructions

can clone this repository and view the html in a browser or can click the link above to view the site


## Unsolved Problems
1. Falling man: have yet to include the animation where the man falls down the building when he steps on a breakable panel.

