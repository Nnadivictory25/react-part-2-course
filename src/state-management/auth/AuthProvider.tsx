import { ReactNode, useReducer } from 'react';
import AuthContext from './authContext';

interface LoginAction {
	type: 'LOGIN';
	username: string;
}

interface LogoutAction {
	type: 'LOGOUT';
}

export type AuthAction = LoginAction | LogoutAction;

const authReducer = (state: string, action: AuthAction): string => {
	switch (action.type) {
		case 'LOGIN':
			return action.username;
		case 'LOGOUT':
			return '';
		default:
			return state;
	}
};


interface Props {
	children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
	const [user, dispatch] = useReducer(authReducer, '');

	return (
		<AuthContext.Provider value={{ user, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
