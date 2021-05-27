import * as PIXI from 'pixi.js';
import SpriteUtils from '../utils/spriteUtils';

export default class AbstractView{
	container:any = null;
	sprite:any = null;

	getContainer(){
		return this.container;
	}
}
