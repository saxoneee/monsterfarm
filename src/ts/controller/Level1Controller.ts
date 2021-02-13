import * as PIXI from 'pixi.js';

import Character from './../view/character';
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

		this.registerForKeyboardEvents(_chara);

		_chara.on('move', function(){
			_map.contain(_chara.get());

		});

		this.addToContainer(_map);
		this.addToContainer(_chara);
	}
}
