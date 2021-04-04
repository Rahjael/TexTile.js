
# TexTile.js

## A 2d bin packing problem solver developed for a small textile and tapestry business.

Given a set of N rectangular shapes of any sizes, it helps find the best arrangement to fit them in the most optimal configuration, reducing the amount of wasted fabric and saving taylors some time and a few headaches.


Live testing (App is currently in Italian only, sorry): 

:warning::warning::warning:Known issues:warning::warning::warning: :
The program has been tested with both Firefox and Chrome. I like the former better, but apparently there is a bug in how Firefox converts html to pdf, and this messes up the printing function when the output cannot fit in one page. Chrome seems to work perfectly instead.

https://rahjael.github.io/TexTile.js/



**State of things:**

- *GUI:* 
  - [x] uses HTML/CSS to be able to simply input data and get a graphical result for a suggested configuration. 

  - [x] ability to duplicate a line (for multiple pieces with same dimensions)
  
  - [x] extend data validation to all numerical fields

  - [x] ~~Dropdown menu~~ Radio buttons for different kind of tasks (fabric, PVC, etc...)

  - [x] ability to export output as pdf to save it / print it

  - [x] ability to select different criteria for sorting pieces

  - [x] show animation to let user know calculations are currently in progress

  - [ ] (for a later time) ability to import/export configurations so user doesn't have to type it in every time. (this is not really needed and it may take a while to implement, marked as optional)

  - [ ] (for a later time) implement the ability for the user to manually change shapes' arrangement and suggest a solution to the developer. Gathered data will be used to improve the sorting algorithm. This was implemented and working in the prototype, but I'm keeping it disabled in the current refactoring, because it is still buggy and not really helpful at the moment.


- *Algorithms/Internal stuff:*
  - [x] Shortest length with grid:
    this is a greedy algorithm that uses a grid to keep track of where the pieces are. It is not 100% safe but it works fine most of the time. It arranges the pieces prioritising the least amount of linear fabric to buy.
  
  - [x] Shortest length with grid (deeper scan):
    this is a slightly improved version in terms of precision, trading off some speed. With very big areas it can get a bit slower than the basic version but the time increment is negligeable for common use, while the result is consistently better.

  - [x] ~~radio buttons~~ dropdown selector for different algorithms

  - [x] dropdown selector for different sorting criteria

  - [x] added break for simulating multiple containers

  - [x] have sorter suggest an optimal solution based on many background tests

  - [ ] implement an algorithm with a different criterion, prioritising the biggest amount of available squared area after the pieces have been arranged. I have a vague idea of how to do this, but it may take a while.

  - [ ] (for a later time) try to implement an algorithm that doesn't need an underlying grid and manages to arrange the pieces only using vertices coordinates and compute everything using only linear algebra. I am not ready to try this, but I will in the future.





