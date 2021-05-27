import * as PIXI from 'pixi.js';

import AbstractView from '../abstractView';
import SpriteUtils from '../../utils/spriteUtils';

export default class AbstractObject extends AbstractView{
	setPosition(pCoords:any){

		this.container.x = pCoords.x;
		this.container.y = pCoords.y;

	}
}
