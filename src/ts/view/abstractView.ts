import * as PIXI from 'pixi.js';
import SpriteUtils from '../utils/spriteUtils';

export default class AbstractMap{
	_sprite:any;
	_initialized:boolean = false;

	spriteType:string = 'default';

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
		switch(this.spriteType){
			case 'default':
				return new PIXI.Sprite(SpriteUtils.getTextureByName(pName));
			case 'tiling':
				return new PIXI.TilingSprite(SpriteUtils.getTextureByName(pName));
			case 'animated':
				return new PIXI.AnimatedSprite(SpriteUtils.getAnimatedTextureByName(pName));
		}

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
