import * as PIXI from 'pixi.js';
import SpriteUtils from '../utils/spriteUtils';

export default class AbstractMap{
	_sprite:any;
	_initialized:boolean = false;

	textureName:string = null;
	currentTextureName:string = null;
	animated:boolean = false;

	_init(){
		this._sprite = this._loadSprite(this.textureName);
		this.currentTextureName = this.textureName;
		this._initialized = true;
	}

	_loadSprite(pName:any){
		const _texture = SpriteUtils.getTextureByName(pName);
		return new PIXI.Sprite(_texture);
	}

	get(){
		if(!this._initialized){
			this._init();
		}

		return this._sprite;
	}

	tick(){
		if(this.textureName !== this.currentTextureName){
			this._sprite.textures = SpriteUtils.getAnimatedTextureByName(this.textureName);
			this._sprite.play();
			this.currentTextureName = this.textureName;
		}
	}

	handleKeyboardEvent(pKey:any){

	}
}
