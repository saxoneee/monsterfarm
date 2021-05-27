import * as PIXI from 'pixi.js';

import AbstractView from './abstractView';
import SpriteUtils from '../utils/spriteUtils';

export default class AbstractMap extends AbstractView{
	mapWidth:number = 0;
	mapHeight:number = 0;

	constructor(pWidth:number, pHeight: number){
		super();

		this.mapWidth = pWidth;
		this.mapHeight = pHeight;

		this.init();
	}

	init(){
		this.container = new PIXI.Container;
	}
}
