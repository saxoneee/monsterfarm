import * as PIXI from 'pixi.js';

export default new class SpriteUtils {
	getTextureByName(pName:string){
		return PIXI.utils.TextureCache[pName];
	}

	getAnimatedTextureByName(pName:string){
		return PIXI.Loader.shared.resources['./src/assets/img/sprites.json'].spritesheet.animations[pName];
	}
}
