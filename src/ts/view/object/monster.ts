import AbstractObject from './abstractObject';

export default class Monster extends AbstractObject {
	textureName = 'Gilgamesh.gif';
	animated = false;

	isFoe(){
		return true;
	}
}
