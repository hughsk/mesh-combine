var meshCombine = require('./..')
var test = require('tape')

var positionsA = [ [0, 1, 2], [3, 4, 5], [6, 7, 8] ]
var positionsB = [ [10, 11, 12], [13, 14, 15], [16, 17, 18] ]

var objectA1 = {

  positions: positionsA,
  cells: [ [0], [1], [2] ]
}

var objectB1 = {

  positions: positionsB,
  cells: [ [0], [1], [2] ]
}

var objectA2 = {

  positions: positionsA,
  cells: [ [ 0, 1 ], [ 0, 2 ] ]
}

var objectB2 = {

  positions: positionsB,
  cells: [ [ 1, 0 ], [ 1, 2 ] ]
}

var objectA3 = {

  positions: positionsA,
  cells: [ [ 0, 1, 2 ], [ 0, 1, 2 ] ]
}

var objectB3 = {

  positions: positionsB,
  cells: [ [ 2, 1, 0 ], [ 2, 1, 0 ] ]
}

var objectNA1 = {

  positions: positionsA,
  cells: [ [0], [1], [2] ],
  normals: positionsA
}

var objectNB1 = {
  positions: positionsB,
  cells: [ [0], [1], [2] ],
  normals: positionsB
}

test( 'cell length 1', function( t ) {

  var geo

  geo = meshCombine( [  objectA1, objectB1 ] )

  t.deepEqual(geo, {

    positions: [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [10, 11, 12], [13, 14, 15], [16, 17, 18] ],
    cells: [ [0], [1], [2], [3], [4], [5] ]
  }, 'are equal')

  t.end()
})

test( 'cell length 2', function( t ) {

  var geo

  geo = meshCombine( [  objectA2, objectB2 ] )

  t.deepEqual(geo, {

    positions: [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [10, 11, 12], [13, 14, 15], [16, 17, 18] ],
    cells: [ [ 0, 1 ], [ 0, 2 ], [ 4, 3 ], [ 4, 5 ] ]
  }, 'are equal')

  t.end()
})

test( 'cell length 3', function( t ) {

  var geo

  geo = meshCombine( [  objectA3, objectB3 ] )

  t.deepEqual(geo, {

    positions: [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [10, 11, 12], [13, 14, 15], [16, 17, 18] ],
    cells: [ [ 0, 1, 2 ], [ 0, 1, 2 ], [ 5, 4, 3 ], [ 5, 4, 3 ] ]
  }, 'are equal')

  t.end()
})

test('if one mesh no normals, result has no normals', function (t) {
  var geo

  geo = meshCombine( [  objectA1, objectNA1 ] )

  t.ok(!geo.hasOwnProperty('normals'), 'if one mesh no normals, result has no normals')

  t.end()
})

test( 'cell length 1 with normals', function( t ) {

  var geo

  geo = meshCombine( [  objectNA1, objectNB1 ] )

  t.deepEqual(geo, {

    positions: [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [10, 11, 12], [13, 14, 15], [16, 17, 18] ],
    normals: [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [10, 11, 12], [13, 14, 15], [16, 17, 18] ],
    cells: [ [0], [1], [2], [3], [4], [5] ]
  }, 'are equal')

  t.end()
})
