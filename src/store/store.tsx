import { configureStore } from '@reduxjs/toolkit'

import authReducer from './auth/authReducer';
import budgetsReducer from './budgets/budgetsReducer';
import optionsReducer from './options/optionsReducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
        budgets: budgetsReducer,
        options: optionsReducer
    }
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {auth: authState, budgets: budgetsState, options: optionssState}
export type AppDispatch = typeof store.dispatch

export default store;
