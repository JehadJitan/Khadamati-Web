import React, { useEffect, useState } from "react";
import "./Form.css";
import { useHistory } from "react-router-dom";
import logo from './img-2.png'
import { getAdmin } from "../../shared/api";

const LogIn = ({ submitForm }) => {
  let history = useHistory();

  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = e => {

    e.preventDefault();
    setIsSubmitting(true);
    getAdmin(email)
      .then((res) => {
        if (res.data.success) {
          if (password === res.data.data[0].password) {
            history.push("/DB");
          } else {
            console.log("wrong password");
            errors.password = 'خطأ في كلمة المرور';
            alert("كلمة المرور خاطئة");
          }
        }
        if (email !== res.data.data[0].email) {
          console.log("jhljojoijoijioj");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            <form className="form" onSubmit={() => handleSubmit}>
              <h1>أهلا وسهلاً بكم في صفحة التحكم لتطبيق خدماتي</h1>
              <div className="form-inputs">
                <label className="form-label" htmlFor="email">
                  : البريد الإلكتروني
                </label>
                <input
                  type="text"
                  name="email"
                  className="form-input"
                  placeholder="أدخل البريد الإلكتروني"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p>{errors.email}</p>}
              </div>
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p>{errors.password}</p>}
              </div>
              <div className="form-inputs2">
                <label className="form-label" style={{ 'margin-left': '10px' }}>: تذكرني</label>
                <input type="checkbox" value="rememberMe" id="rememberMe" style={{ 'transform': ' scale(1.25)' }} />
              </div>
              <button
                className="form-input-btn"
                type="submit"
                onClick={(e) => handleSubmit(e)}>
                تسجيل الدخول
              </button>
              <span className='form-input-login'>هل نسيت كلمة المرور؟ إضغط <a href='#'>هنا</a></span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
