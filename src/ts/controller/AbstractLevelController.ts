import * as PIXI from 'pixi.js';
import Hitbox from './../view/Hitbox';

export default class AbstractLevelController {
	_container:PIXI.Container;
	_items:Array<any> = [];
	_keyboardRegistrants:Array<any> = [];

	constructor(){
		this._container = new PIXI.Container();
	}

	getContainer(){
		return this._container;
	}

	addToLevel(pObject:any){
		const _container = this._container;

		this._items.push(pObject);
		var _sprite = pObject.get();

		_container.addChild(_sprite);
	}

	collision(pCharHitbox:any){
		var _h = false,
			_co = false;
		for(var _i = 0; _i < this._items.length; _i++){
			var _item = this._items[_i];

			if(_item.wall){
				var _itemHitbox = _item.getHitbox();
				if(!_itemHitbox){
					break;
				}
// console.log(_itemHitbox);
				if(_itemHitbox.right > pCharHitbox.x + pCharHitbox.width){
					console.log('tr');
					break;
				}

				// if(
				// 	_itemHitbox.right > pCharHitbox.x + pCharHitbox.width &&
				// 	pCharHitbox.x + pCharHitbox.width > _itemHitbox.left &&
				// 	_itemHitbox.bottom > pCharHitbox.y + pCharHitbox.height &&
				// 	pCharHitbox.y + pCharHitbox.height > _itemHitbox.top
				// ){
				// 	_co = true;
				// }

				// if(pCharHitbox.x > _itemHitbox.left && pCharHitbox.x < _itemHitbox.left + _itemHitbox.right){
				// 	_h = true;
				// }

				// if(_h && pCharHitbox.y > _itemHitbox.top /*&& pCharHitbox.y < _itemHitbox.top + _itemHitbox.bottom*/){
				// 	_co = true;
				// 	break;
				// }
			}
		}

		return _co;
	}

	registerForKeyboardEvents(pObject:any){
		this._keyboardRegistrants.push(pObject);
	}

	handleKeyboardEvents(keys:any){

		for(var _i = 0; _i < this._keyboardRegistrants.length; _i++){
			const _registrant = this._keyboardRegistrants[_i];

			_registrant.handleKeyboardEvent(keys);
		}
	}

	tick(){
		for(var _i = 0; _i < this._items.length; _i++){
			if(this._items[_i].tick){
				this._items[_i].tick();
			}
		}
	}
}
