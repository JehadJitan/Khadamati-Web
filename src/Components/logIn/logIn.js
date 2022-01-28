import React from "react";
import "./Form.css";
import useForm from "./useForm";
import validate from "./validateInfo";
import { useHistory } from "react-router-dom";
import logo from './img-2.png'

const LogIn = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validate);
  let history = useHistory();

  return (
    <>
      <style id="backG">
        {
          'body {background-repeat: no-repeat;  background-size: cover; background-position: center; background-image: url("https://images.pexels.com/photos/169677/pexels-photo-169677.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");}'
        }
      </style>

      <div id="root-container">
        <div className="form-container">
          <span className="close-btn">x</span>
          <div className="form-content-left">
            <img src={logo} alt="Khadamati-logo" className="form-img"></img>
          </div>
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
                  if (!values.email) {
                    errors.email = "خطأ في البريد الالكتروني"
                  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
                    errors.email = 'Email invalid';
                  } else {
                    history.push("/DB");
                  }
                  if (!values.password) {
                    errors.password = 'خطأ في كلمة المرور';
                  } else if (values.password.length < 6) {
                    errors.password = 'يجب أن تكون كلمة المرور أطول من سته احرف';
                  } else {
                    history.push("/DB");
                  }
                }}
              >
                تسجيل الدخول
              </button>
              {/* <span className='form-input-login'>هل لديك حساب؟ إضغط <a href='#'>هنا</a></span> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
