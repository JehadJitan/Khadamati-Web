import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";

import { useHistory } from "react-router-dom";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  let history = useHistory();

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit} noValidate>
        <h1>أهلا وسهلاً بكم في صفحة التحكم لتطبيق خدماتي</h1>
        <div className="form-inputs">
          <label className="form-label" htmlFor="username">
            : اسم المستخدم
          </label>
          <input
            type="text"
            name="username"
            className="form-input"
            placeholder="ادخل اسم المستخدم"
            id="username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        {/* <div className='form-inputs'>
                    <label className='form-label' htmlFor='email'>: البريد الالكتروني</label>
                    <input type='email' name='email' className='form-input' placeholder='ادخل البريد الالكتروني' id='email' value={values.email} onChange={handleChange} />
                    {errors.email && <p>{errors.email}</p>}
                </div> */}
        <div className="form-inputs">
          <label className="form-label" htmlFor="password">
            : كلمة المرور
          </label>
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="ادخل كلمة المرور"
            id="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button
          className="form-input-btn"
          type="submit"
          onClick={() => {
            history.push("/DB");
          }}
        >
          تسجيل الدخول
        </button>
        {/* <span className='form-input-login'>هل لديك حساب؟ إضغط <a href='#'>هنا</a></span> */}
        <button>Click me</button>
      </form>
    </div>
  );
};

export default FormSignup;
