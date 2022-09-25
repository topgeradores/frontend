import { forwardRef } from "react";
export const FormInput = forwardRef(
    ({ children, type, placeholder, onChange, onBlur, name }, ref) => {
        return (
            <>
                <input
                    ref={ref}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={name}
                    className="form-control mb-2"
                    autoComplete="false"
                />
                {children}
            </>
        );
    }
);