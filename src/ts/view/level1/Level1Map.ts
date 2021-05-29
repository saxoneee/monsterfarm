import * as PIXI from 'pixi.js';

import AbstractMap from './../abstractMap';
import SpriteUtils from './../../utils/spriteUtils';

export default class Level1Map extends AbstractMap{
	constructor(pWidth:number, pHeight: number){
		super(pWidth, pHeight);

		var _sprite = new PIXI.TilingSprite(SpriteUtils.getTextureByName('green.png'));
		_sprite.width = this.mapWidth;
		_sprite.height = this.mapHeight;
		this.container.addChild(_sprite);
	}
}
