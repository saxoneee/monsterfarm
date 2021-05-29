import * as PIXI from 'pixi.js';

import AbstractLevelController from './AbstractLevelController';

import Map from './../view/level1/Level1Map';
import Character from './../view/object/Character';
import Wall from '../view/object/wall';

export default class Level1Controller extends AbstractLevelController{

	init(pWidth:number, pHeight:number){
		this.container = new PIXI.Container;

		var _map = new Map(pWidth, pHeight),
			_character = new Character();
		this.setMap(_map);
		this.setCharacter(_character);

		this.addWall(new Wall(0, 50, 100,40));
		this.addWall(new Wall(200, 50, 100,40));
		this.addWall(new Wall(0, 150, 100,40));
		this.addWall(new Wall(200, 150, 100,40));
		this.addWall(new Wall(0, 250, 100,40));
		this.addWall(new Wall(200, 250, 100,40));
		this.addWall(new Wall(0, 350, 100,40));
		this.addWall(new Wall(200, 350, 100,40));

		this.initEvents();

		return this.container;
	}

}
