import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./style.module.css";

function DynamicForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });

  const [isFieldValid, setIsFieldValid] = useState(false);

  const firstField = watch("username", "");

  useEffect(() => {
    const startsWithCapital = /^[A-Z]/.test(firstField);
    const isLongEnough = firstField.length > 5;

    setIsFieldValid(!errors.username && startsWithCapital && isLongEnough);
  }, [firstField, errors.username]);

  function submitData(data) {
    alert("We got you!");
    console.log(data);
  }

  return (
    <form className={styles.main_form} onSubmit={handleSubmit(submitData)}>
      <label className={styles.form_label} htmlFor="username">
        Type your name
        <input
          className={styles.form_text_input}
          {...register("username", {
            required: "Start with a capital letter, type more than 5 chars",
            pattern: {
              value: /^[A-Z]/,
              message: "Start with a capital letter",
            },
            validate: (value) =>
              value.length > 5 || "Must be more than 5 characters",
          })}
          type="text"
          id="username"
        />
        {errors.username && (
          <p className={styles.error_message}>{errors.username.message}</p>
        )}
      </label>

      {isFieldValid && (
        <label className={styles.form_label} htmlFor="anotherField">
          ...and say something
          <input
            className={styles.form_text_input}
            type="text"
            id="anotherField"
            {...register("anotherField")}
          />
        </label>
      )}

      <input className={styles.submit_btn} type="submit" value="Submit" />
    </form>
  );
}

export default DynamicForm;
