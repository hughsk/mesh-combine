# mesh-combine [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Combine multiple indexed meshes into a single indexed mesh.

This should help constructing indexed meshes from smaller primitives without
getting too bogged down in indexing everything manually.

## Usage

[![NPM](https://nodei.co/npm/mesh-combine.png)](https://nodei.co/npm/mesh-combine/)

### mesh = combine(meshes)

Given an array of `meshes`, return a combined mesh. Each mesh in the array
should be an object with two properties:

* `positions`: the positions in the individual mesh.
* `cells`: a list of faces in the individual mesh.

## See Also

* [simplicial-complex](http://github.com/mikolalysenko/simplicial-complex/)
* [indexed-geometry-demo](http://github.com/hughsk/indexed-geometry-demo/)

## License

MIT. See [LICENSE.md](http://github.com/hughsk/mesh-combine/blob/master/LICENSE.md) for details.
