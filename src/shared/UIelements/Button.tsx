import styles from './Button.module.sass'

interface ButtonProps {
    buttonText: string;
    outlined?: boolean;
    type?: "button" | "submit" | "reset" | undefined
    disabled?: boolean

}
const Button = ({ buttonText, outlined, type, disabled }: ButtonProps) => {
    return (
        <button className={styles.button} type={type} disabled={disabled}>
            {buttonText}
        </button>
    );
};

export default Button;