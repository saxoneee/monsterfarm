import * as PIXI from 'pixi.js';

import AbstractObject from './abstractObject';

import SpriteUtils from '../../utils/spriteUtils';

export default class Wall extends AbstractObject {

	constructor(pPosX: number, pPosY:number, pWidth:number, pHeight:number){
		super();

		this.container.x = pPosX;
		this.container.y = pPosY;

		var _sprite = new PIXI.TilingSprite(SpriteUtils.getTextureByName('wall.png'));
		_sprite.width = pWidth;
		_sprite.height = pHeight;
		this.container.addChild(_sprite);
	}

	collides(pObject:any, pCoords:any){
		var _objectWidth = pObject.getWidth(),
			_objectHeight = pObject.getHeight(),
			_horizontal = false,
			_vertical = false;

		if(pCoords.x + _objectWidth >= this.container.x && pCoords.x < this.container.x + this.container.width){
			_horizontal = true;
		}

		if(pCoords.y + _objectHeight >= this.container.y && pCoords.y < this.container.y + this.container.height){
			_vertical = true;
		}

		if(_horizontal && _vertical){
			return true;
		}

		return false;
	}

}
