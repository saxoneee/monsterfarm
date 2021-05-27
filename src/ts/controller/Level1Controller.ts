import * as PIXI from 'pixi.js';

import AbstractLevelController from './AbstractLevelController';

import Map from './../view/level1/Level1Map';
import Character from './../view/object/Character';

export default class Level1Controller extends AbstractLevelController{

	init(pWidth:number, pHeight:number){
		this.container = new PIXI.Container;

		var _map = new Map(pWidth, pHeight),
			_character = new Character();

		this.addToLevel(_map);
		this.addToLevel(_character);

		return this.container;
	}
}
