import * as PIXI from 'pixi.js';

import AbstractView from '../abstractView';
import SpriteUtils from '../../utils/spriteUtils';

export default class AbstractObject extends AbstractView{
	_spriteWrap: any;

	textureHitbox: any = null;

	spriteType = 'animated';

	_init(){
		super._init();

		if(this.animated){
			this._sprite.anchor.x = 0.5; // for easy sprite flipping
		}
	}

	get(){
		if(!this._initialized){
			this._init();
			this._initSpriteWrapper();
		}

		return this._spriteWrap;
	}

	_initSpriteWrapper(){
		if(this.textureHitbox){
			this._spriteWrap = new PIXI.Sprite(SpriteUtils.getTextureByName(this.textureHitbox));
		}else{
			this._spriteWrap = new PIXI.Container();
		}

		this._spriteWrap.addChild(this._sprite);

		if(this.animated){
			this._sprite.play();
		}
	}

	isWall(){
		return true;
	}

	setPosition(pX:number, pY:number){
		this._spriteWrap.x = pX;
		this._spriteWrap.y = pY;
	}

	getPosition(){
		return {
			x: this._spriteWrap.x,
			y: this._spriteWrap.y
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
