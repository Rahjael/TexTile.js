
# TexTile.js

A 2d bin packing problem solver developed for a small textile and tapestry business.

Given a set of N rectangular shapes of any sizes, it helps find the best arrangement to fit them in the most optimal configuration, reducing the amount of wasted fabric and saving taylors some time and a few headaches.


Live testing (App is currently in Italian only, sorry): 

<insert link>



Where I got so far:

- GUI: 
  uses HTML/CSS to be able to simply input data and get a graphical result for a suggested configuration.

- Algorithms:
  - shortest length with grid: 
    this is a greedy algorithm that uses a grid to keep track of where the pieces are. It is not 100% safe but it works fine most of the time. It arranges the pieces prioritising the least amount of linear fabric to buy.


Future plans:

- GUI:
  implement the ability for the user to manually change shapes' arrangement and suggest a solution to the developer. Gathered data will be used to improve the sorting algorithm.

- Algorithms:
  - implement an algorithm with a different criterion, prioritising the biggest amount of available squared area after the pieces have been arranged. I have a vague idea of how to do this, but I need more time.