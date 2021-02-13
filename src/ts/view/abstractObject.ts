import * as PIXI from 'pixi.js';

import AbstractView from './abstractView';
import SpriteUtils from '../utils/spriteUtils';

export default class AbstractObject extends AbstractView{
	_spriteWrap: any;

	textureHitbox: any = null;

	_init(){
		super._init();
		this._sprite.anchor.x = 0.5; // for easy sprite flipping
		console.log(this._sprite.width);
	}

	get(){
		if(!this._initialized){
			this._init();
			this._initSpriteWrapper();
		}

		return this._spriteWrap;
	}

	_initSpriteWrapper(){
		this._spriteWrap = new PIXI.Sprite(SpriteUtils.getTextureByName(this.textureHitbox));
		this._spriteWrap.addChild(this._sprite);

		this._sprite.play();
	}

	_loadSprite(pName:any){
		const _texture = SpriteUtils.getAnimatedTextureByName(pName);

		return new PIXI.AnimatedSprite(_texture);
	}

	updatePosition(pHitbox:any){
		console.log(pHitbox);
		this._sprite.x = pHitbox.x;
		this._sprite.y = pHitbox.y;
	}

	tick(){
		if(this.textureName !== this.currentTextureName){
			this._sprite.textures = SpriteUtils.getAnimatedTextureByName(this.textureName);
			this._sprite.play();
			this.currentTextureName = this.textureName;
		}
	}
}
