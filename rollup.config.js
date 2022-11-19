const terser = require('@rollup/plugin-terser');
const typescript = require('@rollup/plugin-typescript');
const { name, author } = require('./package.json');

const pkgName = 'OxiranUtils';

const banner = `
/**
 * ${name} - Shared utils of my project.
 * (c) ${new Date().getFullYear()} ${author.name} - ${author.email}
 * Released under the MIT License.
 */
`;

module.exports = {
  input: './src/index.ts',
  output: [
    {
      name: pkgName,
      format: 'umd',
      file: 'dist/utils.js',
      banner,
    },
    {
      name: pkgName,
      format: 'umd',
      file: 'dist/utils.min.js',
      plugins: [terser()],
    },
    {
      name: pkgName,
      format: 'es',
      file: 'dist/utils.esm.js',
      banner,
    },
    {
      name: pkgName,
      format: 'es',
      file: 'dist/utils.esm.min.js',
      plugins: [terser()],
    },
  ],
  plugins: [
    typescript({
      compilerOptions: {
        lib: ['es2021', 'dom'],
        target: 'es5',
      },
      declaration: false,
    }),
  ],
};
