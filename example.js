var shell = require('mesh-viewer')()
var combine = require('./')
var mesh

shell.camera.distance = 50
shell.on('viewer-init', function() {
  var combined = combine([
      require('bunny')
    , require('stanford-dragon/4')
    , translate(require('teapot'), [0, -8, 0])
  ])

  mesh = shell.createMesh(combined)
})

shell.on('gl-render', function() {
  mesh.draw()
})

function translate(mesh, translation) {
  var p = mesh.positions

  for (var i = 0; i < p.length; i++) {
    p[i][0] += translation[0]
    p[i][1] += translation[1]
    p[i][2] += translation[2]
  }

  return mesh
}
