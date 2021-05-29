import AbstractView from '../abstractView';

export default class AbstractObject extends AbstractView{
	setPosition(pCoords:any){

		this.container.x = pCoords.x;
		this.container.y = pCoords.y;

	}
}
