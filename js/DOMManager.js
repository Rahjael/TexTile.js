
class DOMManager {
  /*
    This class manipulates all of the DOM and should be the only
    object allowed to do so.
    It fills default values if needed, it fetches the input data to pass
    to the sorter, draws any necessary additional input fields and
    draws the final output after the sorter has calculated it.
  */

  constructor() {

    // Default values config
    this.hHemDefaultValue = 8;
    this.vHemSupDefaultValue = 5;
    this.vHemInfDefaultValue = 11;

    // Id and class hooks configuration
    this.divInputFrameId = "#input-frame";

    this.divSourcePieceDimensionsId = "#source-piece-dimensions";
    this.sourcePieceWidthId = "#source-piece-width";
    this.sourcePieceHeightId = "#source-piece-height";

    this.divItemsId = "#input-items-container";
    this.divAddItemsId = "#input-add-items-container";
    this.howManyItemsToAddId = "#items-to-add";
    this.btnAddItemsId = "#btn-add-items";
    this.btnSubmitId = "#btn-submit";
    this.btnRandomizeId = "#btn-randomize";

    this.divItemsToPlaceFrameId = "#items-to-place";
    this.divItemsPreviewContainerId = "#items-preview-container";

    this.divOutputFrameId = "#output-frame";
    this.divOutputSortedShapesContainerId = "#output-sorted-shapes-container";
    this.divUnplacedItemsId = "#unplaced-items";

    this.inputItemsContainerNode = document.querySelector("#input-items-container");

    // Program state
    this.inputItemsCounter = 0;

    // Handling this is important when unit testing with Jest
    // otherwise DOM calls throw errors everywhere
    try {
      this.instantiateInputArea();
    } catch(e){
      console.log("Error instantiating input area: ", e.message);
    }
  }


  /*
    Helper functions
    
    These are all for internal use of this class
  */

  createNewItemInputField() {
    // returns a <div>

    // Create and setup all the nodes

    const itemId = this.inputItemsCounter;

    const newItem = document.createElement("div");
    newItem.setAttribute("id", "input-item-" + itemId);
    newItem.setAttribute("class", "input-item");

    const labelField = document.createElement("input");
    labelField.setAttribute("type", "text");
    labelField.setAttribute("class", "item-label");
    labelField.setAttribute("placeholder", "Riferimento");
    labelField.setAttribute("title", "Riferimento");

    const hHemField = document.createElement("input");
    hHemField.setAttribute("type", "text");
    hHemField.setAttribute("class", "item-h-hem");
    hHemField.setAttribute("value", this.hHemDefaultValue);
    hHemField.setAttribute("title", "Orlo orizzontale");

    const widthField = document.createElement("input");
    widthField.setAttribute("type", "text");
    widthField.setAttribute("class", "item-width");
    widthField.setAttribute("placeholder", "Larghezza");
    widthField.setAttribute("title", "Larghezza");
    
    const heightField = document.createElement("input");
    heightField.setAttribute("type", "text");
    heightField.setAttribute("class", "item-height");
    heightField.setAttribute("placeholder", "Altezza");
    heightField.setAttribute("title", "Altezza");

    const vHemSupField = document.createElement("input");
    vHemSupField.setAttribute("type", "text");
    vHemSupField.setAttribute("class", "item-v-hem-sup");
    vHemSupField.setAttribute("value", this.vHemSupDefaultValue);
    vHemSupField.setAttribute("title", "Orlo Superiore");

    const vHemInfField = document.createElement("input");
    vHemInfField.setAttribute("type", "text");
    vHemInfField.setAttribute("class", "item-v-hem-inf");
    vHemInfField.setAttribute("value", this.vHemInfDefaultValue);
    vHemInfField.setAttribute("title", "Orlo Inferiore");

    const switchButton = document.createElement("button");
    switchButton.setAttribute("onclick", "domManager.switchInput('#" + newItem.id +"')");
    switchButton.setAttribute("class", "btn-switch-dimensions");
    switchButton.setAttribute("type", "button");
    switchButton.innerHTML =  "&lt-&gt";
    switchButton.setAttribute("title", "Inverti dimensioni");
    // Prevent button from being selected with Tab
    switchButton.setAttribute("tabindex", "-1");

    const delButton = document.createElement("button");
    delButton.setAttribute("onclick", "domManager.delInputItem('#input-item-" + itemId + "')");
    delButton.setAttribute("class", "btn-delete");
    delButton.setAttribute("type", "button");
    delButton.setAttribute("title", "Elimina queste misure");
    delButton.innerText = "X";
    // Prevent button from being selected with Tab
    delButton.setAttribute("tabindex", "-1");

    const duplicateButton = document.createElement("button");
    duplicateButton.setAttribute("onclick", "domManager.duplicateInputItem('#input-item-" + itemId + "')");
    duplicateButton.setAttribute("class", "btn-duplicate");
    duplicateButton.setAttribute("type", "button");
    duplicateButton.setAttribute("title", "Duplica queste misure");
    duplicateButton.innerText = "Duplica";
    // Prevent button from being selected with Tab
    duplicateButton.setAttribute("tabindex", "-1");

    // Append all nodes
    newItem.append(labelField, widthField, switchButton, heightField, hHemField, vHemSupField, vHemInfField, duplicateButton);
    
    // Prevent delButton to be added if only 1 input field is present
    if(this.inputItemsCounter > 0) {
      newItem.append(delButton);
    }
    
    this.inputItemsCounter += 1;

    return newItem;
  }

