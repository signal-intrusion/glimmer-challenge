'use strict';

const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const resolve = require('rollup-plugin-node-resolve')
const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp

module.exports = function(defaults) {
  let app = new GlimmerApp(defaults, {
    rollup: {
      plugins: [
        resolve({ jsnext: true, main: true  }),
        babel({ exclude: 'node_modules/**' }),
        commonjs({
          // non-CommonJS modules will be ignored, but you can also
          // specifically include/exclude files
          include: 'node_modules/**',  // Default: undefined
          // exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],  // Default: undefined

          // search for files other than .js files (must already
          // be transpiled by a previous plugin!)
          // extensions: [ '.js', '.coffee' ],  // Default: [ '.js' ]

          // if true then uses of `global` won't be dealt with by this plugin
          // ignoreGlobal: false,  // Default: false

          // if false then skip sourceMap generation for CommonJS modules
          // sourceMap: false,  // Default: true

          // explicitly specify unresolvable named exports
          // (see below for more details)
          // namedExports: { './module.js': ['foo', 'bar' ] },  // Default: undefined

          // sometimes you have to leave require statements
          // unconverted. Pass an array containing the IDs
          // or a `id => boolean` function. Only use this
          // option if you know what you're doing!
          // ignore: [ 'conditional-runtime-dependency' ]
        })
      ]
    }
  });

  return app.toTree();
};
