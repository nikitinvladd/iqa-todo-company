import React from 'react';
import './userregister.sass';
import { useFormik } from "formik";
import { registerUserSchema } from "../schemas";

const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

const UserRegister = () => {
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
        fullname: "",
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: registerUserSchema,
      onSubmit,
    });
  
    console.log(errors);
  
    return (
    <div className="main-form">
      <p className='warning'>Oops, so far it's not working. We'll be back very soon!</p>
      <form className='form-style' onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Full Name</label>
        <input
          value={values.fullname}
          onChange={handleChange}
          id="fullname"
          type="text"
          placeholder="Enter your full name"
          onBlur={handleBlur}
          className={"input-styles"}
        />
        {errors.fullname && touched.fullname && <p className="error">{errors.fullname}</p>}
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
        {errors.email && touched.email && <p className="error">{errors.email}</p>}
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="input"
          placeholder="Enter your age"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
          className={"input-styles"}
        />
        {errors.age && touched.age && <p className="error">{errors.age}</p>}
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
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            "input-styles"
          }
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
        <button className='form-btn' disabled={isSubmitting} type="submit">
          Submit
        </button>
      </form>
    </div>
    );
  };

export default UserRegister;