import React from "react";

import LoginForm from "../components/LoginForm";

import styles from "./AuthPage.module.sass";

const AuthPage = () => {
  return (
    <div className={styles.auth}>
      <LoginForm />
    </div>
  );
};

export default AuthPage;
