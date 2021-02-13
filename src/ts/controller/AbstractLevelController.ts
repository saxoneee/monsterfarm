import * as PIXI from 'pixi.js';

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

	collision(pChar:any){
		var _h = false,
			_co = false;
		for(var _i = 0; _i < this._items.length; _i++){
			var _item = this._items[_i];
			if(_item.isFoe && _item.isFoe() === true){
				var _sprite = _item.get();

				if(pChar.x >= _sprite.x && pChar.x <= _sprite.x + _sprite.width){
					_h = true;
				}

				if(_h && pChar.y >= _sprite.y && pChar.y <= _sprite.y + _sprite.height){
					_co = true;
					break;
				}
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
