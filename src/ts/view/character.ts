import AbstractObject from './abstractObject';
import SpriteUtils from '../utils/spriteUtils';

export default class Character extends AbstractObject {
	animated = true;
	textureName = 'adventurer-idle';

	_init() {
		super._init();
		this._sprite.animationSpeed = 0.1;
		this._sprite.anchor.x = 0.5
	}

	get() {
		const _char = super.get();
		_char.play();
		return _char;
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

	move(pDirection: any) {
		switch (pDirection) {
			case 'up':
				this._sprite.y += -1;
				break;
			case 'down':
				this._sprite.y += 1;
				break;
			case 'left':
				this._sprite.x += -1;
				break;
			case 'right':
				this._sprite.x += 1;
				break;
		}
	}
}
