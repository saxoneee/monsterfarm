import * as PIXI from 'pixi.js';

import Character from './../view/object/character';
import Monster from './../view/object/monster';
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


		this.registerForKeyboardEvents(_chara);

		_chara.on('move', function(){
			_map.contain(_chara.get());
			console.log(_me.collision(_chara.get()));
		});

		this.addToLevel(_map);
		this.addToLevel(_chara);
		this.addToLevel(_monster);

		_monster.setPosition(200,200);
	}
}
