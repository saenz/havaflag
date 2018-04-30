import AuthClass from './Auth';

let _instance = null;

if (!_instance) {
    _instance = new AuthClass(null);
}

const Auth = _instance;
export default Auth;
export { AuthClass };
