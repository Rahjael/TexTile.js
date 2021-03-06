
class DOMManager {
  /*
    This class manipulates all of the DOM and should be the only
    object allowed to do so.
    It fills default values if needed, it fetches the input data to pass
    to the sorter, draws any necessary additional input fields and
    draws the final output after the sorter has calculated it.
  */

  constructor() {

    this.misure = [
      {
        rif: "Filiale",
        width: 150,
        height: 140,
        num: 1
      },
      {
        rif: "Corridoio Attesa cantiere",
        width: 115,
        height: 335,
        num: 1
      },
      {
        rif: "Modigliani",
        width: 114,
        height: 335,
        num: 1
      },
      {
        rif: "Reception Cant 1° finestra",
        width: 112,
        height: 335,
        num: 1
      },
      {
        rif: "Catalano",
        width: 107,
        height: 330,
        num: 1
      },
      {
        rif: "Monza",
        width: 107,
        height: 335,
        num: 1
      },
      {
        rif: "Ghelfi",
        width: 107,
        height: 105,
        num: 1
      },
      {
        rif: "Fink",
        width: 107,
        height: 105,
        num: 1
      },
      {
        rif: "Reception Cant 3° finestra",
        width: 107,
        height: 330,
        num: 1
      },
      {
        rif: "Corridoio 1A Bagno",
        width: 104,
        height: 325,
        num: 1
      },
      {
        rif: "Julita",
        width: 62,
        height: 150,
        num: 2
      },
      {
        rif: "Guelfi",
        width: 50,
        height: 260,
        num: 6
      },
      {
        rif: "Lambri",
        width: 50,
        height: 260,
        num: 2
      },
      {
        rif: "Fink",
        width: 50,
        height: 260,
        num: 2
      },
      {
        rif: "Gordini",
        width: 50,
        height: 260,
        num: 4
      },
      {
        rif: "Filiale",
        width: 48,
        height: 230,
        num: 4
      },
      {
        rif: "Michelangelo",
        width: 48,
        height: 260,
        num: 2
      },
      {
        rif: "Benzi",
        width: 48,
        height: 260,
        num: 2
      },
      {
        rif: "Corridoio 1A",
        width: 48,
        height: 255,
        num: 2
      },
      {
        rif: "Cezanne",
        width: 47,
        height: 260,
        num: 2
      },
      {
        rif: "Corridoio lato retro scala",
        width: 47,
        height: 260,
        num: 2
      },
      {
        rif: "Reception corridoio cant",
        width: 47,
        height: 260,
        num: 2
      },
      {
        rif: "Viganò",
        width: 46,
        height: 290,
        num: 3
      },
      {
        rif: "Petrosino",
        width: 46,
        height: 280,
        num: 3
      },
      {
        rif: "Caravaggio",
        width: 46,
        height: 260,
        num: 2
      },
      {
        rif: "Millo",
        width: 46,
        height: 260,
        num: 2
      },
      {
        rif: "Fagiani",
        width: 46,
        height: 260,
        num: 4
      },
      {
        rif: "Giotto",
        width: 46,
        height: 260,
        num: 2
      },
      {
        rif: "Botticelli",
        width: 46,
        height: 260,
        num: 2
      },
      {
        rif: "Reception corridoio",
        width: 46,
        height: 260,
        num: 2
      },
      {
        rif: "Catalano",
        width: 45,
        height: 260,
        num: 2
      },
      {
        rif: "Monza",
        width: 45,
        height: 260,
        num: 2
      },
      {
        rif: "Ufficio RM",
        width: 44,
        height: 285,
        num: 6
      },
      {
        rif: "Prestia",
        width: 44,
        height: 220,
        num: 2
      },
      {
        rif: "Ronchi",
        width: 44,
        height: 220,
        num: 2
      },
      {
        rif: "Galante",
        width: 44,
        height: 220,
        num: 2
      },
      {
        rif: "Cavalli",
        width: 44,
        height: 275,
        num: 2
      },
      {
        rif: "Eleonora",
        width: 44,
        height: 275,
        num: 6
      },
      {
        rif: "Aiello",
        width: 44,
        height: 280,
        num: 2
      },
      {
        rif: "Corridoio 1",
        width: 44,
        height: 220,
        num: 2
      },
      {
        rif: "Filiale",
        width: 43,
        height: 250,
        num: 2
      },
      {
        rif: "Pre sala formazione",
        width: 43,
        height: 250,
        num: 2
      },
      {
        rif: "Pre sala formazione",
        width: 43,
        height: 190,
        num: 2
      },
      {
        rif: "Disimpegno sala formazione",
        width: 43,
        height: 240,
        num: 2
      },
      {
        rif: "Sala formazione",
        width: 43,
        height: 240,
        num: 4
      },
      {
        rif: "Sala formazione",
        width: 43,
        height: 195,
        num: 4
      },
      {
        rif: "Julita",
        width: 43,
        height: 70,
        num: 1
      },
      {
        rif: "Renoir",
        width: 43,
        height: 230,
        num: 2
      },
      {
        rif: "Levati",
        width: 43,
        height: 200,
        num: 4
      },
      {
        rif: "Grassi",
        width: 43,
        height: 200,
        num: 2
      },
      {
        rif: "Picasso",
        width: 42,
        height: 230,
        num: 2
      },
      {
        rif: "Sonzini",
        width: 42,
        height: 160,
        num: 2
      },
      {
        rif: "Corridoio 3° piano",
        width: 42,
        height: 130,
        num: 2
      },
      {
        rif: "Corridoio 3° piano",
        width: 42,
        height: 225,
        num: 2
      },
      {
        rif: "Corridoio scala piccola",
        width: 42,
        height: 260,
        num: 2
      },
      {
        rif: "Barbieri",
        width: 42,
        height: 225,
        num: 4
      },
      {
        rif: "Cobelli",
        width: 42,
        height: 130,
        num: 2
      },
      {
        rif: "Servizi",
        width: 41,
        height: 290,
        num: 2
      },
      {
        rif: "McFarlaine",
        width: 41,
        height: 260,
        num: 4
      },
      {
        rif: "Sonzini",
        width: 41,
        height: 260,
        num: 2
      },
      {
        rif: "Monet",
        width: 41,
        height: 140,
        num: 2
      },
      {
        rif: "Monet",
        width: 41,
        height: 260,
        num: 2
      },
      {
        rif: "Assistenti",
        width: 40,
        height: 160,
        num: 2
      },
      {
        rif: "Bagno",
        width: 40,
        height: 120,
        num: 2
      },
      {
        rif: "Corridoio 2",
        width: 40,
        height: 210,
        num: 2
      },
      {
        rif: "Sganga",
        width: 37,
        height: 225,
        num: 4
      },
      {
        rif: "Pelosi",
        width: 21,
        height: 240,
        num: 6
      },
    
    
    ]
















    // Default values config
    this.hHemDefaultValue = 0;
    this.vHemSupDefaultValue = 0;
    this.vHemInfDefaultValue = 0;

    this.trimmingOffset = 2;

    this.drawMsTimer = 25;
    this.allAlgoMsMultiplier = 50;

    // Id and class hooks configuration
    this.divInputFrameId = "#input-frame";

    this.divSourcePieceDimensionsId = "#source-piece-dimensions";
    this.sourcePieceWidthId = "#source-piece-width";
    this.sourcePieceHeightId = "#source-piece-height";
    this.cutEvery = "#source-piece-cut-every";

    this.divItemsId = "#input-items-container";
    this.divAddItemsId = "#input-add-items-container";
    this.howManyItemsToAddId = "#items-to-add";
    this.divAlgorithmSelectiondId = "#algorithm-config-container";
    this.btnAddItemsId = "#btn-add-items";
    this.btnSubmitId = "#btn-submit";
    this.btnRandomizeId = "#btn-randomize";

    this.divItemsToPlaceFrameId = "#items-to-place";
    this.divItemsPreviewContainerId = "#items-preview-container";

    this.divOutputFrameId = "#output-frame";
    this.divOutputInfoId = "#output-info";
    this.divOutputSortedShapesContainerId = "#output-sorted-shapes-container";
    this.divUnplacedItemsId = "#output-unplaced-items-container";

    this.divPrintingFrameId = "#printing-frame";

    this.inputItemsContainerNode = document.querySelector("#input-items-container");

    // Program state
    this.inputItemsCounter = 0;
    this.materialType = 'fabric'; // TODO this should be made more consistent with the rest of the data fetching
    this.outputGenerated = false;

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

    const hHemField = document.createElement("input");
    hHemField.setAttribute("type", "text");
    hHemField.setAttribute("class", "item-h-hem");
    hHemField.setAttribute("value", this.hHemDefaultValue);
    hHemField.setAttribute("title", "Orlo laterale");

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

    // Add listeners to radio buttons
    // let radioButtons = document.querySelectorAll('input[type=radio]');
    // radioButtons.forEach( btn => {
    //   btn.addEventListener('change', () => this.toggleInputType(btn.value));
    // });

    this.addListenersToInputFields();

    // Set default hem values
    this.hHemDefaultValue = document.querySelector("#default-h-hem").value;
    this.vHemSupDefaultValue = document.querySelector("#default-h-hem").value;
    this.vHemInfDefaultValue = document.querySelector("#default-h-hem").value;

    //this.extractMilan();

    console.log("InputArea primed");
  }



