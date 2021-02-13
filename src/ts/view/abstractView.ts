import * as PIXI from 'pixi.js';
import SpriteUtils from '../utils/spriteUtils';

export default class AbstractMap{
	_sprite:any;
	_initialized:boolean = false;

	textureName:string = null;
	currentTextureName:string = null;
	animated:boolean = false;

	_events: any = {};

	_init(){
		this._sprite = this._loadSprite(this.textureName);
		this.currentTextureName = this.textureName;
		this._initialized = true;
	}

	_loadSprite(pName:any){
		const _texture = SpriteUtils.getTextureByName(pName);
		return new PIXI.Sprite(_texture);
	}

	get(){
		if(!this._initialized){
			this._init();
		}

		return this._sprite;
	}

	tick(){

	}

	handleKeyboardEvent(pKey:any){

	}


    /**
     * bind event listener
     *
     * @param pEventName
     * @param pEventFn
     */
    on(pEventName:string, pEventFn:Function){
        if(!this._events[pEventName]){
            this._events[pEventName] = [];
        }

        this._events[pEventName].push(pEventFn);
    }

    /**
     * fire event to call the listeners
     *
     * @param pEventName
     */
    fireEvent(...pArgs: any[]){
        const _evArgs = [].slice.call(arguments),
            _evName = _evArgs.shift();

        for(let _eventName in this._events){
            if(_eventName === _evName){
                const _evLst = this._events[_eventName];

                for(let _x = 0; _x < _evLst.length; _x++){
                    _evLst[_x].apply(this, _evArgs);
                }
            }
        }
    }
}
