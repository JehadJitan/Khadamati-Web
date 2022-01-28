export default function validateInfo(values) {
    let errors = {}

    if (!values.username.trim()) {
        errors.username = "خطأ في اسم المستخدم"
    }

    // if (!values.email) {
    //     errors.email = "خطأ في البريد الالكتروني"
    // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    //     errors.email = 'Email invalid';
    // }
    if (!values.password) {
        errors.password = 'خطأ في كلمة المرور';
    } else if (values.password.length < 6) {
        errors.password = 'يجب أن تكون كلمة المرور أطول من سته احرف';
    }

    // if (!values.password2) {
    //     errors.password2 = 'خطأ في كلمة المرور';
    // } else if (values.password2 !== values.password) {
    //     errors.password2 = 'كلمة المرور غير مطابقة';
    // }
    return errors;
}