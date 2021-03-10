class Sorter {

  constructor(mainArea = {}, pieces = []) {
    this.mainArea = mainArea;
    this.pieces = pieces;
  }

  /*
    MAIN APIs
  */

  setMainArea(object) {
    this.mainArea = object;
  }

  setPieces(object) {
    this.pieces = object;
  }

  shortestHeightSorterWithGrid() {
    // Version with array grid. Cells:
    // true: free space
    // anything else: occupied space
    // mainGrid[x][y] will be coordinates for pixel and position 
    // relative to top left corner:
    // x = margin left offset
    // y = margin top offset

    // Helper function
    const isEmptyObject = (obj) => {
      for(let i in obj) return false;
      return true;
    }

    // Check for data
    if(isEmptyObject(this.mainArea) || this.pieces.length === 0) {
      console.log("Sorter Error: missing values for area and pieces");
      return null;
    }

    // Create main grid, copy ordered pieces into new array
    const mainGrid = [...Array(this.mainArea.width)].map( () => [...Array(this.mainArea.height)].fill(true));
    const pieces = this.pieces.map( (piece) => piece ).sort( (obj1, obj2) => obj2.area - obj1.area );

    // Find the sweet spot for every rectangle and attach it
    pieces.forEach( rect => {
      
      // This flag breaks the search if a free spot is found
      let stopChecking = false;
      
      for(let mainY = 0; mainY < mainGrid[0].length; mainY++) {
        for(let mainX = 0; mainX < mainGrid.length; mainX++) {  
          if(this.rectFitsThisXY(mainGrid, mainX, mainY, rect, false)) {
            this.attachRectToArea(mainGrid, mainX, mainY, rect);
            stopChecking = true;
            break;
          }
          else {
            if(mainGrid[mainX][mainY] != true) {
              mainX = mainX + mainGrid[mainX][mainY].width-1;
            }
            else {
              break;
            }
          }
        }
        if(stopChecking) break;
      }
    });

    const objectToReturn = {
      sourcePiece: this.mainArea,
      pieces: pieces
    }

    console.log(objectToReturn);

    return objectToReturn;

  }


  /*
    END MAIN APIs
  */
 

  /*
    INTERNAL HELPER FUNCTIONS
  */
  
  attachRectToArea(gridArray, x, y, rect) {
    // Sets rect coordinates and fills grid cells with references to this rect
    // XXX Assumes shape can fit at provided coordinates

    rect.x = x;
    rect.y = y;
    let tempX = x;
    let tempY = y;
    for(let xLimit = tempX + rect.width; tempX < xLimit; tempX++) {
      tempY = y;
      for(let yLimit = tempY + rect.height; tempY < yLimit; tempY++) {
        gridArray[tempX][tempY] = rect; // reference to object
      }
    }    
    rect.positioned = true;
    //console.log("attached", rect);
  }
  
  /* istanbul ignore next */
  rectFitsThisXY(gridArray, x, y, rect, isUser) { // Needs a grid
    // The area is scanned left to right and top to bottom and it assumes
    // the current rectangle is smaller than the previously placed one.
    
    // This assumption is not valid if the current rectangle is being
    // moved by the user. This is the reason why I added the boolean flag isUser,
    // which determines if further checks are needed.
    
    // TODO IMPORTANT: get rid of this assumption and make the code more generally viable

    // If cell is not free or negative coords, exit immediately
    if( x < 0 || y < 0) {
      //console.log("x or y < 0");
      return false;
    }
    if(gridArray[x][y] != true) {
      //console.log("top left occupied");
      return false;
    }
    // Check for area constraints
    if(x + rect.width > gridArray.length) {
      //console.log("x not large enough");
      return false;
    }
    if(y + rect.height > gridArray[0].length) {
      //console.log("y not large enough");
      return false;
    }

    // Scan rightwards and downwards for occupied cells
    let xLimit = x + rect.width; // XXX These are used later on as well, do not remove!!!
    let yLimit = y + rect.height;
    for(let i = x; i < xLimit; i++) {
      if(gridArray[i][y] != true) {
        //console.log("space occupied in x-direction");
        return false;
      }
    }
    for(let i = y; i < yLimit; i++) {
      if(gridArray[x][i] != true) {
        //console.log("space occupied in y-direction");
        return false;
      }
    }
    
    /*
    // XXX pieces repositioning by user has been disabled at the moment
    // It worked in the prototype but a better implementation is needed


    if(isUser) {
      // This subroutine is run only if the block is being positioned by the user.

      // Determine vertices of the current rectangle (the one being moved)
      let currentRect = {
        id: rect.id,
        topLeft: [x, y],
        bottomRight: [x + rect.width-1, y + rect.height-1]
      };

      // Check overlapping for every other rectangle
      let comparisonRect = {};
      for(let i = 0; i < this.inputRectangles.length; i++) {
        // Skip checking for itself or non-positioned rectangles
        if(this.inputRectangles[i].id === rect.id || this.inputRectangles[i].positioned === false) {
          continue;
        }
        comparisonRect = {
          id: this.inputRectangles[i].id,
          topLeft: [this.inputRectangles[i].x, this.inputRectangles[i].y],
          bottomRight: [this.inputRectangles[i].x + this.inputRectangles[i].width-1, 
            this.inputRectangles[i].y + this.inputRectangles[i].height-1]
        }
        if(
          // Comparison's... 
            (
              // ...topLeft vertice is horizontally included...
              (comparisonRect.topLeft[0] > currentRect.topLeft[0] )
              && (comparisonRect.topLeft[0] < currentRect.bottomRight[0])
            &&
              // ...topLeft vertice is vertically included...
              (comparisonRect.topLeft[1] > currentRect.topLeft[1] )
              && (comparisonRect.topLeft[1] < currentRect.bottomRight[1])
            )
          ||
            (
              // ...bottomRight vertice is horizontally included...
              (comparisonRect.bottomRight[0] > currentRect.topLeft[0] )
              && (comparisonRect.bottomRight[0] < currentRect.bottomRight[0])
            &&
              // ...bottomRight vertice is vertically included...
              (comparisonRect.bottomRight[1] > currentRect.topLeft[1] )
              && (comparisonRect.bottomRight[1] < currentRect.bottomRight[1])
            )
        )
        {
          console.log("overlap detected", currentRect, comparisonRect);
          return false;
        }
      }
      //console.log("fits user", currentRect, comparisonRect);
    }
    */

    //console.log("fits");
    return true;
  }

  /*
    END INTERNAL HELPER FUNCTIONS
  */


}



// XXX This workaround is necessary to avoid showing uncaught errors in the console
// This export sintax is required by the Jest testing suites but is not accepted by 
// current browsers
try {
  module.exports = Sorter;
}
catch(e) {
  /* istanbul ignore next */
  console.log("sorter module export skipped");
}

console.log("end of sorter.js");