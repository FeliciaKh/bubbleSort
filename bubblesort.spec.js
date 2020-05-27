
describe('Bubble Sort', function() {

  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it ('handles an array with a single item', function() {
    expect(bubbleSort([5])).toEqual([5]);
    expect(bubbleSort([-3])).toEqual([-3]);
  });

  it ('handles an array with many items', function() {
    expect(bubbleSort([2,1])).toEqual([1,2]);
    expect(bubbleSort([5,9,2,7])).toEqual([2,5,7,9]);
    expect(bubbleSort([6,0,33,5,2,88,3,7])).toEqual([0,2,3,5,6,7,33,88]);
  });

  it('makes the correct number of swaps', function() {
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([5,9,2,7])
    expect(window.swap.calls.count()).toEqual(3);
  })
});



