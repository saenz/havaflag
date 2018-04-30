
/* A fake authentication function */
export default class AuthClass {
	_isAuthenticated = false;

	signIn(cb) {
    	this._isAuthenticated = true
    	setTimeout(() => {
    		if (cb && typeof cb === "function") {
    			cb()
    		}
    	}, 100)
	}

	signOut() {
		this._isAuthenticated = false;
	}

	currentSession() {
		return this._isAuthenticated;
	}
}