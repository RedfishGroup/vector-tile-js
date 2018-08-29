import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'index.js',
  output: {
    name: 'vector-tile-bundle.js',
    file: 'vector-tile-bundle.js',
    format: 'esm',
  },
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true,
    }),

    commonjs(),
  ],
};
