import { configureStore } from '@reduxjs/toolkit'

import userReducer  from './user/userSlice';
import budgetsReducer from './budgets/budgetsSlice';
import optionsReducer from './options/optionsSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        budgets: budgetsReducer,
        options: optionsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {user: UserState, budgets: BudgetsState, options: OptionssState}
export type AppDispatch = typeof store.dispatch

export default store;
