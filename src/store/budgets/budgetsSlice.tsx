import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ExpensesState {
    expenses: [{
        id: string;
        year: number;
        month: string;
        day: number;
        description: string;
        category: string;
        amount: number;
    }] | null
};
interface BudgetsState {
    budgets: [{
        id: string;
        year: number;
        month: string;
        categories: {
            categoryName: string;
            categoryMax: number;
        },
        expenses: ExpensesState 
    }] | null;
};

const initialState = {
    budgets: null,
    expenses: null
} as BudgetsState

const budgetsSlice = createSlice({
    name: "budgets",
    initialState,
    reducers: {
        addBudget: (state: BudgetsState, action:PayloadAction)=>{},
        editBudget: (state: BudgetsState, action:PayloadAction)=>{},
        deleteBudget: (state: BudgetsState, action:PayloadAction)=>{},
        addExpenses: (state: BudgetsState, action:PayloadAction)=>{},
        editExpenses: (state: BudgetsState, action:PayloadAction)=>{},
        deleteExpenses: (state: BudgetsState, action:PayloadAction )=>{},
    }
});

export default budgetsSlice.reducer;