import * as PIXI from 'pixi.js';

import AbstractObject from './abstractObject';
import SpriteUtils from './../../utils/spriteUtils';

export default class Character extends AbstractObject {

	constructor(){
		super();
		this.init();
	}

	init(){
		this.container = new PIXI.Container;
		this.container.x = 0;

		this.setSprite('idle');
	}

	setSprite(pSpriteName:string){
		var _mask = PIXI.Sprite.from(PIXI.Texture.WHITE);
		this.container.mask = _mask;

		var _spriteName = 'adventurer-idle',
			_spriteY = 0,
			_spriteX = 0,
			_spriteAnimationSpeed = 0.1,
			_maskWidth = this.container.width,
			_maskHeight = this.container.height;

		switch(pSpriteName){
			case 'idle':
				_spriteY = -5;
				_spriteX = -14;
				_maskWidth = 20;
				_maskHeight = 31;
			break;
		}

		var _sprite = new PIXI.AnimatedSprite(SpriteUtils.getAnimatedTextureByName(_spriteName));
		this.container.addChild(_sprite);
		this.container.addChild(_mask);

		_mask.width = _maskWidth;
		_mask.height = _maskHeight;

		_sprite.animationSpeed = _spriteAnimationSpeed;
		_sprite.y = _spriteY;
		_sprite.x = _spriteX;
		_sprite.play();
	}
}
