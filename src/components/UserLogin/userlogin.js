import React from 'react';
import './userlogin.sass';
import { useFormik } from "formik";
import { loginUserSchema } from "../schemas";

const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

const UserLogin = () => {
    const {
      values,
      errors,
      touched,
      isSubmitting,
      handleBlur,
      handleChange,
      handleSubmit,
    } = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginUserSchema,
      onSubmit,
    });
  
    console.log(errors);
  
    return (
        <div className="main-form">
          <p className='warning'>Oops, so far it's not working. We'll be back very soon!</p>
      <form className='form-style' onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="email">Email</label>
        <input
          value={values.email}
          onChange={handleChange}
          id="email"
          type="email"
          placeholder="Enter your email"
          onBlur={handleBlur}
          className={"input-styles"}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={"input-styles"}
        />
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}
        <button className='form-btn' disabled={isSubmitting} type="submit">
          Submit
        </button>
      </form>
      </div>
    );
  };

export default UserLogin;