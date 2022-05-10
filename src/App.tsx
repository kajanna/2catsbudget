import { Routes, Route } from "react-router-dom";

import './App.sass';

const App = () => {
  return (
    <div className="App">
      <Routes >
        <Route path="/" element="MainPage" />
        <Route path="/:usesId" element="UsersBudgets"/>
        <Route path="/:usesId/:budgetId" element="BudgetSummary"/>
        <Route path="/createBudget" element="CreateBudget"/>
        <Route path="/options" element="Options"/>
      </Routes>
     
    </div>
  );
}

export default App;
