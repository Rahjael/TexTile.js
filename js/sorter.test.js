const Sorter = require('./sorter.js');


test('Sorter instantiation without arguments (mainArea)', () => {
  const sorter = new Sorter();
  expect(sorter.mainArea).toStrictEqual({});
})

test('Sorter instantiation without arguments (pieces)', () => {
  const sorter = new Sorter();
  expect(sorter.pieces).toStrictEqual([]);
})

const testObject1 = {
  mainArea: {
    width: 340,
    height: 3000
  },

  pieces: [
    {
      id: 0,
      label: "item0",
      width: 143,
      height: 182,
      area: 26026,
      x: 0,
      y: 0,
      positioned: false,
      color: "rbg(50, 50, 50)"
    },    
    {
      id: 1,
      label: "item1",
      width: 23,
      height: 48,
      area: 1104,
      x: 0,
      y: 0,
      positioned: false,
      color: "rbg(50, 50, 50)"
    },
    {
      id: 2,
      label: "item2",
      width: 186,
      height: 25,
      area: 4650,
      x: 0,
      y: 0,
      positioned: false,
      color: "rbg(50, 50, 50)"
    },
    {
      id: 3,
      label: "item3",
      width: 107,
      height: 74,
      area: 7918,
      x: 0,
      y: 0,
      positioned: false,
      color: "rbg(50, 50, 50)"
    },
    {
      id: 4,
      label: "item4",
      width: 132,
      height: 109,
      area: 14388,
      x: 0,
      y: 0,
      positioned: false,
      color: "rbg(50, 50, 50)"
    },
    {
      id: 5,
      label: "item5",
      width: 152,
      height: 210,
      area: 31920,
      x: 0,
      y: 0,
      positioned: false,
      color: "rbg(50, 50, 50)"
    }
  ]
}

test('Sorter instantiation with testObject1 (6 pieces)', () => {
  const sorter = new Sorter(testObject1.mainArea, testObject1.pieces);
  expect(sorter.mainArea.width).toBe(340);
  expect(sorter.mainArea.height).toBe(3000);
  expect(sorter.pieces.length).toBe(6);
})

test('Sorter mainArea setter (testObject1)', () => {
  const sorter = new Sorter();
  sorter.setMainArea(testObject1.mainArea);
  expect(sorter.mainArea.width).toBe(340);
  expect(sorter.mainArea.height).toBe(3000);
})

test('Sorter pieces setter (testObject1)', () => {
  const sorter = new Sorter();
  sorter.setPieces(testObject1.pieces);
  expect(sorter.pieces.length).toBe(6);
})

test('shortestHeightSorterWithGrid() called with empty data', () => {
  const sorter = new Sorter();
  let testValue = sorter.shortestHeightSorterWithGrid();
  expect(testValue).toBe(null);
})

test('shortestHeightSorterWithGrid() area returned (testObject1)', () => {
  const sorter = new Sorter(testObject1.mainArea, testObject1.pieces);
  let testValue = sorter.shortestHeightSorterWithGrid();
  expect(testValue.sourcePiece.width).toBe(340);
  expect(testValue.sourcePiece.height).toBe(3000);
})

test('shortestHeightSorterWithGrid() pieces sorting (testObject1)', () => {
  const sorter = new Sorter(testObject1.mainArea, testObject1.pieces);
  let testValue = sorter.shortestHeightSorterWithGrid();
  expect(testValue.pieces[0].id).toBe(5);
  expect(testValue.pieces[1].id).toBe(0);
  expect(testValue.pieces[2].id).toBe(4);
  expect(testValue.pieces[3].id).toBe(3);
  expect(testValue.pieces[4].id).toBe(2);
  expect(testValue.pieces[5].id).toBe(1);
})

test('shortestHeightSorterWithGrid() pieces get positioned (item.positioned === true) (testObject1)', () => {
  const sorter = new Sorter(testObject1.mainArea, testObject1.pieces);
  let testValue = sorter.shortestHeightSorterWithGrid();
  expect(testValue.pieces[0].positioned).toBe(true);
  expect(testValue.pieces[1].positioned).toBe(true);
  expect(testValue.pieces[2].positioned).toBe(true);
  expect(testValue.pieces[3].positioned).toBe(true);
  expect(testValue.pieces[4].positioned).toBe(true);
  expect(testValue.pieces[5].positioned).toBe(true);
})

test('shortestHeightSorterWithGrid() item (x,y) != (0,0) (except for first item) (testObject1)', () => {
  const sorter = new Sorter(testObject1.mainArea, testObject1.pieces);
  let testValue = sorter.shortestHeightSorterWithGrid();

  let item1 = testValue.pieces[1].x != 0 || testValue.pieces[1].y != 0;
  expect(item1).toBe(true);
  let item2 = testValue.pieces[2].x != 0 || testValue.pieces[2].y != 0;
  expect(item2).toBe(true);
  let item3 = testValue.pieces[3].x != 0 || testValue.pieces[3].y != 0;
  expect(item3).toBe(true);
  let item4 = testValue.pieces[4].x != 0 || testValue.pieces[4].y != 0;
  expect(item4).toBe(true);
  let item5 = testValue.pieces[5].x != 0 || testValue.pieces[5].y != 0;
  expect(item5).toBe(true);
})