import { combineReducers } from 'redux';

import authReducer from './auth/authReducer';
import budgetsReducer from './budgets/budgetsReducer';
import optionsReducer from './options/optionsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  budgets: budgetsReducer,
  options: optionsReducer
})

export default rootReducer;