  extractMilan() {
    // TODO temporary hardcoded milan measures, delete after work is done
    console.log(this.misure);

    let misureString = this.misure.reduce( (acc, obj) => {
      let str = "";

      [...Array(obj.num)].forEach( n => {
        str += obj.rif + "-" + String(obj.width) + "-" + String(obj.height) + "-0-0-0;";

      });
      
      return acc+str;

    }, "");

    console.log(misureString);

    document.querySelector("#imp-exp-textarea").value = misureString;
  }



  addListenersToInputFields() {
    let inputs = document.querySelectorAll("input");
    inputs.forEach( input => {
      input.addEventListener( 'change', () => this.updateImpExpArea());
    });
  }

  /* istanbul ignore next */
  toggleInputType(type) {
    // Changes default values for hems in the input fields

    // Currently not used
    // TODO this is probably not ideal, but it was the simplest way to implement this feature
    // without messing too much with other parts of the code. I will probably make it 
    // nicer in the future, incorporating it into fetchData()

    this.materialType = type;

    let hemFields = Array.from(document.querySelectorAll(".item-h-hem"))
      .concat(Array.from(document.querySelectorAll(".item-v-hem-sup")))
      .concat(Array.from(document.querySelectorAll(".item-v-hem-inf")));

    hemFields.forEach( field => {
      if(type === 'pvc') {
        field.value = 0;
      }
      else if(type === 'fabric') {
        switch(field.getAttribute("class")) {
          case 'item-h-hem': 
            field.value = this.hHemDefaultValue;
            break;
          case 'item-v-hem-sup':
            field.value = this.vHemSupDefaultValue;
            break;
          case 'item-v-hem-inf':
            field.value = this.vHemInfDefaultValue;
            break;
          default:
            console.log("toggleInputType: error assigning values to fields");
        }
      }
    });
  }

