SystemJS.config({
    packages: {
        'src': {
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        }
    },
    paths: {
        'npm:': 'node_modules/',
        'main': 'src/index'
    },
    map: {
        'rxjs/Observable': 'npm:rxjs/Observable',
        'rxjs': 'npm:rxjs',
        'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
    },

    //baseURL: './',
    /*
    packages: {
        '.': {
            defaultJSExtensions: 'js'
        }
    },
    map: {
        'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
        'rxjs/Rx': 'node_modules/rxjs/Rx.js'
    },
    */
    transpiler: 'plugin-babel'
});

//SystemJS.import('/js/main.js');