import { Routes, Route } from "react-router-dom";

import NavBar from "./navigation/NavBar";
import AuthPage from './user/pages/AuthPage'

import styles from "./App.module.sass";

const App = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.main}>
        <NavBar />
        <Routes>
          <Route path="/" element="MainPage" />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/:usesId" element="UsersBudgets" />
          <Route path="/:usesId/:budgetId" element="BudgetSummary" />
          <Route path="/createBudget" element="CreateBudget" />
          <Route path="/options" element="Options" />
        </Routes>
      </div>
    </div>
  );
};

export default App;
