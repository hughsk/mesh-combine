var slice = require('sliced')

module.exports = combine

function combine(meshes) {
  var pos = []
  var cel = []
  var nor = []
  var p = 0
  var c = 0
  var k = 0

  var hasNormal = meshes.every(function(mesh) {
    return mesh.hasOwnProperty('normals')
  })

  for (var i = 0; i < meshes.length; i++) {
    var mpos = meshes[i].positions
    var mcel = meshes[i].cells
    var mnor = hasNormal ? meshes[i].normals : []

    for (var j = 0; j < mpos.length; j++) {
      pos[j + p] = slice(mpos[j])
      if (hasNormal) {
        nor[j + p] = slice(mnor[j])
      }
    }

    for (var j = 0; j < mcel.length; j++) {
      cel[k = j + c] = slice(mcel[j])

      for(var l = 0; l < cel[k].length; l++) {
        cel[k][l] += p
      }
    }

    p += mpos.length
    c += mcel.length
  }

  var ret = {
      cells: cel
    , positions: pos
  }
  if(hasNormal) {
    ret.normals = nor
  }

  return ret
}
