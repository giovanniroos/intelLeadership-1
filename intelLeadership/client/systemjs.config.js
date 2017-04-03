/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/material': 'npm:@angular/material/bundles/material.umd.js',

            // other libraries
            'rxjs': 'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            'angular2-highcharts': 'npm:angular2-highcharts',
            'highcharts': 'npm:highcharts',
            'highcharts/highstock.src': 'npm:highcharts/highstock.js',
            'highcharts/highcharts-more.src': 'npm:highcharts/highcharts-more.js',
            'highcharts/modules/solid-gauge.src': 'npm:highcharts/modules/solid-gauge.js',
            'moment': 'node_modules/moment',
            'ng2-bootstrap': 'node_modules/ng2-bootstrap',
            'ng2-pdf-viewer': 'node_modules/ng2-pdf-viewer',
            'pdfjs-dist': 'node_modules/pdfjs-dist'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-highcharts': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'highcharts': {
                main: './highstock.src.js',
                defaultExtension: 'js'
            },
            'ng2-bootstrap': {
                format: 'cjs',
                main: 'bundles/ng2-bootstrap.umd.js',
                defaultExtension: 'js'
            },
            'moment': {
                main: 'moment.js',
                defaultExtension: 'js'
            },
            'ng2-pdf-viewer': {
                main: 'dist/index.js',
                defaultExtension: 'js'
            },
            'pdfjs-dist': {
                defaultExtension: 'js'
            }
        }
    });
})(this);