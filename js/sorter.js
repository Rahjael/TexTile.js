class Sorter {

  constructor(mainArea = {}, pieces = []) {
    this.mainArea = mainArea;
    this.pieces = pieces;
  }  

  /* istanbul ignore next */
  setMainArea(object) {
    this.mainArea = object;
  }

  /* istanbul ignore next */
  setPieces(object) {
    this.pieces = object;
  }

  /* istanbul ignore next */
  shortestHeightSorter() {

  }

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