import * as PIXI from 'pixi.js';

import AbstractObject from './abstractObject';
import SpriteUtils from './../../utils/spriteUtils';

export default class Character extends AbstractObject {
	spriteInit:boolean = false;
	mask:any = null;

	isMoving:boolean = false;
	horizontalDirection:string = 'right';
	verticalDirection:string = 'top';

	constructor(){
		super();
		this.init();
	}

	init(){
		this.container = new PIXI.Container;

		this.setSprite('idle-right');
	}

	/**
	 * set the character sprite
	 *
	 * @param pSpriteName
	 */
	setSprite(pSpriteName:string){
		var _spriteName = 'adventurer-idle',
			_spriteY = 0,
			_spriteX = 0,
			_spriteScaleX = 1,
			_spriteAnimationSpeed = 0.1,
			_maskWidth = this.container.width,
			_maskHeight = this.container.height;

		switch(pSpriteName){
			case 'idle-right':
				_spriteName = 'adventurer-idle';
				_spriteY = -5;
				_spriteX = -14;
				_spriteScaleX = 1;
				_maskWidth = 20;
				_maskHeight = 31;
			break;
			case 'idle-left':
				_spriteName = 'adventurer-idle';
				_spriteY = -5;
				_spriteX = 34;
				_spriteScaleX = -1;
				_maskWidth = 20;
				_maskHeight = 31;
			break;

			case 'run-right':
				_spriteName = 'adventurer-run';
				_spriteY = -5;
				_spriteX = -14;
				_spriteScaleX = 1;
				_maskWidth = 23;
				_maskHeight = 31;
			break;

			case 'run-left':
				_spriteName = 'adventurer-run';
				_spriteY = -5;
				_spriteX = 38;
				_spriteScaleX = -1;
				_maskWidth = 23;
				_maskHeight = 31;
			break;
		}

		if(!this.spriteInit){
			this.spriteInit = true;

			this.mask = PIXI.Sprite.from(PIXI.Texture.WHITE);
			this.container.mask = this.mask;
			this.sprite = new PIXI.AnimatedSprite(SpriteUtils.getAnimatedTextureByName(_spriteName));
			this.container.addChild(this.sprite);
			this.container.addChild(this.mask);
		}

		this.sprite.textures = SpriteUtils.getAnimatedTextureByName(_spriteName);

		this.mask.width = _maskWidth;
		this.mask.height = _maskHeight;

		this.sprite.animationSpeed = _spriteAnimationSpeed;
		this.sprite.y = _spriteY;
		this.sprite.x = _spriteX;
		this.sprite.scale.x = _spriteScaleX;
		this.sprite.play();
	}

	/**
	 * tick
	 *
	 * @param pKeyboard
	 */
	tick(pKeyboard:object){
		this.changeSpriteByKeyboard(pKeyboard);
	}

	/**
	 * let the character sprite be running or idling
	 *
	 * @param pKeyboard
	 */
	changeSpriteByKeyboard(pKeyboard: any) {
        let _isMoving:boolean = false,
            _horizontalDirection:string = this.horizontalDirection,
            _verticalDirection:string = this.verticalDirection,
			_horizontalMovement = false;

        if (pKeyboard.left.isDown) {
            _horizontalDirection = 'left';
            _isMoving = true;
			_horizontalMovement = true;
        }
        if (pKeyboard.right.isDown && !_isMoving) {
            _horizontalDirection = 'right';
            _isMoving = true;
			_horizontalMovement = true;
        }
        if (pKeyboard.up.isDown && !_isMoving) {
            _verticalDirection = 'up';
            _isMoving = true;
        }
        if (pKeyboard.down.isDown && !_isMoving) {
            _verticalDirection = 'down';
            _isMoving = true;
        }

		if(this.isMoving !== _isMoving || this.horizontalDirection !== _horizontalDirection || this.verticalDirection !== _verticalDirection){
			this.horizontalDirection = _horizontalDirection;
			this.verticalDirection = _verticalDirection;
			this.isMoving = _isMoving;

			if(_isMoving){
				if(_horizontalDirection === 'left'){
					this.setSprite('run-left');
				}else{
					this.setSprite('run-right');
				}
			}else{
				if(_horizontalDirection === 'left'){
					this.setSprite('idle-left');
				}else{
					this.setSprite('idle-right');
				}
			}
			// there are no up or down textures, so check for vertical movement not useful for now
		}
    }
}
