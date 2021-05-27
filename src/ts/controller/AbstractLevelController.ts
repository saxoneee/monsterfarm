import * as PIXI from 'pixi.js';

import View from './../view/abstractView';

export default class AbstractLevelController {
	items:Array<any> = [];
	container:any;

	map:any;
	character:any;

	initEvents(){
		var _me = this;
		_me.character.on('move', function(pCharacter:any, pCoords:any){
			if(_me.map.contains(pCharacter, pCoords)){
				_me.character.setPosition(pCoords);
			}
		});
	}

	setCharacter(pCharacter:any){
		this.character = pCharacter;
		this.addToLevel(pCharacter);
	}

	setMap(pMap:any){
		this.map = pMap;
		this.addToLevel(pMap);
	}

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
