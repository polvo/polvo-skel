var polvo = require('polvo');

var app = polvo();

app.use(require('polvo-js'));
app.use(require('polvo-css'));
app.use(require('polvo-html'));

app.env('dev test prod')
  .input('./app')
  .output({
    js: './public/app.js',
    css: './public/app.css'
  })
  .minify({
    js: false,
    css: false
  })
  .server({
    port: 3000,
    root: './public'
  })
  .options({
    server: true,
    watch: true,
    concat: true,
    repl: true
  });

app.env('test')
  .options({concat: false});

app.env('prod')
  .minify({js: true, css: true});

app.env('prod-x')
  .inherit('prod')
  .minify({js: false, css: true});

app.run('dev');