  setAllHems() {
    // Update this. default hem values from page
    this.hHemDefaultValue = Number(document.querySelector("#default-h-hem").value);
    this.vHemSupDefaultValue = Number(document.querySelector("#default-sup-hem").value);
    this.vHemInfDefaultValue = Number(document.querySelector("#default-inf-hem").value);

    console.log(this.hHemDefaultValue, this.vHemSupDefaultValue, this.vHemInfDefaultValue)

    let hemFields = Array.from(document.querySelectorAll(".item-h-hem"))
    .concat(Array.from(document.querySelectorAll(".item-v-hem-sup")))
    .concat(Array.from(document.querySelectorAll(".item-v-hem-inf")));

    hemFields.forEach( field => {
      switch(field.getAttribute("class")) {
        case 'item-h-hem': 
          field.value = this.hHemDefaultValue;
          break;
        case 'item-v-hem-sup':
          field.value = this.vHemSupDefaultValue;
          break;
        case 'item-v-hem-inf':
          field.value = this.vHemInfDefaultValue;
          break;
        default:
          console.log("toggleInputType: error assigning values to fields");
      }
    });
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
    if(!isDuplicate) {
      howMany = Number(document.querySelector(this.howManyItemsToAddId).value);
    }
    [...Array(howMany)].forEach( i => {
      const newInputField = this.createNewItemInputField();

      if(isDuplicate) {
        let thisNode = document.querySelector(thisId);
        for(let i = 0; i < thisNode.children.length; i++) {
          newInputField.children[i].value = thisNode.children[i].value;
        }
        thisNode.parentNode.insertBefore(newInputField, thisNode.nextSibling);
      }
      else {
        this.inputItemsContainerNode.append(newInputField);
      }
    });
    this.reassignInputFieldsIds();
    this.addListenersToInputFields();
  }

  /* istanbul ignore next */
  duplicateInputItem(selector) {
    this.appendNewInputFields(1, true, selector);
  }
  
