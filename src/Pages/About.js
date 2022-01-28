import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import mainLogo from "../Images/2_phones.png";

import "./About.css";
const About = () => {
  return (
    <>
      <style>{"body { background-color: #2d2f3b; }"}</style>
      <div className="parent">
        <div className="child" id="image">
          <img src={mainLogo} alt="fireSpot" id="img2"></img>
        </div>
        <div className="child" id="txt">
          <p
            style={{
              width: "90%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            تطبيق خدماتي، هو تطبيق فلسطيني يسهل على المواطنين انجاز خدماتهم
            واحتياجاتهم المتعلقة بالقطاع الحكومي بما فيه القطاع الصحي والمالي
            والقانوني والمواصلات، إضافة الى ملفات الأحوال المدنية والضرائب
            وغيرها من الخدمات، اذ يتيح للمستخدم إمكانية الاطلاع على كافة الملفات
            الخاصة به مثل الهوية الشخصية، جواز السفر، شهادة الميلاد، عقد الزواج
            وأي شهادات أخرى خاصة بالأفراد مثل شهادة التطعيم الخاصة بفايروس
            كورونا، إضافة الى إمكانية فحص سجل الضرائب والمخالفات والعمل على
            تسديدها الكترونياً دون الحاجة الى التوجه للدوائر الحكومية. ومن جانب
            آخر، يمكّن المستخدم من فحص تأمينه الصحي الحكومي ورخصه الخاصة
            بالسيارات او الأراضي او العقارات او أي ممتلكات خاصة تندرج تحت اسم
            وملكية المستخدم. يهدف هذا التطبيق بشكل رئيسي الى التسهيل على
            المواطنين انجاز احتياجاتهم والخدمات الحكومية بأقل وقت وجهد، اذ يتم
            تعزيز هذه الخدمة من خلال توفير خاصية التنبيهات التي تقوم بدورها
            بإشعار المستخدم وتذكيره بتسديد فواتير ومخالفات واي التزامات مترتبة
            عليه، وأيضاً تنبيهه عند اقتراب موعد تجديد بياناته الشخصية مثل الهوية
            وجواز السفر وغيرها من الخدمات الأخرى.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
