import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

//LOGIN/REGISTER INTERFACES
export interface LoginValues {
    email: string;
    password: string;
}
export interface RegisterValues extends LoginValues {
    name: string
}

//WARPING 
export interface Wrapper {
    children: ReactJSXElement | ReactJSXElement[]
}