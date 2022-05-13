import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
    name: Yup.string()
    .required("this field is required"),
    email: Yup.string()
      .required("this field is required")
      .email("email address is invalid"),
    password: Yup.string()
      .required("This field is required")
      .min(8, "password must be at least 8 characters long"),
  });

const RegisterForm = () => {
    return (
        <div>
            
        </div>
    );
};

export default RegisterForm;