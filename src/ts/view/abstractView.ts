import * as PIXI from 'pixi.js';
import SpriteUtils from '../utils/spriteUtils';

export default class AbstractView{
	container:any = null;
	sprite:any = null;

	events: any = {};

	static idCounter:number = 0;
	id:String;

	constructor(){
		this.id = "view" + AbstractView.idCounter;
		AbstractView.idCounter++;

		this.container = new PIXI.Container;
	}

	getContainer(){
		return this.container;
	}


    /**
     * bind event listener
     *
     * @param pEventName
     * @param pEventFn
     */
	 on(pEventName:string, pEventFn:Function){
        if(!this.events[pEventName]){
            this.events[pEventName] = [];
        }

        this.events[pEventName].push(pEventFn);
    }

    /**
     * fire event to call the listeners
     *
     * @param pEventName
     */
    fireEvent(...pArgs: any[]){
        const _evArgs = [].slice.call(arguments),
            _evName = _evArgs.shift();

        for(let _eventName in this.events){
            if(_eventName === _evName){
                const _evLst = this.events[_eventName];

                for(let _x = 0; _x < _evLst.length; _x++){
                    _evLst[_x].apply(this, _evArgs);
                }
            }
        }
    }
}
