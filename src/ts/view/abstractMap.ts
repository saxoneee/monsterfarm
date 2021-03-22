import * as PIXI from 'pixi.js';

import AbstractView from './abstractView';
import SpriteUtils from '../utils/spriteUtils';

export default class AbstractMap extends AbstractView{
	width:number;
	height:number;

	spriteType = 'tiling';

	_init(){
		super._init();

		this._sprite.width = this.width;
		this._sprite.height = this.height;
	}

	/**
	 * see if object is still in map
	 *
	 * @param pObject movable Object
	 */
	contain(pObject:any) {
		let _collision = undefined;

		//Left
		if (pObject.x < 0) {
			pObject.x = 0;
		  _collision = "left";
		}

		//Top
		if (pObject.y < 0) {
			pObject.y = 0;
		  _collision = "top";
		}

		//Right
		if (pObject.x + pObject.width > this.width) {
			pObject.x = this.width - pObject.width;
		  _collision = "right";
		}

		//Bottom
		if (pObject.y + pObject.height > this.height) {
			pObject.y = this.height - pObject.height;
		  _collision = "bottom";
		}

		//Return the `_collision` value
		return _collision;
	  }
}
