import * as PIXI from 'pixi.js';

import Character from './../view/object/character';
import Monster from './../view/object/monster';
import Wall from './../view/object/wall';
import FirstMap from './../view/FirstMap';

import AbstractLevelController from './AbstractLevelController';

export default class Level1Controller extends AbstractLevelController{
	width:number;
	height:number;
	init(pWidth:number, pHeight:number){
		const _me = this;
		const loader = new PIXI.Loader();

		_me.width = pWidth;
		_me.height = pHeight;

		PIXI.Loader.shared.add('./src/assets/img/sprites.json').load(function(){_me._start()});

		return this.getContainer();
	}

	_start(){
		const _me = this;

		const _map = new FirstMap();
		_map.width = _me.width;
		_map.height = _me.height;
		// debugger;
		const _chara = new Character();
		const _monster = new Monster();
		const _wall = new Wall();
		_wall.width = 100;
		_wall.height = 20;


		this.registerForKeyboardEvents(_chara);

		this.addToLevel(_map);
		this.addToLevel(_chara);
		// this.addToLevel(_monster);
		// this.addToLevel(_wall);

		// _wall.setPosition(40,40,0,0);
		// _monster.setPosition(200,200,200,200);

		_chara.on('move', function(pNewPos:any, pDirection:string){
			const _charaPosition = _chara.getPosition(),
				_charaHitbox = _chara.getHitbox();
			let _charaNewX = pNewPos.x,
				_charaNewY = pNewPos.y,
				_charaCoords = {
					x: _charaNewX,
					y: _charaNewY,
					width: _charaHitbox.right - _charaHitbox.left,
					height: _charaHitbox.bottom - _charaHitbox.top,
				},
				_coordsInMap = _map.contain(_chara, pNewPos);
console.log(pNewPos, _coordsInMap);
			_chara.setPosition(_coordsInMap.x, _coordsInMap.y);
		});
	}
}
