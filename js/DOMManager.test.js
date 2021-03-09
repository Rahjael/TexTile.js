
const DOMManager = require('./DOMManager.js');

const instance = new DOMManager();
let div1 = instance.createNewItemInputField();
let div2 = instance.createNewItemInputField();
let div3 = instance.createNewItemInputField();

test('Creation of 1 item', () => {
  expect(div1.id).toBe('input-item-0');
})

test('Expected number of div children when only one item', () => {
  expect(div1.children.length).toBe(7);
})

test('Creation of 2 items', () => {
  expect(div2.id).toBe('input-item-1');
})

test('Creation of 3 items', () => {
  expect(div3.id).toBe('input-item-2');
})

test('InputItemsCounter works as intended', () => {
  expect(instance.inputItemsCounter).toBe(3);
})

test('Expected number of div children when more than one item', () => {
  expect(div3.children.length).toBe(8);
})

const instance2 = new DOMManager();
const randomNum = Math.floor(Math.random() * 2000);
test('Creation of 0 < n < 2000 (' + randomNum + ') items', () => {
  [...Array(randomNum)].forEach( item => instance2.createNewItemInputField());
  expect(instance2.inputItemsCounter).toBe(randomNum);
})

test('Testing new rectangle shape creation (input preview)', () => {
  const data = {
    width: 50,
    height: 50,
    color: "rgb(50, 50, 50)",
    label: "test label",
    id: 1,
  }
  const newRectangle = instance.createRectangleShapeDiv(data, "input-shape");
  expect(newRectangle.style.width).toBe("50px");
  expect(newRectangle.style.height).toBe("50px");
  expect(newRectangle.getAttribute("class")).toBe("input-shape");
  expect(newRectangle.style.background).toBe("rgb(50, 50, 50)");
  expect(newRectangle.getAttribute("id")).toBe("input-shape-id-1");
})

test('Testing new rectangle shape creation (main area)', () => {
  const data = {
    width: 340,
    height: 3000,
  }
  const newRectangle = instance.createRectangleShapeDiv(data, "source-piece");
  expect(newRectangle.style.width).toBe("340px");
  expect(newRectangle.style.height).toBe("3000px");
  expect(newRectangle.getAttribute("class")).toBe("source-piece");
  expect(newRectangle.getAttribute("id")).toBe("source-piece");
})

test('Testing new rectangle shape creation (output shapes)', () => {
  const data = {
    width: 50,
    height: 50,
    color: "rgb(50, 50, 50)",
    label: "test label",
    id: 1,
  }
  const newRectangle = instance.createRectangleShapeDiv(data, "output-shape");
  expect(newRectangle.style.width).toBe("50px");
  expect(newRectangle.style.height).toBe("50px");
  expect(newRectangle.getAttribute("class")).toBe("output-shape");
  expect(newRectangle.style.background).toBe("rgb(50, 50, 50)");
  expect(newRectangle.getAttribute("id")).toBe("output-shape-id-1");
})

test('Testing new rectangle shape creation (if no class name is provided)', () => {
  const data = {
    width: 50,
    height: 50,
    color: "rgb(50, 50, 50)",
    label: "test label",
    id: 1,
  }
  const newRectangle = instance.createRectangleShapeDiv(data, "weird unexpected string");
  expect(newRectangle.id).toBe(undefined);
  expect(newRectangle.class).toBe(undefined);
  expect(newRectangle.width).toBe(undefined);
  expect(newRectangle.height).toBe(undefined);
})