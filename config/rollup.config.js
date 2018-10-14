export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/main.js',
      name: 'greetings',
      format: 'umd'
    },
    {
      file: 'dist/main.es.js',
      format: 'es'
    },
    {
      file: 'dist/main.amd.js',
      format: 'amd'
    },
    {
      file: 'dist/main.cjs.js',
      format: 'cjs'
    }
  ]
}