import React from "react";
import { Form, Field } from "react-final-form";
import { NavLink } from "react-router-dom";
import styles from "./Auth.module.css";
import {
  required,
  isEmail,
  isValidPassword,
  composeValidators
} from "./validators";

function onSubmit(values) {
  return;
}

export default function LoginForm() {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, values, form, errors }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <NavLink to="/signup">Зарегистрироваться</NavLink>
          </div>
          <label htmlFor="email" className={styles.label}>
            <div className={styles.label__text}>Email:</div>
            <Field
              validate={composeValidators(required, isEmail)}
              component="input"
              type="email"
              name="email"
              className={styles.input}
            />
            {errors.email}
          </label>
          <label htmlFor="password" className={styles.label}>
            <div className={styles.label__text}>Password:</div>
            <Field
              validate={composeValidators(required, isValidPassword)}
              component="input"
              type="password"
              name="password"
              className={styles.input}
            />
            {errors.password}
          </label>
          {console.log(form.getState())}
          <button className={styles.submit}>Войти</button>
        </form>
      )}
    />
  );
}
