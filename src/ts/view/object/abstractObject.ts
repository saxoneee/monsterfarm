import * as PIXI from 'pixi.js';

import AbstractView from '../abstractView';
import SpriteUtils from '../../utils/spriteUtils';

export default class AbstractObject extends AbstractView{
	_spriteWrap: any;

	spriteType = 'animated';

	_init(){
		super._init();

		if(this.animated){
			this._sprite.anchor.x = 0.5; // for easy sprite flipping
		}
	}

	get(){
		const _view = super.get();

		if(this.animated){
			this._sprite.play()
		}

		return _view;
	}

	isWall(){
		return true;
	}

	setPosition(pViewX:number, pViewY:number){
		this._view.x = pViewX;
		this._view.y = pViewY;
	}

	getPosition(){
		return {
			x: this._view.x - this._hitbox.left,
			y: this._view.y - this._hitbox.top
		}
	}

	tick(){
		if(this.animated && this.textureName !== this.currentTextureName){
			this._sprite.textures = SpriteUtils.getAnimatedTextureByName(this.textureName);
			this._sprite.play();
			this.currentTextureName = this.textureName;
		}
	}
}
