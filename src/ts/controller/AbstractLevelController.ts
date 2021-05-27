import * as PIXI from 'pixi.js';

import View from './../view/abstractView';

export default class AbstractLevelController {
	items:Array<any> = [];

	container:any;

	addToLevel(pObject: View){
		this.items.push(pObject);
		this.container.addChild(pObject.getContainer());
	}

	tick(pKeyboard:any){
		for(var _i = 0; _i < this.items.length; _i++){
            if(this.items[_i].tick){
                this.items[_i].tick(pKeyboard);
            }
        }
	}


}
