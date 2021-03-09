const Sorter = require('./sorter.js');


test('Sorter instantiation without arguments (mainArea)', () => {
  const sorter = new Sorter();
  expect(sorter.mainArea).toStrictEqual({});
})

test('Sorter instantiation without arguments (pieces)', () => {
  const sorter = new Sorter();
  expect(sorter.pieces).toStrictEqual([]);
})



test('Sorter instantiation with arguments', () => {

  // TODO finish this
  let mainArea = {
    width: 300,
    height: 300
  }

  let pieces = [

  ]



})


