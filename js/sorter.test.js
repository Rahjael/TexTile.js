const Sorter = require('./sorter.js');


test('Sorter instantiation without arguments (mainArea)', () => {
  const sorter = new Sorter();
  expect(sorter.mainArea).toStrictEqual({});
})

test('Sorter instantiation without arguments (pieces)', () => {
  const sorter = new Sorter();
  expect(sorter.pieces).toStrictEqual([]);
})


let test_mainArea = {
  width: 300,
  height: 300
}

let test_pieces = [
  {
    id: 0,
    label: "item0",
    width: 125,
    height: 150,
    area: 125 * 150,
    x: 0,
    y: 0,
    positioned: false,
    color: "rbg(50, 50, 50)"
  },    
  {
    id: 1,
    label: "item1",
    width: 80,
    height: 135,
    area: 80 * 135,
    x: 0,
    y: 0,
    positioned: false,
    color: "rbg(50, 50, 50)"
  },
  {
    id: 2,
    label: "item2",
    width: 60,
    height: 170,
    area: 90 * 170,
    x: 0,
    y: 0,
    positioned: false,
    color: "rbg(50, 50, 50)"
  }
]

test('Sorter instantiation with arguments (mainArea, pieces)', () => {
  const sorter = new Sorter(test_mainArea, test_pieces);
  expect(Number.isInteger(sorter.mainArea.width)).toBe(true);
  expect(Number.isInteger(sorter.mainArea.height)).toBe(true);
  expect(sorter.pieces.length).toBe(3);
})

test('Sorter mainArea setter', () => {
  const sorter = new Sorter();
  sorter.setMainArea(test_mainArea);
  expect(Number.isInteger(sorter.mainArea.width)).toBe(true);
  expect(Number.isInteger(sorter.mainArea.height)).toBe(true);
})

test('Sorter pieces setter', () => {
  const sorter = new Sorter();
  sorter.setPieces(test_pieces);
  expect(sorter.pieces.length).toBe(3);
})

test('shortestHeightSorterWithGrid() called with empty data', () => {
  const sorter = new Sorter();
  let testValue = sorter.shortestHeightSorterWithGrid();
  expect(testValue).toBe(null);
})

test('shortestHeightSorterWithGrid() area returned', () => {
  const sorter = new Sorter(test_mainArea, test_pieces);
  let testValue = sorter.shortestHeightSorterWithGrid();
  expect(testValue.sourcePiece.width).toBe(300);
  expect(testValue.sourcePiece.height).toBe(300);
})

test('shortestHeightSorterWithGrid() pieces ordering', () => {
  const sorter = new Sorter(test_mainArea, test_pieces);
  let testValue = sorter.shortestHeightSorterWithGrid();
  expect(testValue.pieces[0].id).toBe(0);
  expect(testValue.pieces[1].id).toBe(2);
  expect(testValue.pieces[2].id).toBe(1);
})


