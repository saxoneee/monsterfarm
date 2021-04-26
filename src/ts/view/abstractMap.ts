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
	contain(pObject:any, pDesiredPos:any) {
		var _objectView = pObject.get();
		var _newPos = {
			x: _objectView.x,
			y: _objectView.y
		};

		var _left = pObject.x;

		//Left
		if (_left < 0) {

		}

		// //Top
		// if (pObject.y < 0) {
		// 	// debugger;
		// 	pObject.y = 0;
		//   _collision = "top";
		// }

		// //Right
		// if (pObject.x + pObject.width > this.width) {
		// 	pObject.x = this.width - pObject.width;
		//   _collision = "right";
		// }

		// //Bottom
		// if (pObject.y + pObject.height > this.height) {
		// 	pObject.y = this.height - pObject.height;
		//   _collision = "bottom";
		// }

		return _newPos;
	  }
}
