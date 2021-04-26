import AbstractObject from './abstractObject';
import Hitbox from './../Hitbox';

export default class Wall extends AbstractObject {
	textureName = 'wall.png';
	spriteType = 'tiling';
	animated = false;
	width = 0;
	height = 0;

	_showHitbox = true;

	constructor(){
		super();
		this._hitbox = new Hitbox(0, 0, 33, 150);
		this.wall = true;
	}

	_init(){
		super._init();
		this._sprite.width = this.width;
		this._sprite.height = this.height;
	}

}
