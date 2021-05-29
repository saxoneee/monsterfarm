import * as PIXI from 'pixi.js';

import View from './../view/abstractView';

export default class AbstractLevelController {
	items:Array<any> = [];
	container:any;

	map:any;
	character:any;
	walls:Array<any> = [];

	initEvents(){
		var _me = this;
		_me.character.on('move', function(pCharacter:any, pCoords:any){
			var _move = true;
			if(!_me.map.contains(pCharacter, pCoords)){
				_move = false;
			}
			if(_me.detectWallCollision(pCharacter, pCoords)){
				_move = false;
			}

			if(_move){
				_me.character.setPosition(pCoords);
			}
		});
	}

	detectWallCollision(pObject:any, pCoords:any){
		for(var _i = 0; _i < this.walls.length; _i++){
			var _wall = this.walls[_i];

			if(_wall.collides(pObject, pCoords)){
				return true;
			}
		}
		return false;
	}

	setCharacter(pCharacter:any){
		this.character = pCharacter;
		this.addToLevel(pCharacter);
	}

	setMap(pMap:any){
		this.map = pMap;
		this.addToLevel(pMap);
	}

	addWall(pWall:any){
		this.walls.push(pWall);

		this.addToLevel(pWall);
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
