import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

// Mude esse reducer para algo que faça sentido com o seu projeto;
// Lembrando que ele pode ficar em outro arquivo também;

const rootReducer = combineReducers({ user, wallet });

export default rootReducer;
// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
