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
		const _chara = new Character();
		const _monster = new Monster();
		const _wall = new Wall();
		_wall.width = 100;
		_wall.height = 20;


		this.registerForKeyboardEvents(_chara);

		this.addToLevel(_map);
		this.addToLevel(_chara);
		this.addToLevel(_monster);
		this.addToLevel(_wall);

		_wall.setPosition(0,40);
		_monster.setPosition(200,200);

		_chara.on('move', function(pNewPos:any, pDirection:string){
			const _charaSprite = _chara.get(),
				  _charaCoords = {
				x: _charaSprite.x + pNewPos.x,
				y: _charaSprite.y + pNewPos.y,
				width: _charaSprite.width,
				height: _charaSprite.height,
			},
				_mapCollision = _map.contain(_charaCoords),
				_objectCollision = _me.collision(_charaCoords);

			if(!_mapCollision && !_objectCollision){
				_chara.setPosition(_charaCoords.x, _charaCoords.y);
			}
		});
	}
}
