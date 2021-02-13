import * as PIXI from 'pixi.js';

import AbstractView from './abstractView';
import SpriteUtils from '../utils/spriteUtils';

export default class AbstractObject extends AbstractView{

	_loadSprite(pName:any){
		const _texture = SpriteUtils.getAnimatedTextureByName(pName);

		return new PIXI.AnimatedSprite(_texture);
	}
}
