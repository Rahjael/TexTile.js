
# TexTile.js

## A 2d bin packing problem solver developed for a small textile and tapestry business.

Given a set of N rectangular shapes of any sizes, it helps find the best arrangement to fit them in the most optimal configuration, reducing the amount of wasted fabric and saving taylors some time and a few headaches.


Live testing (App is currently in Italian only, sorry): 

:warning::warning::warning:The program has been tested only with Firefox:warning::warning::warning:
Temporary link (updated 13/03/2021): http://adrianotesting.000webhostapp.com/textilejs/




**State of things:**

- *GUI:* 
  - [x] uses HTML/CSS to be able to simply input data and get a graphical result for a suggested configuration.

  - [x] ability to duplicate a line (for multiple pieces with same dimensions)
  
  - [x] extend data validation to all numerical fields

  - [x] ~~Dropdown menu~~ Radio buttons for different kind of tasks (fabric, PVC, etc...)

  - [ ] ability to import/export configurations so user doesn't have to type it in every time.

  - [ ] (partially done) ability to export output as pdf to save it / print it.

  - [ ] (for a later time) implement the ability for the user to manually change shapes' arrangement and suggest a solution to the developer. Gathered data will be used to improve the sorting algorithm. This was implemented and working in the prototype, but I'm keeping it disabled in the current refactoring, because it is still buggy and not really helpful at the moment.


- *Algorithms/Internal stuff:*
  - [x] Shortest length with grid:
    this is a greedy algorithm that uses a grid to keep track of where the pieces are. It is not 100% safe but it works fine most of the time. It arranges the pieces prioritising the least amount of linear fabric to buy.

  - [ ] assign radio buttons to different algorithms

  - [ ] implement an algorithm with a different criterion, prioritising the biggest amount of available squared area after the pieces have been arranged. I have a vague idea of how to do this, but I need more time.

  - [ ] (for a later time) try to implement an algorithm that doesn't need an underlying grid and manages to arrange the pieces only using vertices coordinates. I have no idea how to do this, but I will try if I find the time.





