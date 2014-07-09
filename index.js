var slice = require('sliced')

module.exports = combine

function combine(meshes) {
  var pos = []
  var cel = []
  var p = 0
  var c = 0
  var k = 0

  for (var i = 0; i < meshes.length; i++) {
    var mpos = meshes[i].positions
    var mcel = meshes[i].cells

    for (var j = 0; j < mpos.length; j++) {
      pos[j + p] = slice(mpos[j])
    }

    for (var j = 0; j < mcel.length; j++) {
      cel[k = j + c] = slice(mcel[j])
      cel[k][0] += p
      cel[k][1] += p
      cel[k][2] += p
    }

    p += mpos.length
    c += mcel.length
  }

  return {
      cells: cel
    , positions: pos
  }
}