  /* istanbul ignore next */
  getRandomRGBString() {
    return "rgb(" + 
    Math.floor(Math.random() * 256) + ", " 
    + Math.floor(Math.random() * 256) + ", " 
    + Math.floor(Math.random() * 256) + ")";
  }

  /* istanbul ignore next */
  instantiateInputArea() {
    this.appendNewInputFields();
    console.log("InputArea primed");
  }
  
  createRectangleShapeDiv(itemData, rectClass) {
    // Creates various kinds of rectangular divs for different purposes

    let newItem = document.createElement("div");
    
    // Specific attributes related to requested class
    if(rectClass === "input-shape") {
      newItem.setAttribute("id", "input-shape-id-" + itemData.id);
      newItem.style.background = itemData.color;
      newItem.innerHTML = itemData.label + "<br />"
      + itemData.id + "<br />" + itemData.width 
      + " x " + itemData.height;
    }
    else if(rectClass === "output-shape") {
      newItem.setAttribute("id", "output-shape-id-" + itemData.id);
      newItem.style.background = itemData.color;
      newItem.innerHTML = itemData.label + "<br />"
      + itemData.id + "<br />" + itemData.width 
      + " x " + itemData.height;
    }
    else if(rectClass === "source-piece") {
      newItem.setAttribute("id", "source-piece");
    }
    else {
      // Return empty object if no class argument is provided
      console.log("WARNING: createRectangleShapeDiv() called with invalid class selector. An empty object has been returned")
      return {};
    }

    // Common attributes
    newItem.setAttribute("class", rectClass);
    newItem.style.width = itemData.width + "px";
    newItem.style.height = itemData.height + "px";

    return newItem;
  }

  /*
    END Helper functions
  */




  /*
    Main API

    Functions that will be called on the DOMManager object from elsewhere
  */

  /* istanbul ignore next */
  appendNewInputFields(howMany = 1, isDuplicate = false, thisId = false) {
    if(howMany != 1) {
      howMany = Number(document.querySelector(this.howManyItemsToAddId).value);
    }
    [...Array(howMany)].forEach( i => {
      const newInputField = this.createNewItemInputField();

      if(isDuplicate) {
        let thisNode = document.querySelector(thisId);

        for(let i = 0; i < thisNode.children.length; i++) {
          newInputField.children[i].value = thisNode.children[i].value;
        }

        console.log("New node: ", newInputField)
        thisNode.parentNode.insertBefore(newInputField, thisNode.nextSibling);
      }
      else {
        this.inputItemsContainerNode.append(newInputField);
      }

    });
    
    this.reassignInputFieldsIds();
  }

  duplicateInputItem(selector) {
    this.appendNewInputFields(1, true, selector);
  }


  reassignInputFieldsIds() {
    // recalculate and reassign ids...
    // ...for input fields...
    let allInputLines = document.querySelectorAll(".input-item");
    allInputLines.forEach( (item, i) => {
      item.id = "input-item-" + i;
    });
    // ...for the delete buttons...
    let allDelButtons = document.querySelectorAll(".btn-delete");
    allDelButtons.forEach( (button, i) => {
      button.setAttribute("onclick", "domManager.delInputItem('#input-item-" + (i + 1) + "')");
    });
    // ... for switch dimensions buttons ...
    let allSwitchButtons = document.querySelectorAll(".btn-switch-dimensions");
    allSwitchButtons.forEach( (button, i) => {
      button.setAttribute("onclick", "domManager.switchInput('#input-item-" + i + "')");
    });
    // ... and for duplicate buttons
    let allDuplicateButtons = document.querySelectorAll(".btn-duplicate");
    allDuplicateButtons.forEach( (button, i) => {
      button.setAttribute("onclick", "domManager.duplicateInputItem('#input-item-" + i + "')");
      console.log(button.getAttribute("onclick"))
    });

    // update submit button total number
    document.querySelector(this.btnSubmitId).innerText = "Invia " + "(" + this.inputItemsCounter + ")";
  }

  /* istanbul ignore next */
  delInputItem(thisId) {
    // Deletes a line from the input area
    const itemToRemove = document.querySelector(thisId);
    itemToRemove.remove(itemToRemove);
    this.inputItemsCounter -= 1;

    this.reassignInputFieldsIds();    
  }

  /* istanbul ignore next */
  switchInput(id) {
    // Switches width and height fields for the items associated with the switch button
    let widthField = document.querySelector(id).querySelector(".item-width");
    let heightField = document.querySelector(id).querySelector(".item-height");

    let temp = widthField.value || "";
    widthField.value = heightField.value || "";
    heightField.value = temp;
  }

