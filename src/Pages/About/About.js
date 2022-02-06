import React from "react";
import phonesMockup from "./2_phones.png";
import styled from 'styled-components';

const Parent = styled.div`
    display: flex;
    justify-content: center;
    margin: 100px;
`;

const Right = styled.div`
    width: 580px;
    height: 590px;
    padding: 20px;
    border-radius: 25px;
    box-shadow: 2px 10px 18px #888888;
    background-color: #cccccc;
    margin-left: 80px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Left = styled.div`
    width: 580px;
    height: 590px;
    padding: 20px;
    border-radius: 25px;
    text-align: center;
    box-shadow: 2px 10px 18px #888888;
    background-color: #cccccc;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-right:100px;
`;

const Par = styled.p`
  width:90%;
  margin-bottom:10px;
  margin-top: 20px;
  text-align:right;
  line-height: 1.6;  
`;

const Image = styled.img`
width: 850px;
height: 600px;
padding-bottom: 30px;
`;

const Title2 = styled.h1`
    color: #d31818;
    font-size: 25px;
    text-align:right;
`;

const About = () => {
  return (
    <>
      <style>{"body { background-color: #2d2f3b; }"}</style>
      <Parent>
        <Left>
          <Image src={phonesMockup} alt="fireSpot" />
        </Left>
        <Right>
          <Title2>ما هو تطبيق خدماتي؟</Title2>
          <Par>            تطبيق خدماتي، هو تطبيق فلسطيني يسهل على المواطنين انجاز خدماتهم
            واحتياجاتهم المتعلقة بالقطاع الحكومي بما فيه القطاع الصحي والمالي
            والقانوني والمواصلات، إضافة الى ملفات الأحوال المدنية والضرائب
            وغيرها من الخدمات، اذ يتيح للمستخدم إمكانية الاطلاع على كافة الملفات
            الخاصة به مثل الهوية الشخصية، جواز السفر، شهادة الميلاد، عقد الزواج
            وأي شهادات أخرى خاصة بالأفراد مثل شهادة التطعيم الخاصة بفايروس
            كورونا، إضافة الى إمكانية فحص سجل الضرائب والمخالفات والعمل على
            تسديدها الكترونياً دون الحاجة الى التوجه للدوائر الحكومية. ومن جانب
            آخر، يمكّن المستخدم من فحص تأمينه الصحي الحكومي ورخصه الخاصة
            بالسيارات او الأراضي او العقارات او أي ممتلكات خاصة تندرج تحت اسم
            وملكية المستخدم</Par>
          <Par>
            يهدف هذا التطبيق بشكل رئيسي الى التسهيل على
            المواطنين انجاز احتياجاتهم والخدمات الحكومية بأقل وقت وجهد، اذ يتم
            تعزيز هذه الخدمة من خلال توفير خاصية التنبيهات التي تقوم بدورها
            بإشعار المستخدم وتذكيره بتسديد فواتير ومخالفات واي التزامات مترتبة
            عليه، وأيضاً تنبيهه عند اقتراب موعد تجديد بياناته الشخصية مثل الهوية
            وجواز السفر وغيرها من الخدمات الأخرى
          </Par>
        </Right>
      </Parent>
    </>
  );
};

export default About;
