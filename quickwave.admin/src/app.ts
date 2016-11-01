/// <reference path="lib/qw.tsx" />


import qw = require('./lib/qw');

class App extends qw.App.QuickWaveApplication {

}


var app: App = new App();

app.start_application();
