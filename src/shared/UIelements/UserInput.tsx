import { Field } from 'formik';

import styles from './UserInput.module.sass'

interface UserInputProps {
    name: string;
    label: string
    validationErrors: string | undefined;
    showValidationErrors: string | boolean | undefined
}

const UserInput = ({ name, label, showValidationErrors, validationErrors }: UserInputProps) => {
    return (
            <div className={styles.userinput}>
             <Field name={name} className={`${styles.field} ${showValidationErrors && styles.error}`}/>
             <label className={styles.label}>{label}</label>
             {showValidationErrors && <div className={styles.errortext}>{validationErrors}</div>}
             </div>
   
    );
};

export default UserInput;