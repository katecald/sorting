describe('Bubble Sort', function(){

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('sorts an array with length of 2', function(){
      var unsortedArr = [2, 1]
      expect(bubbleSort(unsortedArr)).toEqual([1,2])
  })

   it('sorts an array with length of 6', function(){
      var unsortedArr = [2, 1, 3, 6, 5, 4]
      expect(bubbleSort(unsortedArr)).toBe(unsortedArr.sort())
  })
});