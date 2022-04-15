import React, { useEffect, useState } from "react";
import { getAdmin } from '../../shared/api';
import { useHistory } from "react-router-dom";


const useForm = (callback, validate) => {
    let history = useHistory();

    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const [isSubmitting, setIsSubmitting] = useState(false);

    function CheckAdmin() {
        const [arr, setArr] = useState([]);
        const [data, setData] = useState([]);

        useEffect(() => {
            getAdmin(values.email)
                .then((res) => {
                    if (res.success) {
                        if (values.password === res.data.password) {
                            history.push("/DB");
                        } else {
                            console.log("wrong password")
                        }
                    }
                    // console.log(res.data.data);
                    setData([...res.data.data.map(({ email, ...res }) => ({ ...res, email: email }))]);
                })
                .catch((err) => {
                    console.log(err);
                });
        }, [arr]);

        //     await getAdmin(email)
        //         .then(response => {
        //             JSON.stringify(response);
        //             if (response.data.length > 0) {
        //                 const registered = response.success;
        //                 console.log(response, pass);
        //                 if (registered) {
        //                     history.push("/DB");
        //                 }
        //             }
        //         })
        // }

        const handleChange = e => {
            const { name, value } = e.target;
            setValues({
                ...values,
                [name]: value
            });
        };

        const handleSubmit = e => {

            e.preventDefault();
            CheckAdmin();
            setErrors(validate(values));
            setIsSubmitting(true);
        };


        useEffect(
            () => {
                if (Object.keys(errors).length === 0 && isSubmitting) {
                    callback();
                }
            },
            [errors]
        );

        return { handleChange, handleSubmit, CheckAdmin, values, errors };
    };
}

export default useForm;