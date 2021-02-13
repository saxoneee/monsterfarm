import './bootstrap';

import * as PIXI from 'pixi.js';

import Level1Controller from './controller/Level1Controller';
import Keyboard from './base/Keyboard';

//Create a Pixi Application
let app = new PIXI.Application({
	width: 512,
    height: 512,
    antialias: true,
    transparent: true,
    resolution: 1
});

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

const keyboard = Keyboard.initKeyboard();

const currentLevel = new Level1Controller();
const container = currentLevel.init(app.view.width, app.view.height);

app.stage.addChild(container);
app.ticker.add(delta => gameLoop(delta));

var x = 0;
function gameLoop(delta:number){
	x++;
	if(x > 1){ // too much on every tick
		currentLevel.handleKeyboardEvents(keyboard);
		x = 0;
	}

	currentLevel.tick();
}

