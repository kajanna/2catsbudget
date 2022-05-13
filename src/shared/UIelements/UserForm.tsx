import { Wrapper } from '../interfaces';

import styles from './UserForm.module.sass';

interface UserFormProps extends Wrapper {
    title: string
}

const Card = ({title, children}: UserFormProps) => {
    return (
        <div className={styles.form}>
                <div className={styles.title}>{title}</div> 
            {children} 
        </div>
    );
};

export default Card;