  /* istanbul ignore next */
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
    });

    // update submit button total number
    document.querySelector(this.btnSubmitId).innerHTML = "Calcola posizione pezzi " + "(" + this.inputItemsCounter + ") <br /> (Forza impostazioni)";
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
  switchAll() {
    let inputs = document.querySelectorAll(".input-item");
    inputs.forEach( item => this.switchInput("#" + item.getAttribute("id")));
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
      height: Number(document.querySelector(this.sourcePieceHeightId).value),
      cutEvery: Number(document.querySelector(this.cutEvery).value)
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
        if(field.value === "" || Number.isNaN(Number(field.value))){
          errorsFound = true;
          field.style.background= "rgb(255, 61, 36)";
        }      
      });
    });
    if(errorsFound) return null; // Stop fetching
    

    let rotatePieces = document.querySelector("#rotated-checkbox").checked;
    console.log("rotatePieces: ", rotatePieces);
    
    // Populate the array with info about the rectangles
    // The replace() part is to sanitize user input in case of decimals
    // TODO convert values to millimiters?
    dataToReturn.pieces = allData.map( (item, id) => {
      let label = item.querySelector(".item-label").value;
      let hHem = Number(item.querySelector(".item-h-hem").value.replace(",", "."));
      let vHemSup = Number(item.querySelector(".item-h-hem").value.replace(",", "."));
      let vHemInf = Number(item.querySelector(".item-h-hem").value.replace(",", "."));

      let width = hHem + Number(item.querySelector(".item-width").value.replace(",", "."));
      let height = vHemSup + vHemInf + Number(item.querySelector(".item-height").value.replace(",", "."));

      if(rotatePieces) {
        [width, height] = [height, width];
      }

      return {
        id: id,
        label: label,
        width: width,
        height: height,
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
  submitButtonActions(mode) { // TODO Mode can be either "manual" or "auto". "Auto" is not yet implemented
    let dataObject = this.fetchInputData(); // Get data from input fields    
    
    if(dataObject == null) {
      console.log("WARNING: dataObject is null. An error occured during data fetching");
      return;
    }
    
    // Fetch algorithm config
    let algoSelector = document.querySelector("#algorithm-selection");
    let algoChoice = algoSelector.options[algoSelector.selectedIndex].value;
    let prioritySelector = document.querySelector("#sorting-priority");
    let priorityChoice = prioritySelector.options[prioritySelector.selectedIndex].value;

    // canRotate is currently not implemented. It will allow for independent rotation of single pieces
    let canRotate = this.materialType == 'fabric' ? false : true;

    const sorter = new Sorter(dataObject.sourcePiece, dataObject.pieces, canRotate);

    // TODO remember to clean up this shit after having implemented the automatic finder

    if(mode === 'manual') {
      dataObject = sorter.getSortedData(algoChoice, priorityChoice);
    }
    else if(mode === 'auto') {
      dataObject = sorter.suggestBest();
    }

    let maxLength = dataObject.maxLength;
    
    // Check for empty data
    if(dataObject == null) {
      console.log("DOMManager error: sorter returned a null object");
      return;
    }

    // Trim unnecessary space for better output rendering
    // TODO fix this offset for better rendering?
    dataObject.sourcePiece.height = maxLength + this.trimmingOffset;

    console.log("Data received, drawing objects");

    this.drawInfo(maxLength);
    this.drawInputPieces(dataObject);
    this.drawOutput(dataObject);
  }


  /* istanbul ignore next */
  suggestBestSolution() {
    let inputDataObject = this.fetchInputData(); // Get data from input fields

    // Temp object for rotated shapes
    let rotatedDataObject = JSON.parse(JSON.stringify(inputDataObject));
    rotatedDataObject.pieces = inputDataObject.pieces.map( piece => {
      let newPiece = JSON.parse(JSON.stringify(piece));
      newPiece.width = piece.height;
      newPiece.height = piece.width;
      return newPiece;
    })

    //console.log("Original data: ", inputDataObject);
    //console.log("Rotated data: ", rotatedDataObject);
    
    if(inputDataObject == null) {
      console.log("WARNING: dataObject is null. An error occured during data fetching");
      return;
    }
    
    const counter = {
      algoChoices: Array.from(new Sorter().algoChoices),
      sortingCriteria: Array.from(new Sorter().sortingCriteria)
    }

    let tempObject = {};
    let bestObject = {};
    let minLength = null;
    let bestConfig = {};

    let sleep = (time) => {
      return new Promise( resolve => setTimeout(resolve, time));
    }

    let runAllConfigs = async (data) => {
      for(let algoChoice of counter.algoChoices) {
        for(let criterion of counter.sortingCriteria) {

          await new Promise( resolve => setTimeout( resolve, data.pieces.length * this.allAlgoMsMultiplier));
          
          console.log("Testing ", algoChoice, criterion);
          const currentSorter = new Sorter(data.sourcePiece, data.pieces, false);
          tempObject = currentSorter.getSortedData(algoChoice, criterion);

          this.drawInfo(tempObject.maxLength);
          this.drawOutput(tempObject);
          
          if(minLength === null || minLength > tempObject.maxLength) {
            console.log("Better solution found: ", tempObject);
            bestObject = JSON.parse(JSON.stringify(tempObject)); // Deep copy of object
            minLength = tempObject.maxLength;
            bestConfig.algorithm = algoChoice;
            bestConfig.criterion = criterion;              
          }          
          console.log("Current temp: ", tempObject.maxLength, "Current best: ", bestObject.maxLength)
        }
      }
    }

    sleep(10).then( () => console.log("Testing non-rotated data"))
    .then( () => runAllConfigs(inputDataObject))
    .then( () => console.log("Testing rotated data"))
    .then( () => runAllConfigs(rotatedDataObject))
    .finally( () => {

      // Check for empty data
      if(bestObject == null) {
        console.log("DOMManager error: sorter returned a null object");
        return;
      }

      // Trim unnecessary space for better output rendering
      // TODO fix this offset?
      bestObject.sourcePiece.height = bestObject.maxLength + this.trimmingOffset;      
      this.drawInfo(bestObject.maxLength);
      this.drawInputPieces(bestObject);
      this.drawOutput(bestObject);
      console.log("Best solution found with ", bestConfig.algorithm, bestConfig.criterion, " | maxLength: ", bestObject.maxLength);
    });    
  }

  /* istanbul ignore next */
  drawInfo(maxLength) {
    let infoDiv = document.querySelector(this.divOutputInfoId);
    infoDiv.innerText = 'Lunghezza da ordinare: ' + maxLength;
  }

  /* istanbul ignore next */
  drawOutput(dataObject) {
    // Asyn version, currently in use

    // Clean output area if present
    let mainArea = document.querySelector("#source-piece");
    let unplacedArea = document.querySelector("#unplaced-items");
    if(mainArea) {
      mainArea.remove();
    }
    if(unplacedArea) {
      unplacedArea.remove();
    }

    mainArea = this.createRectangleShapeDiv(dataObject.sourcePiece, "source-piece");

    // Create div arrays for placed and unplaced pieces
    const divsToPlace = [];
    const divsUnplaced = [];
    
    dataObject.pieces.forEach( piece => {
      let newDiv = this.createRectangleShapeDiv(piece, "output-shape");
      newDiv.style.left = piece.x + "px";
      newDiv.style.top = piece.y + "px";

      if(piece.positioned) {
        divsToPlace.push(newDiv);
      }
      else {
        newDiv.style.position = 'static';
        divsUnplaced.push(newDiv);
      }
    });

    let asyncAppendAll = async (shapes, hook) => {
      for(let shape of shapes) {
        await new Promise( resolve => setTimeout(resolve, this.drawMsTimer));        
        hook.append(shape);
      }      
    }

    // Setup and draw main area
    mainArea.setAttribute("id", "source-piece");
    document.querySelector(this.divOutputSortedShapesContainerId).append(mainArea);
    
    asyncAppendAll(divsToPlace, mainArea)
    .then( () => {
      this.outputGenerated = true;

      // add unplaced area and other divs
      let unplacedDiv = document.createElement("div");
      unplacedDiv.setAttribute("id", "unplaced-items");

      document.querySelector(this.divUnplacedItemsId).append(unplacedDiv);
 
      asyncAppendAll(divsUnplaced, unplacedDiv)
    });    
  }











  /* istanbul ignore next */
  drawOutputOldVersion(dataObject) {
    // Old sync version, currently not used
    // TODO remove this function?

    // Clean output area if present
    let mainArea = document.querySelector("#source-piece");
    let unplacedArea = document.querySelector("#unplaced-items");
    if(mainArea) {
      mainArea.remove();
    }
    if(unplacedArea) {
      unplacedArea.remove();
    }

    mainArea = this.createRectangleShapeDiv(dataObject.sourcePiece, "source-piece");

    // Create div arrays for placed and unplaced pieces
    const divsToPlace = [];
    const divsUnplaced = [];
    
    dataObject.pieces.forEach( piece => {
      let newDiv = this.createRectangleShapeDiv(piece, "output-shape");
      newDiv.style.left = piece.x + "px";
      newDiv.style.top = piece.y + "px";

      if(piece.positioned) {
        divsToPlace.push(newDiv);
      }
      else {
        newDiv.style.position = 'static';
        divsUnplaced.push(newDiv);
      }
    });

    // Setup and draw main area
    mainArea.setAttribute("id", "source-piece");
    divsToPlace.forEach( div => mainArea.append(div));

    document.querySelector(this.divOutputSortedShapesContainerId).append(mainArea);
    this.outputGenerated = true;

    // add unplaced area and other divs
    let unplacedDiv = document.createElement("div");
    unplacedDiv.setAttribute("id", "unplaced-items");

    divsUnplaced.forEach( div => unplacedDiv.append(div));
    document.querySelector(this.divUnplacedItemsId).append(unplacedDiv);
  }
  

  updateImpExpArea() {
    // Is fired when an input element is modified. Updates the area with
    // a string containing all values. It can be copied and re-imported later

    let inputItems = Array.from(document.querySelectorAll(".input-item"));
    let exportString = inputItems.map( inputField => Array.from(inputField.querySelectorAll("input")).map( field => field.value).join("-")).join(";");
    document.querySelector("#imp-exp-textarea").value = exportString;

  }

  importValues() {
    // Creates new fields with imported values from a pre-formatted string
    // Example:
    // "Camera-20-100-0-0-0;Bagno-127-188-0-0-0;Cucina-13-237-0-0-0;Stanza bambini-72-185-0-0-0"

    let inputValues = document.querySelector("#imp-exp-textarea").value.split(";").map( piece => piece.split("-"));

    // Remove all input fields
    let container = document.querySelector("#input-items-container");
    container.innerHTML = "";

    this.inputItemsCounter = 0;

    inputValues.forEach( valueArr => {
      const newInputField = this.createNewItemInputField();

      newInputField.querySelector(".item-label").value = valueArr[0];
      newInputField.querySelector(".item-width").value = Number(valueArr[1]);
      newInputField.querySelector(".item-height").value = Number(valueArr[2]);
      newInputField.querySelector(".item-h-hem").value = Number(valueArr[3]);
      newInputField.querySelector(".item-v-hem-sup").value = Number(valueArr[4]);
      newInputField.querySelector(".item-v-hem-inf").value = Number(valueArr[5]);

      container.append(newInputField);
    });


    this.reassignInputFieldsIds();
    this.addListenersToInputFields();

  }










  /* istanbul ignore next */
  exportForPrinting() {
    // TODO there's a bug in this function:
    // If number of pieces > 20/30, sometimes the pdf printing just stops at some point and doesn't
    // show the last 4/5 items. I still have to look into this

    if(!this.outputGenerated) {
      console.log("ERROR: no output to print");
      return;
    }

    // XXX CSS here is copypasted directly from the main .css file
    // I have found no other way to do this so far.
    // Be careful when editing main css file
    let headBoilerplate = `
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Tex-Tile.js printing frame</title>
        
      <style>
      #output-frame {
        border-left: solid black 1px;
        border-right: solid black 1px;
      
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        text-align: center;
        padding: 20px;
      }
      
      #output-sorted-shapes-container {
        padding: 10px;
      }
      
      #output-unplaced-items-container {
        position: relative;
      }
      
      .output-shape {
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: center;
        font-size: .7em;
        text-align: center;
        border: solid 1px black;
      }
      
      #source-piece {
        position: relative;
        /*
        background-image: linear-gradient(45deg, #ff002f 20.83%, #ffffff 20.83%, #ffffff 50%, #ff002f 50%, #ff002f 70.83%, #ffffff 70.83%, #ffffff 100%);
        background-size: 16.97px 16.97px;
        */
        background-color: rgb(255, 255, 255);
        border: solid 1px black;
      }
      </style>
      `;

    let outputHTML = document.querySelector(this.divOutputFrameId).cloneNode(true);
    
    //outputHTML.querySelector(this.divUnplacedItemsId).remove();

    let newWindow = window.open('', '', 'width=800,height=600');

    newWindow.document.head.innerHTML = headBoilerplate;
    newWindow.document.body.append(outputHTML);

    newWindow.print();

    // var doc = newWindow.document;
    // doc.open();
    // doc.write(HTMLoutput);
    // doc.close();
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