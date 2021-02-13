import * as PIXI from 'pixi.js';

import AbstractView from './abstractView';
import SpriteUtils from '../utils/spriteUtils';

export default class AbstractMap extends AbstractView{
	width:number;
	height:number;

	_init(){
		super._init();

		this._sprite.width = this.width;
		this._sprite.height = this.height;
	}

	_loadSprite(pName:string){
		const _texture = SpriteUtils.getTextureByName(pName);
		return new PIXI.TilingSprite(_texture);
	}
}
