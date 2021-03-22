import AbstractObject from './abstractObject';

export default class Wall extends AbstractObject {
	textureName = 'wall.png';
	spriteType = 'tiling';
	animated = false;
	width = 0;
	height = 0;

	_init(){
		super._init();
		this._sprite.width = this.width;
		this._sprite.height = this.height;
	}

	get(){
		var _sprite = super.get();

		return _sprite;
	}

}
