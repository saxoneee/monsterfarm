// only for collision detection
export default class Hitbox{
	top:number;
	right:number;
	bottom:number;
	left:number;

	constructor(pTop:number, pLeft:number, pBottom:number, pRight:number){
		this.top = pTop;
		this.right = pRight;
		this.bottom = pBottom;
		this.left = pLeft;
	}
}
