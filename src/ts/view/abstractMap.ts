import * as PIXI from 'pixi.js';

import AbstractView from './abstractView';

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

	contains(pObject:any, pCoords:any){
		var _objectWidth = pObject.getWidth(),
			_objectHeight = pObject.getHeight();

		if(pCoords.x < 0 || pCoords.x + _objectWidth > this.container.width){
			return false;
		}

		if(pCoords.y < 0 || pCoords.y + _objectHeight > this.container.height){
			return false;
		}

		return true;
	}
}
