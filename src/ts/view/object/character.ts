import AbstractObject from './abstractObject';
import Hitbox from './../Hitbox';

export default class Character extends AbstractObject {
	animated = true;
	textureName = 'adventurer-idle';
	_showHitbox = true;

	constructor(){
		super();
		this._hitbox = new Hitbox(5, 0, 33, 20);
	}

	_init() {
		super._init();
		this._sprite.animationSpeed = 0.1;
		this._sprite.x = 10;
	}

	handleKeyboardEvent(pKeys: any) {
		let _isMoving:boolean = false,
			_direction:string = null;
		if (pKeys.left.isDown) {
			_direction = 'left';
			_isMoving = true;
		}
		if (pKeys.right.isDown && !_isMoving) {
			_direction = 'right';
			_isMoving = true;
		}
		if (pKeys.up.isDown && !_isMoving) {
			_direction = 'up';
			_isMoving = true;
		}
		if (pKeys.down.isDown && !_isMoving) {
			_direction = 'down';
			_isMoving = true;
		}

		if(_direction){
			this.move(_direction);
		}

		if(_isMoving){
			this.textureName = 'adventurer-run';
		}else{
			this.textureName = 'adventurer-idle';
		}

		if(_direction === 'left'){
			this._sprite.scale.x = -1;
		}
		if(_direction === 'right'){
			this._sprite.scale.x = 1;
		}
	}

	isWall(){
		return false;
	}

	move(pDirection: any) {
		const _coordsToMove:any = this.getPosition();

		switch (pDirection) {
			case 'up':
				// this._spriteWrap.y += -2;
				_coordsToMove.y -= 2;
				break;
			case 'down':
				// this._spriteWrap.y += 2;
				_coordsToMove.y += 2;
				break;
			case 'left':
				// this._spriteWrap.x += -2;
				_coordsToMove.x -= 2;
				break;
			case 'right':
				// this._spriteWrap.x += 2;
				_coordsToMove.x += 2;
				break;
		}

		this.fireEvent('move', _coordsToMove, pDirection);
	}
}
