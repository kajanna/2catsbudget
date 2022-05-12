import { Routes, Route } from "react-router-dom";

import NavBar from './navigation/NavBar'

import './App.sass';

const App = () => {
  return (
  
    <div className="app-bg">
      <div className="app-main">
      <NavBar />
      <Routes >
        <Route path="/" element="MainPage" />
        <Route path="/:usesId" element="UsersBudgets"/>
        <Route path="/:usesId/:budgetId" element="BudgetSummary"/>
        <Route path="/createBudget" element="CreateBudget"/>
        <Route path="/options" element="Options"/>
      </Routes>
      </div>
    </div>

  );
}

export default App;
