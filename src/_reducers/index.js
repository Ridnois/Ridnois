import { alert } from './alert.reducer'
import { combineReducers } from 'redux';

// Al agregar mas componentes, sus reducers se deben llamar de esta forma
// const rootReducer = combineReducers({
//   authentication,
//   users,
//   alert,
//   registration,
//   products
// });

const rootReducer = alert;

export default rootReducer;