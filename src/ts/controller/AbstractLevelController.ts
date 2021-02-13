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

	addToContainer(pObject:any){
		const _container = this._container;

		this._items.push(pObject);

		_container.addChild(pObject.get());
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
