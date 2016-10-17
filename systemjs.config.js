/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {      
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'wwwroot',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './startup.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);

// var map = {
//   'app':                                'www/app/',
//   'rxjs':                               'vendor/rxjs',
//   'zonejs':                             'vendor/zone.js',
//   'reflect-metadata':                   'vendor/reflect-metadata',
//   '@angular':                           'vendor/@angular'
// };

// var packages = {
//   'app':                                { main: 'main', defaultExtension: 'js' },
//   'rxjs':                               { defaultExtension: 'js' },
//   'zonejs':                             { main: 'zone', defaultExtension: 'js' },
//   'reflect-metadata':                   { main: 'Reflect', defaultExtension: 'js' }
// };

// var packageNames = [
//   '@angular/common',
//   '@angular/compiler',
//   '@angular/core',
//   '@angular/http',
//   '@angular/platform-browser',
//   '@angular/platform-browser-dynamic',
//   '@angular/router',
//   '@angular/router-deprecated',
//   '@angular/testing',
//   '@angular/upgrade',
// ];

// packageNames.forEach(function(pkgName) {
//   packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
// });

// System.config({
//   map: map,
//   packages: packages
// });
