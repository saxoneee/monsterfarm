export default new class Keyboard {
	initKeyboard() {
		//Capture the keyboard arrow keys
		let left = this._bindKey(37),
			up = this._bindKey(38),
			right = this._bindKey(39),
			down = this._bindKey(40);

		return {
			left: left,
			right: right,
			up: up,
			down: down
		}
	}

	//The `keyboard` helper function
	_bindKey(keyCode: any) {
		let key: any = {};
		key.code = keyCode;
		key.isDown = false;
		key.isUp = true;

		//The `downHandler`
		key.downHandler = function (event: any) {
			if (event.keyCode === key.code) {
				if (key.isUp && key.press) key.press();
				key.isDown = true;
				key.isUp = false;
			}
			event.preventDefault();
		};

		//The `upHandler`
		key.upHandler = function (event: any) {
			if (event.keyCode === key.code) {
				if (key.isDown && key.release) key.release();
				key.isDown = false;
				key.isUp = true;
			}
			event.preventDefault();
		};

		//Attach event listeners
		window.addEventListener(
			"keydown", key.downHandler.bind(key), false
		);
		window.addEventListener(
			"keyup", key.upHandler.bind(key), false
		);
		return key;
	}

}
