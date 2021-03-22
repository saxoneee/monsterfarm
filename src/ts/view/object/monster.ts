import AbstractObject from './abstractObject';

export default class Monster extends AbstractObject {
	textureName = 'Gilgamesh.gif';
	animated = false;

	spriteType = 'default';

	isFoe(){
		return true;
	}
}
