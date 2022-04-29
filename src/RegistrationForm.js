import React from "react";
import { NavLink } from "react-router-dom";
import { Form, Field } from "react-final-form";
import styles from "./Auth.module.css";
import {
  required,
  isEmail,
  isValidPassword,
  isMatch,
  composeValidators
} from "./validators";

function onSubmit(values) {
  return;
}

export default function RegistrationForm() {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, values, errors }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <NavLink to="/auth">Войти</NavLink>
          </div>
          <label htmlFor="nickname" className={styles.label}>
            <div className={styles.label__text}>Nickname:</div>
            <Field
              validate={required}
              component="input"
              type="text"
              name="nickname"
              className={styles.input}
            />
            {errors.nickname && <div>is required</div>}
          </label>
          <label htmlFor="email" className={styles.label}>
            <div className={styles.label__text}>Email:</div>
            <Field
              validate={composeValidators(required, isEmail)}
              component="input"
              type="email"
              name="email"
              className={styles.input}
            />
            {errors.email && <div>is required</div>}
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
            {errors.password && <div>is required</div>}
          </label>
          <label htmlFor="repeatPassword" className={styles.label}>
            <div className={styles.label__text}>Repeat password:</div>
            <Field
              validate={composeValidators(required, isMatch(values.password))}
              component="input"
              type="password"
              name="repeatPassword"
              className={styles.input}
            />
            {errors.repeatPassword && <div>is required</div>}
          </label>
          <button className={styles.submit}>Зарегистрироваться</button>
        </form>
      )}
    />
  );
}
