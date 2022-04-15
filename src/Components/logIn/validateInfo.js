export default function validateInfo(values) {

    let errors = {}

    if (!email.trim()) {
        errors.email = "خطأ في البريد الالكتروني"
    }

    if (!password) {
        errors.password = 'خطأ في كلمة المرور';
    } else if (values.password.length < 6) {
        errors.password = 'يجب أن تكون كلمة المرور أطول من سته احرف';
    }

    return errors;
}