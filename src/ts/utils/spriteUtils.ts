import * as PIXI from 'pixi.js';

export default new class SpriteUtils {
	getTextureByName(pName:string){
		return PIXI.utils.TextureCache[pName];
	}

	getAnimatedTextureByName(pName:string){
		return PIXI.Loader.shared.resources['./src/assets/img/sprites.json'].spritesheet.animations[pName];
	}

	getHitboxRectangle(pHitbox:any){
		const _rectangle = PIXI.Sprite.from(PIXI.Texture.WHITE)

		_rectangle.height = pHitbox.bottom;
		_rectangle.width = pHitbox.right;
		_rectangle.x = pHitbox.left;
		_rectangle.y = pHitbox.top;
		_rectangle.alpha = 0.7;

		return _rectangle;
	}
}