  /* istanbul ignore next */
  randomizeInput() {
    // This is just a helper feature to speed up testing
    const inputs = document.querySelectorAll(".input-item");
    let randomSize = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    inputs.forEach( item => {
      item.querySelector(".item-width").value = randomSize(10, 250);
      item.querySelector(".item-height").value = randomSize(10, 250);
    });
  }

  /* istanbul ignore next */
  fetchInputData() {
    // Gathers data from the page and returns an object

    let dataToReturn = {
      sourcePiece: {},
      pieces: []
    };
    
    dataToReturn.sourcePiece = {
      width: Number(document.querySelector(this.sourcePieceWidthId).value),
      height: Number(document.querySelector(this.sourcePieceHeightId).value)
    };
    
    const allData = Array.from(document.querySelectorAll(".input-item"));
    if(allData.length === 1) {
      return // function does nothing if less than 2 pieces are present
    }
    
    // Check for invalid data in input fields
    let errorsFound = false;
    allData.forEach( item => {
      let widthField = item.querySelector(".item-width");
      let heightField = item.querySelector(".item-height");
      let hHemField = item.querySelector(".item-h-hem");
      let vHemSupField = item.querySelector(".item-v-hem-sup");
      let vHemInfField = item.querySelector(".item-v-hem-inf");

      let fields = [widthField, heightField, hHemField, vHemInfField, vHemSupField];

      fields.forEach( field => {
        // Reset bgcolor from previous errors
        field.style.background = "white";
        
        // Check for valid data
        //console.log("Data validation: ", field);
        if(field.value === "" || Number.isNaN(Number(field.value))){
          errorsFound = true;
          field.style.background= "rgb(255, 61, 36)";
        }
      
      });
    });
      if(errorsFound) return null; // Stop fetching


    // Populate the array with info about the rectangles
    // The replace() part is to sanitize user input in case of decimals
    // TODO convert values to millimiters?
    dataToReturn.pieces = allData.map( (item, id) => {
      let label = item.querySelector(".item-label").value;
      let width = Number(item.querySelector(".item-width").value.replace(",", "."));
      let height = Number(item.querySelector(".item-height").value.replace(",", "."));
      let hHem = Number(item.querySelector(".item-h-hem").value.replace(",", "."));
      let vHemSup = Number(item.querySelector(".item-h-hem").value.replace(",", "."));
      let vHemInf = Number(item.querySelector(".item-h-hem").value.replace(",", "."));

      return {
        id: id,
        label: label,
        width: width + hHem,
        height: height + vHemSup + vHemInf,
        area: width * height,
        x: 0,
        y: 0,
        positioned: false,
        color: this.getRandomRGBString()
      }
    });

    return dataToReturn;
  }

  /* istanbul ignore next */
  drawInputPieces(dataObject) {
    // Safeguard against accidental user submits before inputting data
    if(dataObject === undefined) return;

    // Clean area from previous inputs
    document.querySelectorAll(".input-shape").forEach( el => el.remove());

    // Draw pieces
    dataObject.pieces.forEach( piece => {
      document.querySelector(this.divItemsPreviewContainerId)
        .append(this.createRectangleShapeDiv(piece, "input-shape"));
    });
  }

  /* istanbul ignore next */
  submitButtonActions() {
    let dataObject = this.fetchInputData();

    if(dataObject == null) {
      console.log("WARNING: dataObject is null. An error occured during data fetching");
      return;
    }

    // have sorter object modify dataObject with x and y attributes for each shape
    const sorter = new Sorter(dataObject.sourcePiece, dataObject.pieces);
    // TODO implement a selector for choosing an algorithm
    dataObject = sorter.shortestHeightSorterWithGrid();

    this.drawInputPieces(dataObject);
    this.drawOutput(dataObject);
  }

  /* istanbul ignore next */
  drawOutput(dataObject) {

    // Clean output area if present
    let mainArea = document.querySelector("#source-piece");
    let unplacedArea = document.querySelector("#unplaced-area");
    if(mainArea) {
      mainArea.remove();
    }
    if(unplacedArea) {
      unplacedArea.remove();
    }

    mainArea = this.createRectangleShapeDiv(dataObject.sourcePiece, "source-piece");

    const divs = dataObject.pieces.map( piece => {
      let newDiv = this.createRectangleShapeDiv(piece, "output-shape");
      newDiv.style.left = piece.x +"px";
      newDiv.style.top = piece.y + "px";
      //console.log("newDiv for output created: ", newDiv);
      return newDiv;
    });

    // Setup and draw main area
    mainArea.setAttribute("id", "source-piece");
    divs.forEach( div => mainArea.append(div));


    document.querySelector(this.divOutputSortedShapesContainerId).append(mainArea);


    // TODO add unplaced area and other divs





    
  }







  /*
    END Main API
  */


}








// XXX This workaround is necessary to avoid showing uncaught errors in the console
// This export sintax is required by the Jest testing suites but is not accepted by 
// current browsers
try {
  module.exports = DOMManager;
}
catch(e) {
  /* istanbul ignore next */
  console.log("DOMManager module export skipped");
}


console.log("end of DOMManager.js");