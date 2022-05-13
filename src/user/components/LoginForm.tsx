import { Formik, Form  } from 'formik';
import * as Yup from 'yup';

import { LoginValues } from '../../shared/interfaces';
import Button from '../../shared/UIelements/Button'
import UserForm from '../../shared/UIelements/UserForm';
import UserInput from '../../shared/UIelements/UserInput';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("this field is required")
    .email("email address is invalid"),
  password: Yup.string()
    .required("This field is required")
    .min(8, "password must be at least 8 characters long"),
});


const LoginForm = () => {
    const initialValues: LoginValues = {
        email: "",
        password: ""
    }
    const onSubmit = (values: LoginValues ) => {
        console.log(values)
    }
  return (
    <UserForm title="Login">
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <UserInput 
            name="email"
            label="email"
            showValidationErrors={errors.email && touched.email}
            validationErrors={errors.email} 
            />
            <UserInput 
            name="password"
            label="password"
            showValidationErrors={errors.password && touched.password}
            validationErrors={errors.password} 
            />
            <Button type="submit" buttonText="Login" disabled={isSubmitting} ></Button>
          </Form>
        )}
      </Formik>
    </UserForm>
  );
};

export default LoginForm;