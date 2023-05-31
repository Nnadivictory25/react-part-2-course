interface LoginAction {
	type: 'LOGIN';
	username: string;
}

interface LogoutAction {
	type: 'LOGOUT';
}

type Action = LoginAction | LogoutAction;

const authReducer = (state: string, action: Action): string => {
	switch (action.type) {
		case 'LOGIN':
			return action.username;
		case 'LOGOUT':
            return '';
        default: return state;
	}
};

export default authReducer;
