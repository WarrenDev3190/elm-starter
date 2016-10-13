/*
	INDEX.js
	This file kicks off the app.
*/
// - require sass styling 
require('./styles/main.scss');
// - require the main elm file
var Elm = require('./elm/Main');
// - mount into the document using native JS
Elm.Main.embed(document.getElementById('app'));